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
    setBGcolors();
};

// gets current date and renders in jumbotron header
function currentMomentDate() {
    currentDate = moment().format('dddd, LL');
    currentDateE1.text(currentDate);
};

// renders events pulled from local storage to DOM 
function renderEvents() {
    for (let i = 0; i < timeArr.length; i++) {
        $('[id^=timeblock-]').each(function (i, v) {
            $(v).val(localStorage.getItem(timeArr[i]));
        })
    }
};

// triggers click Handler for save buttons
saveBtn.on('click', saveButtonClickHandler);

// when button is clicked, pulls corresponding Time and Date values
function saveButtonClickHandler(event) {
    // keeps form from sending
    event.preventDefault();
    // sets Value to Time assosciated with the clcked save button
    calEntryEventTime = $(this).attr('id').split('-')[1];
    // sets values to the user's input text.
    calEntryEventText = $(this).siblings('textarea[name^="timeblock"]').val().trim();
    // calls function to stpre in local storage
    storeEvents();
};

// stores time and text values to loxa storage where (time= key) and (user's input text=value)
function setBGcolors() {
    localStorage.setItem(calEntryEventTime, calEntryEventText);
};

// updates timeblock classes and colors as time progresses 
function setBGcolors() {
    // for each timeblock ID, 
    timeblockID.each(function () {
    // split it to display the time contained at the end of the ID, 
    calTimeBlock = $(this).attr('id').split('-')[1];
    // and conver it to a moment.js format, and then an integer
    calTimeBlock = parseInt(moment(calTimeBlock, 'H').format('H'));
    // get moment.js time and format identically
    currentTime = parseInt(moment().format('H'));

    if (currentTime < calTimeBlock) {
        $(this).removeClass('past present');
        $(this).addClass('future');
    } else if (currentTime === calTimeBlock) {
        $(this).removeClass('past future');
        $(this).addClass('present');
    } else if (currentTime > calTimeBlock) {
        $(this).removeClass('present future');
        $(this).addClass('past');
    } else {
        console.log("Time Calculation Error");
    }
    })
};

// updates date and time and colors once per minute on the minute
function setIntervalOnMinute() {
    var currentDateSeconds = new Date().getSeconds();
    if (currentDateSeconds == 0) {
        setInterval(currentMomentDate, 60000);
        setInterval(setBGcolors, 60000);
    } else {
        setTimeout(function () {
            setIntervalOnMinute();
        }, (60 - currentDateSeconds) * 1000);
    }
    currentMomentDate();
    setBGcolors();
};

setIntervalOnMinute();

// initializes page
init();

// lastly: add media queries to upate viewing stle on mobile and small screens