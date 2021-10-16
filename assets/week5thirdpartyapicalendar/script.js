// for current date and time
let currentDateE1 = $('#currentDate');
let currentDate;
let currentTime;

// Set-To/get from local storage (time and text)
let calEntryEventTime;
let calEntryEventText;
let timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

// button 
let saveBtn = $('.savebtn');

// determine color 
let caTimeBlock;
let timerInterval;
let timeblockID = $("textarea[id*='timeblock']");

// call function to render date and events to the DOM & update colors 
function init() {
    currentMomentDate();
    renderEvents();
    setBGcolors():
}:

// gets current date and renders in jumbotron header
function currentMomentDate() {
    currentDate = moment().format('dddd, LL');
    currentDateE1.text(currentDate);
};

// renders events pulled from local storage to DOM 


// triggers click Handler for save buttons

// when button is clicked, pulls corresponding Time and Date values
    
    // keeps form from sending
    
    // sets Value to Time assosciated with the clcked save button

    // sets values to the user's input text.

    // calls fimctopm tp stpre in local storage


// stores time and text values to loxa storage where (time= key) and (user's input text=value)

// updates timeblock classes and colors as time progresses 
    // for each timeblock ID, 

    // split it to display the time contained at the end of the ID, 

    // and conver it to a moment.js format, and then an integer

    // get moment.js time and format identically

// updates date and time and colors once per minute on the minute

// initializes page

// lastly: add media queries to upate viewing stle on mobile and small screens