const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bankingSystem"||process.env.MONGO_URI, {useNewUrlParser : true}).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log(e);
})
