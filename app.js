
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

  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8kZIn2lB_IzFDFgtKapluryTRMeXi3ik",
    authDomain: "train-dff2e.firebaseapp.com",
    databaseURL: "https://train-dff2e.firebaseio.com",
    projectId: "train-dff2e",
    storageBucket: "",
    messagingSenderId: "976384710362",
    appId: "1:976384710362:web:6cc071aa8f84f7cb"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var trainName = "";
var destination = "";
var startTime = "";
var frequency = 0;