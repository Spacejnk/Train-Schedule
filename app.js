
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("time").innerHTML = t;
}
// get a new date (locale machine date time)
var date = new Date();
document.getElementById('today').innerHTML += date.toDateString();
// get the date as a string
var n = date.toDateString();

var trainName = "";
var destination = "";
var startTime = "";
var frequency = 0;