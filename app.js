
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
    apiKey: "AIzaSyBlKFGXVsslfgMcwKoID5VSEvgmYEfl46c",
    authDomain: "trainproject-26e1e.firebaseapp.com",
    databaseURL: "https://trainproject-26e1e.firebaseio.com",
    projectId: "trainproject-26e1e",
    storageBucket: "",
    messagingSenderId: "714017961348",
    appId: "1:714017961348:web:efc36a82df16bf5b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// var trainName = "";
// var destination = "";
// var firstTrain = "";
// var frequency = 0;




///  create on click to grab data from form....
//var database = firebase.database();
 // add eventListerner for button

 $('#train-button').on('click',function(){
  var trainName = $('#train-name').val().trim();
  var destination = $('#destination').val().trim();
  var firstTrain = $('#first-train').val().trim();
  var frequency = $('#frequency').val().trim();



// object Trains

var newTrains = {
tirainName = tirainName,
destination: destination,
firstTrain: firstTrain,
frequency: frequency
};

database.ref().push(newTrains);
alert('train has been succ added');
$('#train-name').val("");
$('#destination').val("");
$('#first-train').val("");
$('#frequency').val("");
})
//data base below authentication has info