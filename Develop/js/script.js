var clock = document.getElementById("currentDay");
var buttonEl = document.getElementById("btn");

//makes clock run in live time
setInterval(function() {

    var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");

    clock.textContent = rightNow;

}, 1000);


//this loops thru timeblock and depending on current time colors should change
$(".description").each(function() {

    var currentTime = moment().hours();

    var timeBlock = $(this).attr("id");

    for (var i = 0; i < timeBlock.length; i++) {

        if (timeBlock[i] < currentTime) {
            $(this).addClass("backgroundGreen");
        } else if (timeBlock[i] > currentTime) {
            $(this).addClass("backgroundRed");
        } else {
            $(this).addClass("description");
        }
    };

});


//HELP HERE 
var saveStuff = function() {
    localStorage.setItem("", JSON.stringify());
};

buttonEl.addEventListener("click", saveStuff);

  
