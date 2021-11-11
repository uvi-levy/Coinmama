var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cron = require("node-cron");
var indexRouter = require("./routes/index");
var coinsRouter = require("./routes/coins");
var loadData = require("./loaddata");
var jsonToDb = require("./jsonToDB");
var app = express();

var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port);
});




// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/coins", coinsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// running a task every hour
cron.schedule("0 * * * *", () => { 
loadData
  .loadData()
  .then((data) => {
    console.log("data from app" + data);
    jsonToDb.jsonToDb(data).then((msg) => console.log(msg));
  })
  .catch((err) => console.log(err));
});
module.exports = app;
