$('#comment').val('');

// get a new date (locale machine date time)
var date = new Date();
// get the date as a string
var n = date.toDateString();
// get the time as a string
var time = date.toLocaleTimeString();

// log the date in the browser console
console.log('Today is:', n);
// log the time in the browser console
console.log('Time:',time);