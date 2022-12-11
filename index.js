require("dotenv").config();
const db = require("./functions/dbConnect")();

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cookieParser());

// importing routers
adminRouter = require("./routes/admin");
productRouter = require("./routes/product");
saleRouter = require("./routes/sale");
sellerRouter = require("./routes/seller");


app.use("/admin", adminRouter);
app.use("/product", productRouter);
app.use("/sale", saleRouter);
app.use("/seller", sellerRouter);


app.get("/", (req, res) => {
    if(db){
        res.send("true")
    } else {
        res.send(process.env.MONGODB_STRING)
    }
    // res.send("This is index page")
})
// section for middlewares
// auth.js

app.listen(PORT, () => {
    console.log("connected!");
});