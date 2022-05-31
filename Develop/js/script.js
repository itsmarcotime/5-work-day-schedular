var clock = document.getElementById("currentDay");

//makes clock run in live time
setInterval(function() {

    var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");

    clock.textContent = rightNow;

}, 1000);


//HELP HERE
function auditHour() {

    var currentDate = moment().format("MMMM Do, YYYY - hh:mm:ss a");
    
    if (moment(currentDate).isAfter(currentDate, 'hour')) {

        console.log("itworks");
    }

};

auditHour();