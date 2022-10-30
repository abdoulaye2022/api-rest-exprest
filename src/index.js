const express = require("express");
const bodyParser = require("body-parser");

// importation des router
const v1ProductRouter = require("./v1/routes/ProductRouters");

const app = express();
const PORT = process.env.PORT || 8000;

// Les routers de l'application
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "PUT, POST, PATCH, DELETE, GET"
        );
        return res.status(200).json({});
    }
    next();
});

app.use("/api/v1/products", v1ProductRouter);

app.listen(PORT, () => {
    console.log(`API is listing on port ${PORT}`);
});
