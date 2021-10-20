const mongoose = require("mongoose")

const historySchema = new mongoose.Schema({

    transferredFrom: {
        type: String,
        required: true
    },

    transferredTo: {
        type: String,
        required: true
    },

    timeStamp: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    }

}
)

const History = mongoose.model('History', historySchema);

module.exports = History;