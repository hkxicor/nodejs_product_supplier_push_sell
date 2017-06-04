const Product = require('../models/product');
const mongoose = require('mongoose');
const config = require('../config');
mongoose.connect(config.dbConnect);

module.exports = function(product_id, reseller_id, qty){

  //find that the product is with that reseller or not
  Product.findOne({id:product_id},function(err,result){

    if(err) console.error(err);
    else{

      console.log("Product <", result.productName,">X",qty," Quantity sold");

      const pushArrayLength = result.resellerPush.length;
      if( reseller_id === result.resellerPush[pushArrayLength - 1 ].id ){
        const resellerPush = result.resellerPush;
        resellerPush.reverse().map(function(item){
          const id = item.id;
          //now find reseller commission
          const commission = result.resellerComission.filter(function(obj){
            return obj.resellerId === id
          })[0].commission;
          //Print Trace
          console.log("Reseller <",id,"> got ",commission*qty);
        });
        console.log("Supplier <",result.supplier.name,"> got ",result.productRate*qty);
      }else{
        //Product is not with Reseller
        console.log("Product is not with reseller");
      }
    }
  })

}
