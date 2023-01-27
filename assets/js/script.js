let currentDayElement = $("#currentDay")
let timeInterval;

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