const express = require("express");
const Customer = require("./model/customer");
const History = require("./model/history");
require("./model/conn")

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.render("index");
})

app.get("/customer", async (req, res) => {
    try {
        const cust = await Customer.find({});
        res.render("customer", { cust });
        //res.render("customer");
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }

})

app.post("/transfer", async (req, res, next) => {
    try {
        const from = req.body.transferFrom;
        // const a = req.body;
        // console.log(a);
        const to = req.body.transferTo;
        const amount = req.body.amount;

        const fromcust = await Customer.findOne({ name: from })
        const tocust = await Customer.findOne({ name: to })

        console.log(from, to, amount, fromcust, tocust);

        if (!fromcust || !tocust) {
            throw new AppError("User Not Found", 401);
        }

        if (fromcust.currentBalance > 0 && amount < fromcust.currentBalance && amount > 0) {
            const f = new History({ transferredFrom: fromcust.name, transferredTo: tocust.name, timeStamp: Date(), amount: amount, });
            await f.save();
            await Customer.findOneAndUpdate({ name: fromcust.name }, { currentBalance: parseInt(fromcust.currentBalance) - parseInt(amount) });
            await Customer.findOneAndUpdate({ name: tocust.name }, { currentBalance: parseInt(tocust.currentBalance) + parseInt(amount) });
        }
        res.redirect("/");
    }

    catch (e) {
        console.log(e);
        res.send(e);
    }
})

app.get("/transfer", async (req, res) => {
    res.render("transfer");
})

app.get("/history", async (req, res) => {
    try {
        const hist = await History.find({});
        res.render("history", { hist });
        //res.render("history");
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }

})

app.listen(80, () => {
    console.log("Server running")
})

