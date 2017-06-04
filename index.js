const express = require('express');
const bodyParser = require('body-parser');


const Product = require('./models/product');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());



//functions import
var initDatabase = require('./functions/initDatabase');
var push = require('./functions/push');
var sell = require('./functions/sell');

//////////////////////////
 //Follow Steps to Run Project
//////////////////////////

//Step 1
//Initialize the Database uncommenct next Line
//initDatabase();
//now hit node index.js in terminal

//Step 2
// Push Product to Diffrent Resellers

 //2.1 Uncomment Next Line
 //push(1,2) // push Product 1 to Reseller 2
 //now hit node index.js in terminal

 //2.2 Uncomment Next Line
 //push(1,3) // push Product 1 to Reseller 3
 //now hit node index.js in terminal

 //2.3 Uncomment Next Line
 //push(1,4) //push Product 1 to Reseller 4
 //now hit node index.js in terminal

 //2.4 Uncomment Next Line
 //push(1,1) //push Product 1 to Reseller 1
 //now hit node index.js in terminal

//Step 3
// Uncomment Next Line
//sell(1,1,10) //Sell Product 1 which is located to Reseller 1 and Quantity is 10
//now hit node index.js in terminal

// Test 1
//sell(1,3,10) //Throw Error that Product is not with Reseller 3
//now hit node index.js in terminal

//Test 2
//push(1,3) // Throw Error that Product is alredy pushed to reseller 3
//now hit node index.js in terminal
