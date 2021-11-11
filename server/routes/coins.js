var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "coins",
});

/* GET coins listing. */
router.get("/", function (req, res) {
  con.query("SELECT * FROM coins_rates", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
