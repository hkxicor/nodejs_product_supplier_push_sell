const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Product', new Schema({
  id:Number,
  productName: String,
  productRate: Number,
  supplier: {
    id: Number,
    name: String,
    address: String
  },
  resellerComission:[
  {
    resellerId: Number,
    commission: Number
  }
  ],
  resellerPush:[{
    id: Number
  }]
},{collection: 'products'}));
