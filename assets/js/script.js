let currentDayElement = $("#currentDay")
let timeInterval;
let timeBlockElement = $(".time-block")



let updateTimeBlockColor = function () {
    let currentTime = moment();
    
    timeBlockElement.each(function() {
        let timeBlockTime = moment($(this).data("time"), "hh:mm a");
        let nextHour = timeBlockTime.clone().add(1, 'hours');
        console.log(this)
        console.log(timeBlockTime)
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

//call this function to initialize the color of the time blocks
updateTimeBlockColor();

// set an interval to update the color of the time blocks every minute
timeInterval = setInterval(updateTimeBlockColor, 3600000);

    








// get time function
let startTime = function(){
    date = moment().format("MMM Do YYYY")
    timeInterval = setInterval(function(){
        time = moment().unix()
        newTime = moment(time*1000).format("HH:mm:ss")
        currentDayElement.text(`${date} at ${newTime} `)
    },1000)

}

startTime()