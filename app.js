
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
  var config = {
    apiKey: "AIzaSyBlKFGXVsslfgMcwKoID5VSEvgmYEfl46c",
    authDomain: "trainproject-26e1e.firebaseapp.com",
    databaseURL: "https://trainproject-26e1e.firebaseio.com",
    projectId: "trainproject-26e1e",
    storageBucket: "",
    messagingSenderId: "714017961348",
    appId: "1:714017961348:web:efc36a82df16bf5b"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

   // Create a variable to reference the database.
   var database = firebase.database();

  // Initial Values
var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = "";


 // add eventListerner for button

 $('#train-button').on('click',function(event){
    event.preventDefault();

    // Grabbed values from text-boxes
   trainName = $('#train-name').val().trim();
   destination = $('#destination').val().trim();
   firstTrain = $('#first-train').val().trim();
   frequency = $('#frequency').val().trim();



// object Trains
 // Code for "Setting values in the database"
 database.ref().set({
trainName: trainName,
destination: destination,
firstTrain: firstTrain,
frequency: frequency
  });
});

database.ref().push(newTrains);
alert('train has been succ added');
$('#train-name').val("");
$('#destination').val("");
$('#first-train').val("");
$('#frequency').val("");
//data base below authentication has info

 // Firebase watcher + initial loader HINT: .on("value")
 database.ref().on("value", function(snapshot) {

    // Log everything that's coming out of snapshot

    console.log(snapshot.val().trainName);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().firstTrain);
    console.log(snapshot.val().frequency);

    // Change the HTML to reflect
    $('#train-name').text(snapshot.val().trainName);
    $('#destination').text(snapshot.val().destination);
    $('#first-train').text(snapshot.val().firstTrain);
    $('#frequency').text(snapshot.val().frequency);

// Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


     // append to train schedule
     var newRow = $("#train-info").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(firstTrain),
        $("<td>").text(frequency),
        
    );