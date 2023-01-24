$(document).ready(function() { // We want our code to execute only after the DOM has completely loaded in the browser.

    /* 1. Displaying Date and Time at the top of the Scheduler
    ===========================================================*/
    var currentDayEl = $("#currentDay");

    var rightNow = moment().format("LLLL"); // Current day, date, month, year and time

    currentDayEl.text(rightNow); // Sets the time text at the top of the scheduler


    /* 2. Colour-coding the Event Entry Area
    =========================================*/

    // The data-hour attribute has been set for each time block. It is basically equivalent to the hour, in 24-hour format. It will allow us to access the hour numbers directly, which we won't be able to do with an id.

    // Now, we will get that attribute out and compare it to the current time (in 24-hour format). If it is less (ie. in the past), we'll switch on the .past class. If equal (ie. current), the .present class. And if greater than (ie. in the future), the .future class.
   

    function updateHourlyColour() {

        var currentHour = parseInt(moment().hour());

        $(".time-block").each(function() { // Loop over all the time-block rows

            var dataHour = parseInt($(this).attr("data-hour"));

            if(dataHour < currentHour) { // If hour is in the past   
                
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past"); // Bear in mind that this styling will be applied to the entire time block row. However, we have also specified styling for the hour and save button elements to give the desired appearance
                                   
            } else if(dataHour == currentHour) { // If hour is in the present
                                
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
                console.log("present");        
        
            } else if(dataHour > currentHour) { // If hour is in the future
                                                
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
                console.log("future");              
                
            }    
        });
    }

    updateHourlyColour(); // Call the function

    


});