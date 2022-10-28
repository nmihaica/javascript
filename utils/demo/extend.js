var extend = require('../extend')

var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
var object3 = {
  apple: 'yum',
  pie: 3.214,
  applePie: true
}

// Create a new object by combining two or more objects
var newObjectShallow = extend(object1, object2, object3);
var newObjectDeep = extend(true, object1, object2, object3);

console.log('shallow', newObjectShallow)
console.log('deep', newObjectDeep)