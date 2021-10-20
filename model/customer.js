const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    accountID: {
        type: String,
        required: true
    },
    
    mail: {
        type: String,
        required: true
    },

    currentBalance: {
        type: Number,
        required: true
    }
  });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;