const mongoose = require('mongoose');
const config = require('../config');
mongoose.connect(config.dbConnect);
const Product = require('../models/product');


module.exports = function(product_id, reseller_id){
  Product.findOne({id:product_id},'-_id',function(err,result){
    if(err) {console.error(err)}
    else{
      //check that reseller is able to resell the product or not
      if(checkResellerSellProduct(result.resellerComission, reseller_id)){

        //check if product is alredy pushed to that reseller
        if(checkProductPushed(result.resellerPush, reseller_id)){
          //Redy to push item
          Product.update({id:product_id},{$push:{
            resellerPush:{id:reseller_id}
          }},function(err,result){
            if(err) console.error(err);
            else{
              console.log(result);
            }
          });

        }else{
          console.log("Product is alredy pushed to that reseller ",reseller_id);
        }
      }else{
          console.log("Reseller ",reseller_id," Dose Not Resell this Product");
      }
    }
  })
}

function checkResellerSellProduct(obj, reseller_id) {
  var flag = obj.map(function(obj){
    return obj.resellerId == reseller_id
  }).indexOf(true);
  return flag != -1
}

function checkProductPushed(obj, reseller_id) {
  var flag = obj.map(function(obj){
    return obj.id == reseller_id
  }).indexOf(true);
  return flag == -1
}
