var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "coins",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

exports.jsonToDb = function (jsonArr) {
  return new Promise((resolve, reject) => {
    if (jsonArr) {
        
      var sql = "INSERT INTO coins_rates (name, date , value) VALUES ?";
      con.query(
        sql,
        [
          Object.keys(jsonArr).map((key) => [
            key,
            jsonArr[key].timestamp,
            jsonArr[key].last,
          ]),
        ],
        function (err, result) {
          if (err) reject(err);
          console.log("1 record inserted");
          resolve("saved");
        }
      );
    }
  });
};
