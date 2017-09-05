# we are importing url's not data because we wnt to maximze caching and so we 
# are avoding duplication.  The way to avoid duplication is to return to 
# sources only one way and that one way is when you ask for the individual
# resource. 

import os

#initialize flask
from flask import Flask, url_for, jsonify, request

# using flask sql Alchemy is a wrapper for the sql library
# from flask.ext.sqlalchemy import SQLAlchemy
from flask_sqlalchemy import SQLAlchemy

basedir = os.path.abspath(os.path.dirname(__file__))
db_path = os.path.join(basedir, '../data.sqlite')

app = Flask(__name__)

#url is pointing to database as a sqlite Db
#the db_path is set to the root path of the folder
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path

#initializing the database
db = SQLAlchemy(app)

# exeption error is a validatoinError, a custom exception
class ValidationError(ValueError):
    pass

#customer model that is set on the server side
#inherits from db.Model, has a table name customers, default is singular.  
#this sets it plural
class Customer(db.Model):
    __tablename__ = 'customers'
    #this is the key
    #name is 64 characters long 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)


    #all resources return with a self_url and they know what the url is
    #and return it as a representation of the json body.  Anytime you need to
    #to get the url, it'll call customer.get_url()
    def get_url(self):
        #'get_customer' will get the route 
        return url_for('get_customer', id=self.id, _external=True)

    # This is how it'll export the data and render it as a json structure
    # Good to have it hidden and not in the route, in an auxiliary place, decided
    # to put it as a method in the customer model, all the models know how to 
    # dump themselves as a json, 
    def export_data(self):
        return {
            'self_url': self.get_url(),
            'name': self.name
        }

    # this is when we create a new resource and the client was a json representation
    # of the data.  We need to convert that and place it into an object that goes into 
    # into the dB
    def import_data(self, data):
        # need to do exception catch b/c we don't know if the data is valid
        # and it's not missing anything we need
        try:
            #the python diction is the input of the function 'data'
            self.name = data['name']
        except KeyError as e:
            # when name is missing, we are going to have a key error
            # and raise an exception.  This model doesn't really know how to handle
            # any error so we create an exception
            raise ValidationError('Invalid customer: missing ' + e.args[0])
            # assuming everything went well, we now populate the attributes of 
            # this object self and object is now created and now added in the dB
        return self


# we are going to see the routes that support the GET and POST for the customer and
# and relying heavily on the model and the support built in the model to export and 
# import the data

# Implementing GET, wee need to get a collection of customers with '/customers/'
# impleneted with get_customers, the way it'going to be implemented
# will be setting up a dictionary with customers key and the value for 
# returns 'all customers'  'Customer.query.all()', it will return as model objects
# For each model object, it'll return the url.
# using list comprehension to convert a list of customers into a list of url's
@app.route('/customers/', methods=['GET'])
def get_customers():
    return jsonify({'customers': [customer.get_url() for customer in
                                  Customer.query.all()]})


# this is for the 2nd individual customer requrest as it has a dynamic
# component '<int:id>' , 'get_customer(id) is getting the id and run a query
# and run the 'get_or_404 which is a flask alchemy method, useful for getting
# the resource if it exists or returns a 404.  

@app.route('/customers/<int:id>', methods=['GET'])
def get_customer(id):
    # if 'get_or_404 returns valid then it returns a customer 
    # and to returns a representation for the customer, we invoke 
    # 'export_data' as it returns the dictionary representation 
    # that goes into jsonify and goes into the client 
    return jsonify(Customer.query.get_or_404(id).export_data())


# this method creates a customer and is based on the collection
# of url's, and adding an item into the collectoin
@app.route('/customers/', methods=['POST'])
def new_customer():
    # to do this, we first create a new customer
    customer = Customer()
    # invoking import_data and rely on the json data that flask
    # pulls in the request, will have the decoded dictionary
    # and populate the attribuest of the customer
    customer.import_data(request.json)
    # when we have the customer, we add it to the db session.
    # to add the item into the db we use db.session
    # there is no error checking because at import data, 
    db.session.add(customer)
    db.session.commit()

    # finally we return a jsonify  empty dictionary, 
    # 2nd response set a 201,for the status code
    # 3rd response is setting a header 'Location'

    #one place to change data and less likely to have bugs
    return jsonify({}), 201, {'Location': customer.get_url()}



# this method is used to edit the existing customer
@app.route('/customers/<int:id>', methods=['PUT'])
# id comes as an argument
def edit_customer(id):
    # retrieve the customer that represents that data from the dB
    # using the get_or_404, and when it returns it's good data
    customer = Customer.query.get_or_404(id)

    # with the good data, we now import data from request.json
    # and it will replace all the items provided by the client
    # and then add it back to the dB 
    customer.import_data(request.json) 
    db.session.add(customer)
    db.session.commit()
    
    #return an empty response
    return jsonify({})


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)




#He understood that """triple quotes""" were used to include documentation within the code

def x_intercept (m, b):
     "" "
     Return the x intercept of the line y = m * x + b. The x intercept of a
     line is the point at Which it crosses the x axis (y = 0).
     "" "
     return-b / m

