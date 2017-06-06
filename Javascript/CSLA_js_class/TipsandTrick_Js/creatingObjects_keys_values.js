
 var person = {};
var key = "name";

person[key] /* this is same as person.name */ = "John";

console.log(person); // should print  Object { name="John"}

var key = 'DYNAMIC_KEY',
    obj = {
        [key]: 'ES6!'
    };

console.log(obj);



