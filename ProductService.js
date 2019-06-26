var express = require('express');
var app = express();

//Reusable controllers
var ordersController=function(req, res){
  console.log("Invoking  rest api for product list");
  var orders = [
    {id:1, customer:"Arpit",amount:25000, status:"completed"},
	 ];
  res.send(orders);
};

app.get('/orders',ordersController);

var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8087", host, port)
})