window.onload =
  function(){
  //---vars to access html elements ---//
  let seconds = 00;
  let tens = 00;
  let minutes = 00;
  let hours = 00;
   
  let appendTens = document.getElementById("tens");
  let appendSeconds = 
      document.getElementById("seconds");
  let appendMinutes = document.getElementById("minutes");
  let appendHours = document.getElementById("hours");
  
  let buttonReset = document.getElementById("button-reset");
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");

  let Interval;
  
  //---functions to start, stop, reset ---//
  buttonStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer,10);
  }

  buttonStop.onclick = function(){
    clearInterval(Interval);
  }

  buttonReset.onclick = function(){
    clearInterval(Interval);
    tens="00";
    seconds = "00";
    minutes = "00";
    hours = "00";
      appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
  }
  
  function startTimer(){
    tens++;
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if(tens > 9){
      appendTens.innerHTML = tens;
    }
    
    if(tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if(seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
         seconds = 0;
         minutes++;
        appendTens.innerHTML = "0" + 0;
        appendSeconds.innerHTML = "0" + 0;
        appendMinutes.innerHTML = "0" + minutes;
  
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }

    if (minutes > 59) {
      seconds = 0;
      minutes = 0;
      hours++;
      appendTens.innerHTML = "0" + 0;
      appendSeconds.innerHTML = "0" + 0;
      appendMinutes.innerHTML = "0" + 0;
    }

    if (hours > 9) {
      appendHours.innerHTML = hours;

    if (hours > 23)
      seconds = 0;
      minutes = 0;
      hours = o;
    }
  }
  
};
