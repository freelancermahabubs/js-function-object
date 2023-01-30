
//ARRAY VS OBJECT

var shoppingItems = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
  mahabub: 12,
  antor: 45,
  samad: 78,
  jibon: 12,
  Rohima: 32,
  Korima: 14
}


var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse:1,
  pen: 25,
  shoes: 2,

}

const keys = Object.keys(shoppingCart);
console.log(keys);
const value = Object.values(shoppingCart);
console.log(value);
// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];
for (var i = 0; i < keys.length; i++){
  var properteyName = keys[i];
  var properteyValue = shoppingCart[properteyName];
  console.log(properteyName, properteyValue);
}

//for in loop

for(var properteyName in shoppingCart) {
  const value = shoppingCart[properteyName];
  console.log(properteyName, value);
}