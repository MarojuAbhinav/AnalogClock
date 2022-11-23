const secondsHand = document.getElementById("second-hand");
const minutesHand = document.getElementById("minute-hand");
const hoursHand = document.getElementById("hour-hand");

setInterval(function(){
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();

    secondsHand.style.transform = "rotate("+(seconds*6)+"deg)";
    minutesHand.style.transform = "rotate("+(minutes*6)+"deg)";
    hoursHand.style.transform = "rotate("+ (30*hours + Math.round(minutes/2)) +"deg)";

},1000);