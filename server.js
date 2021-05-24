const express = require("express");
const app = express();
const port = 3000;

app.listen(port, function() {
  console.log("server has started");
});

app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
  // res.send("working fine");
  res.sendFile(__dirname + "/BMI-Calculator.html");
  console.log(__dirname);
})

app.post("/bmicalculator", function(req, res) {
  var vWeight = Number(req.body.weight);
  var vHeight = Number(req.body.height);
  var result = bmiCalc(vWeight, vHeight);

  res.send("your BMI is: " + result);
})

function bmiCalc(weight, height) {
  var heightInMeter = height / 100;
  var bmi = weight / (heightInMeter * heightInMeter);
  return bmi;
}
