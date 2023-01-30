var student = {
   id: 115,
   name: 'Mahabub Alom',
   class: 12,
   marks: 98
  }

  var mobile = {
    brand:'Samsung',
    price: 19000,
    storage: '64gb',
    camera: '7MP',
    color: 'Black'
  }

  var myComputer = {
    brand: 'HP',
    price: 60000,
    color: 'Blue',
    processor: 'i5'
  }
  console.log(myComputer.processor);
  myComputer.processor = 'i7';
  console.log(myComputer);