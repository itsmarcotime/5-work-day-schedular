var clock = document.getElementById("currentDay");

//makes clock run in live time
setInterval(function() {

    var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");

    clock.textContent = rightNow;

}, 1000);