const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Reseller', new Schema({
      resellerId: Number,
      productId: Number,
      comission: Number
},{collection: 'reseller'}));
