var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse:1,
  pen: 25
}

var mobile = {
  price: 12000,
  color: 'white',
  battery: '2hm0',
  meadin: 'Bangladesh'
}
// number 1 way to propertey value findeout
var colorCount = mobile.color;
console.log(colorCount);
// number 2 way to propertey value findeout
var colorCount2 = mobile['color'];
console.log(colorCount2);
// number 3 way to propertey value findeout
var properteysName = 'price';
// var properteyValue = mobile[properteyName]
// console.log(properteyName, properteyValue);

// all Property values finde out
var properteyValues = Object.values(mobile);
console.log(properteyValues)
// all properteyName find out
var properteyKeys = Object.keys(mobile);
console.log(properteyKeys);
// how to set properteyValues 
mobile.meadin = 'China'
console.log(mobile);

// set properteyValues way number -1
mobile.color = 'black'
console.log(mobile);
// set properteyValues way Number -2
mobile['battery'] = '20jmh';
console.log(mobile);
// set properteyValues way number -3 
mobile[properteysName] = 100000000;
console.log(mobile);








// when you know the specific property name, use dot notation to get the property value-1
var penCount = shoppingCart.pen;
// alternative system
// when you know the specific property name, use dot notation to get the property value -2
var penCount2 = shoppingCart['pen'];
// get properteyValues - 3
var propertyName = 'books';
var properteyValue = shoppingCart[propertyName]
// console.log(properteyValue, propertyName);

// all propertey name need 
var properties = Object.keys(shoppingCart);
// need all properties value
var properteyValues = Object.values(shoppingCart);
// console.log(properteyValues);
// console.log(properties);
// console.log(shoppingCart);

// set property values way -1
shoppingCart.mouse = 15;
// console.log(shoppingCart);
// set properties values way -2
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
// set properties values way -3
// shoppingCart[propertyName] = 40;
// console.log(shoppingCart);
