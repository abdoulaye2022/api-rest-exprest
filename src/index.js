const express = require("express");
const bodyParser = require("body-parser");

// importation des router
const v1ProductRouter = require("./v1/routes/ProductRouters");

const app = express();
const PORT = process.env.PORT || 3000;

// Les routers de l'application
app.use(bodyParser.json());
app.use('/api/v1/products', v1ProductRouter);

app.listen(PORT, () => {
    console.log(`API is listing on port ${PORT}`);
});