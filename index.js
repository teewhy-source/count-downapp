function startCountdown() {
   var hoursInput = document.getElementById("hours");
   var minutesInput = document.getElementById("minutes");
   var secondsInput = document.getElementById("seconds");
   
   var hours = parseInt(hoursInput.value);
   var minutes = parseInt(minutesInput.value);
   var seconds = parseInt(secondsInput.value);
   
   var totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
   
   var countdownElement = document.getElementById("countdown");
   
   var countdownInterval = setInterval(function() {
     if (totalTimeInSeconds <= 0) {
       clearInterval(countdownInterval);
       countdownElement.textContent = "Countdown Finished!, YOU MADE IT";
       return;
     }
     
     var remainingHours = Math.floor(totalTimeInSeconds / 3600);
     var remainingMinutes = Math.floor((totalTimeInSeconds % 3600) / 60);
     var remainingSeconds = totalTimeInSeconds % 60;
     
     countdownElement.textContent = remainingHours + "h " + remainingMinutes + "m " + remainingSeconds + "s";
     
     totalTimeInSeconds--;
   }, 1000);
 }

// step1 = change the display to block once the button is clcked
// step2 = set the attribute id to match the id in the href of your button

let showPopup = () =>{
   let popup = document.querySelector(".popup");
   popup.setAttribute("#show")
   popup.style.display = "block"
}


//  let button = document.querySelector("#btn");
//  button.addEventListener(onchange,function startCountdown() {
//    var hoursInput = document.getElementById("hours");
//    var minutesInput = document.getElementById("minutes");
//    var secondsInput = document.getElementById("seconds");
   
//    var hours = parseInt(hoursInput.value);
//    var minutes = parseInt(minutesInput.value);
//    var seconds = parseInt(secondsInput.value);
   
//    var totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
   
//    var countdownElement = document.getElementById("countdown");
   
//    var countdownInterval = setInterval(function() {
//      if (totalTimeInSeconds <= 0) {
//        clearInterval(countdownInterval);
//        countdownElement.textContent = "Countdown Finished!, YOU MADE IT";
//        return;
//      }
     
//      var remainingHours = Math.floor(totalTimeInSeconds / 3600);
//      var remainingMinutes = Math.floor((totalTimeInSeconds % 3600) / 60);
//      var remainingSeconds = totalTimeInSeconds % 60;
     
//      countdownElement.textContent = remainingHours + "h " + remainingMinutes + "m " + remainingSeconds + "s";
     
//      totalTimeInSeconds--;
//    }, 1000);
//  }