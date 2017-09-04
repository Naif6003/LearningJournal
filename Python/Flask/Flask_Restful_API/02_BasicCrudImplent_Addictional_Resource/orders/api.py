import os
from datetime import datetime
from dateutil import parser as datetime_parser
from dateutil.tz import tzutc
from flask import Flask, url_for, jsonify, request
# from flask.ext.sqlalchemy import SQLAlchemy
from flask_sqlalchemy import SQLAlchemy
from utils import split_url


basedir = os.path.abspath(os.path.dirname(__file__))
db_path = os.path.join(basedir, '../data.sqlite')

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path

db = SQLAlchemy(app)


class ValidationError(ValueError):
    pass


class Customer(db.Model):
    __tablename__ = 'customers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    orders = db.relationship('Order', backref='customer', lazy='dynamic')

    def get_url(self):
        return url_for('get_customer', id=self.id, _external=True)

    def export_data(self):
        return {
            'self_url': self.get_url(),
            'name': self.name,

            #url is generated with _eternal and doing this
            #it'll be fully quilified and it will add the full url
            'orders_url': url_for('get_customer_orders', id=self.id,
                                  _external=True)
        }

#
    def import_data(self, data):
        try:
            self.name = data['name']
        except KeyError as e:
            raise ValidationError('Invalid customer: missing ' + e.args[0])
        return self


class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    items = db.relationship('Item', backref='product', lazy='dynamic')

    def get_url(self):
        return url_for('get_product', id=self.id, _external=True)

    def export_data(self):
        return {
            'self_url': self.get_url(),
            'name': self.name
        }

    def import_data(self, data):
        try:
            self.name = data['name']
        except KeyError as e:
            raise ValidationError('Invalid product: missing ' + e.args[0])
        return self


#uses dates and its a little more complicated.

class Order(db.Model):
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'),
                            index=True)
    date = db.Column(db.DateTime, default=datetime.now)

# this will delete order and if that's deleted, then all the associated items will 
# be deleted along with it such as items. cascade instructions means 'all' of the items 
# assocated will be deleted
    items = db.relationship('Item', backref='order', lazy='dynamic',
                            cascade='all, delete-orphan')

    def get_url(self):
        return url_for('get_order', id=self.id, _external=True)


    def export_data(self):
        return {
            'self_url': self.get_url(),
            'customer_url': self.customer.get_url(),

            # for dates we are using isoformat for dates and comes without 
            # the time zones and adding the Z will be the 'UTC' timezone object

            'date': self.date.isoformat() + 'Z',
            'items_url': url_for('get_order_items', id=self.id,
                                 _external=True)
        }

# convert that date fomr the client and to the object
    def import_data(self, data):
        try:
            # date will come as a string and so we need to use an
            # astimezone becase python standard libary doesn't parse 
            #standar times.  You can export but not import
            # daytime_parser will parse the string and return a daytime object
            # that has a timezone in it.  
            # to Be consistant, we need to have the time be consistant from 
            # from one timezone, using UTC timezone.  

            # when we use the datetime_parser 'date' as a string, it will include 
            # the timezone. timezone 'aware' objects will have time zones 
            # included with them and naive will not have the time zones included
            
            # tzutc() will return a utc aware timezone object
            # replace(tzinfo=None) will remove the timezone bit from the object
            # so in summary, this is taking in a naive time object going into 
            # the database
            self.date = datetime_parser.parse(data['date']).astimezone(
                tzutc()).replace(tzinfo=None)
        except KeyError as e:
            raise ValidationError('Invalid order: missing ' + e.args[0])
        return self

# this model has links for the orderId
class Item(db.Model):
    __tablename__ = 'items'
    id = db.Column(db.Integer, primary_key=True)
    
    # This has the links 
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'), index=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'),
                           index=True)
    quantity = db.Column(db.Integer)

    def get_url(self):
        return url_for('get_item', id=self.id, _external=True)

    def export_data(self):
        return {
            'self_url': self.get_url(),
            'order_url': self.order.get_url(),
            'product_url': self.product.get_url(),
            'quantity': self.quantity
        }

# we need to take the product url and covert that into a product and create a links
# to create a relationship.  Flask cannot take a url easily and convert that into a resource
# and what id that url is refering to.  
    def import_data(self, data):
        try:
    
# flask cannot take a url and tell us what resource it represents, it has the information to 
# do it but there's no public way to generate it

# split_url is taking the url and what resource it represents and what id in particular
# split_url is passing the url and look at the url map, it will return the endpoint name
# so basically if you pass this to url_for, it'll return the original url that your start with

#split_url will return quantity and or product_url or it will return an error
            endpoint, args = split_url(data['product_url'])
            self.quantity = int(data['quantity'])
        except KeyError as e:
            raise ValidationError('Invalid order: missing ' + e.args[0])
# if there were no errors, we need to make sure that the url is the product url
# and check if the end point is get_product and make sure the arguement has an id in it
# and if either one is not there, there is another validation error
        if endpoint != 'get_product' or not 'id' in args:
            raise ValidationError('Invalid product URL: ' +
                                  data['product_url'])

# now we can issue a query to the product object and assign it to my property.
        self.product = Product.query.get(args['id'])

# if the query returns none, then the client sent a product that doesn't exist 
# it's another check but it shouldn't happen
        if self.product is None:
            raise ValidationError('Invalid product URL: ' +
                                  data['product_url'])
        return self

@app.route('/customers/', methods=['GET'])
def get_customers():
    return jsonify({'customers': [customer.get_url() for customer in
                                  Customer.query.all()]})

@app.route('/customers/<int:id>', methods=['GET'])
def get_customer(id):
    return jsonify(Customer.query.get_or_404(id).export_data())

@app.route('/customers/', methods=['POST'])
def new_customer():
    customer = Customer()
    customer.import_data(request.json)
    db.session.add(customer)
    db.session.commit()
    return jsonify({}), 201, {'Location': customer.get_url()}

@app.route('/customers/<int:id>', methods=['PUT'])
def edit_customer(id):
    customer = Customer.query.get_or_404(id)
    customer.import_data(request.json)
    db.session.add(customer)
    db.session.commit()
    return jsonify({})


@app.route('/products/', methods=['GET'])
def get_products():
    return jsonify({'products': [product.get_url() for product in
                                 Product.query.all()]})

@app.route('/products/<int:id>', methods=['GET'])
def get_product(id):
    return jsonify(Product.query.get_or_404(id).export_data())

@app.route('/products/', methods=['POST'])
def new_product():
    product = Product()
    product.import_data(request.json)
    db.session.add(product)
    db.session.commit()
    return jsonify({}), 201, {'Location': product.get_url()}

@app.route('/products/<int:id>', methods=['PUT'])
def edit_product(id):
    product = Product.query.get_or_404(id)
    product.import_data(request.json)
    db.session.add(product)
    db.session.commit()
    return jsonify({})



@app.route('/orders/', methods=['GET'])
def get_orders():
    return jsonify({'orders': [order.get_url() for order in Order.query.all()]})

@app.route('/customers/<int:id>/orders/', methods=['GET'])
def get_customer_orders(id):
    customer = Customer.query.get_or_404(id)
    return jsonify({'orders': [order.get_url() for order in
                               customer.orders.all()]})

@app.route('/orders/<int:id>', methods=['GET'])
def get_order(id):
    return jsonify(Order.query.get_or_404(id).export_data())

@app.route('/customers/<int:id>/orders/', methods=['POST'])
def new_customer_order(id):
    customer = Customer.query.get_or_404(id)
    order = Order(customer=customer)
    order.import_data(request.json)
    db.session.add(order)
    db.session.commit()
    return jsonify({}), 201, {'Location': order.get_url()}

@app.route('/orders/<int:id>', methods=['PUT'])
def edit_order(id):
    order = Order.query.get_or_404(id)
    order.import_data(request.json)
    db.session.add(order)
    db.session.commit()
    return jsonify({})



@app.route('/orders/<int:id>', methods=['DELETE'])
def delete_order(id):

    #if we get a order delete then we want to delete all the items along with the order
    order = Order.query.get_or_404(id)
    db.session.delete(order)
    db.session.commit()
    return jsonify({})


@app.route('/orders/<int:id>/items/', methods=['GET'])
def get_order_items(id):
    order = Order.query.get_or_404(id)
    return jsonify({'items': [item.get_url() for item in order.items.all()]})

@app.route('/items/<int:id>', methods=['GET'])
def get_item(id):
    return jsonify(Item.query.get_or_404(id).export_data())

@app.route('/orders/<int:id>/items/', methods=['POST'])
def new_order_item(id):
    order = Order.query.get_or_404(id)
    item = Item(order=order)
    item.import_data(request.json)
    db.session.add(item)
    db.session.commit()
    return jsonify({}), 201, {'Location': item.get_url()}

@app.route('/items/<int:id>', methods=['PUT'])
def edit_item(id):
    item = Item.query.get_or_404(id)
    item.import_data(request.json)
    db.session.add(item)
    db.session.commit()
    return jsonify({})

@app.route('/items/<int:id>', methods=['DELETE'])
def delete_item(id):
    item = Item.query.get_or_404(id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
