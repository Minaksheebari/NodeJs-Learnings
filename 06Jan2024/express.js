const express = require('express')
const app = express()
products = [{
  name: "coke",
  price:35,
  category: "drink"
},

{
  name: "rice",
  price:350,
  category: "groceries"
},

{
  name: "books",
  price:100,
  category: "learning"
},
];

module.exports = products;

//creating API for fetching all the products
app.get("/getAllProducts",function(req,res) {
  res.send(products);
});

app.get("/product/:name",function(req,res) {
  productName = req.params.name
  findProduct = {}

  for (index=0; index<products.length;index++)
  {
    if (products[index].name==productName){
      findProduct=products[index]
      break;
    }
  }

  if (findProduct){
  res.send(findProduct)
  }
  else{
    res.send("Product name not found")
  }

});


//the port that I am listening to is 3000
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)


// Build an express API - interview question
