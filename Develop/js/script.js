var clock = document.getElementById("currentDay");


//makes clock run in live time
setInterval(function() {

    var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");

    clock.textContent = rightNow;

}, 1000);


//this loops thru timeblock and depending on current time colors should change
$(".description").each(function() {

    var currentTime = moment().hours();

    var timeBlock = $(this).attr("id");

    if (timeBlock < currentTime) {
        $(this).addClass("past");
    } else if (timeBlock === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }

});


//save to localstorage!
var saveStuff = function(e) {

    e.preventDefault();

    var text = $(this).siblings(".description").val();
    var hour = $(this).siblings(".description").attr("id");

    console.log(text);

    localStorage.setItem(hour, text);

};

function loadStuff() {

    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));

};

$(".saveBtn").click(saveStuff);
loadStuff();





  
