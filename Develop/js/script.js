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





  
