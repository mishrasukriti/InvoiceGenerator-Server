const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  clientName: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  clientEmail: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  clientAddress: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  clientNumber: {
    type: Number,
    required: true,
  },

  
  dueDate: {
    type: Date,
    default: Date.now(),
  },

  products: {
    type:Array
  },
  create_time:{
    type: Date,
    default: Date.now(),
  },
  totalPrice:{
    type: Number
  }


});

module.exports = mongoose.model("Invoice", invoiceSchema);
