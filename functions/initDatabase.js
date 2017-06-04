const Product = require('../models/product');
const mongoose = require('mongoose');
const config = require('../config');
mongoose.connect(config.dbConnect);

module.exports = function(){

        const product = new Product({
          id:1,
          productName: 'Product Name',
          productRate: 20,
          supplier: {
            id: 1,
            name: 'My Supplier One',
            address: 'New Location, India'
          },
          resellerComission:[
            {
              resellerId:1,
              commission: 2
            },
            {
              resellerId:2,
              commission: 4
            },
            {
              resellerId:3,
              commission: 5
            },
            {
              resellerId:4,
              commission: 10
            }
          ],
          resellerPush:[]
        });

        product.save(function(err){
          if(err) console.error(err);
          else{
            console.log("success");
          }
        });
  }
