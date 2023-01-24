$(document).ready(function() { // We want our code to execute only after the DOM has completely loaded in the browser.

    /* 1. Displaying Date and Time at the top of the Scheduler
    ===========================================================*/
    var currentDayEl = $("#currentDay");

    var rightNow = moment().format("LLLL"); // Current day, date, month, year and time

    currentDayEl.text(rightNow); // Sets the time text at the top of the scheduler

});