
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

var trainName = "";
var destination = "";
var startTime = "";
var frequency = 0;


///  create on click to grab data from form....
//var database = firebase.database();
 // add eventListerner for button

 $('#trian-button').on('click',function(){
  var name = $('#employee-name').val().trim();
  var role = $('#role').val().trim();
  var st = $('#st').val().trim();
  var mr= $('#mr').val().trim();



// object employee

var newEmp = {
name: name,
role: role,
st: st,
mr: mr
};

database.ref().push(newEmp);
alert('emp has been succ added');
$('#employee-name').val("");
$('#role').val("");
$('#st').empty();
$('#mr').val();
})
//data base below authentication has info