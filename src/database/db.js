const mysql = require("mysql");
const config = require("../../config/config");

const db = config.db;

const connection = mysql.createConnection({
    host: db.HOST,
    user: db.USER,
    password: db.PASSWORD,
    database: db.DB
});

connection.connect((err) => {
    if(err) throw err;
    console.log("Connected successfully");
})

module.exports = connection;