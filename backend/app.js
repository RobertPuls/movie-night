const express = require('express');
const body-parser = require('body-parser');
const cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

app.use(funciton(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404;
  next(err);
});

app.use(function(req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {}
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("ready");
});

module.exports = app;
