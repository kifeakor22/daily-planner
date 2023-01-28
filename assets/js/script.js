$(document).ready(function(){
    let currentDayElement = $("#currentDay")
    let timeInterval;
    let desBlockElement = $(".description")
    let notifyTimeElement =  $("<p>");

// Get time counting function
    let startTime = function(){
        date = moment().format("MMM Do YYYY")
        timeInterval = setInterval(function(){
        time = moment().unix()
        newTime = moment(time*1000).format("HH:mm:ss")
        currentDayElement.text(`${date} at ${newTime} `)
    },1000)
}

// update time block colors based on time
let updateTimeBlockColor = function () {
    let currentTime = moment();
    desBlockElement.each(function() {
        let timeBlockTime = moment($(this).data("time"), "hh:mm a");
        let nextHour = timeBlockTime.clone().add(1, 'hours');
        if(currentTime.isBefore(timeBlockTime)) {
            $(this).addClass("future");
        }
        else if(currentTime.isBetween(timeBlockTime, nextHour)) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    });
}

// set an interval to update the color of the time blocks every hour
timeInterval = setInterval(updateTimeBlockColor, 3600000);

// function to save to local storage
let saveLocal = function (event){
        event.preventDefault()
        var inputID = $(this).parent().attr("id")
        var inputeValue = $(this).siblings(".description").val()
        localStorage.setItem(inputID,inputeValue)
        notifyTimeElement.addClass("notifyTime").text(`at ${moment().format("HH:mm:ss a")}!`)
        $("#notify").append(notifyTimeElement)
        $("#notify").addClass("show")
        
        setTimeout(function () {$("#notify").removeClass("show")},3000)     
    }

updateTimeBlockColor();  // call update time block function 
startTime(); // call start time function 


// save plans when user click save  
$(".saveBtn").on("click",saveLocal)
notifyTimeElement.val("") // clear notifcation time 


// make local storage content persist 
$("#9").children().eq(1).val(localStorage.getItem("9"))
$("#10").children().eq(1).val(localStorage.getItem("10"))
$("#11").children().eq(1).val(localStorage.getItem("11"))
$("#12").children().eq(1).val(localStorage.getItem("12"))
$("#13").children().eq(1).val(localStorage.getItem("13"))
$("#14").children().eq(1).val(localStorage.getItem("14"))
$("#15").children().eq(1).val(localStorage.getItem("15"))
$("#16").children().eq(1).val(localStorage.getItem("16"))
$("#17").children().eq(1).val(localStorage.getItem("17"))

})