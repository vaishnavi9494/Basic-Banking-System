const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bankingSystem" || "mongodb+srv://vrocks123:NI8gUeTuZTxuIlJh@cluster01.cskrp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser : true, useNewUrlParser: true, useFindAndModify: false}).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log(e);
})
