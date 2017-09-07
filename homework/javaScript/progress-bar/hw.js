
// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {

  drawNumericDisplay: function(timerValue){

    document.getElementById('numeric-display').textContext = timerValue;
//creates the variable Numeric Display and connects it to the application.
      var numericDisplay = document.getElementById('numeric-display');
//assign timer value to numericDisplay
      numericDisplay.textContent = timerValue;
//sets the css color to red when the value falls <= 10
      if (timerValue <= 10) {
        numericDisplay.style.color = 'red';
//increases the size of the timer by 5% for every second under 10
        var newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);
//allows the text to be emplasized and changed to the new size every second
        numericDisplay.style.fontSize = newSize + 'em';
      }
  },

  drawProgressBars: function(timerValue){
    // created variable of timeElapsed and set it to 100-the parameter timerValue
    var timeElapsed = 100 - timerValue;
    //called the document variable and used a method to call the class.
    document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + '%';
    var progress = 100 - timerValue;
    //created the bars variable and method for the Progress bar class
     var bars = document.getElementsByClassName('progress-bar');
     //created a for statement that reduced the length of the bar with the progress variable (100-timerValue)
     for (var i = 0; i < bars.length; i++) {
       bars[i].style.width = progress + '%';
     }
  },
  drawLitFuses: function(timerValue){
    //creates the variable percent unBurnt and sets the parameter.
    var percentUnburnt = timerValue/100;
    //called the document and called the unburnt class
    document.getElementsByClassName('unburnt')[0].style.width = percentUnburnt*98 + '%';
    //called the document to call the burnt class
    document.getElementsByClassName('burnt')[0].style.width = (1 - percentUnburnt)*98 + '%';
    //created a percentUnburnt variable and set the timerValue
     var percentUnburnt = timerValue/100;
    //created the variable numFuses and called the fuse class and the length
     var numFuses = document.getElementsByClassName('fuse').length;
    //created a for looped for the width of the wick
     for (var i = 0; i < numFuses; i++){
       document.getElementsByClassName('unburnt')[i].style.width = percentUnburnt*98 + '%';
       document.getElementsByClassName('burnt')[i].style.width = (1 - percentUnburnt)*98 + '%';
     }

      
  },
  drawCrawlers: function(timerValue){
    var timeElapsed = 100 - timerValue;
    if (timerValue%2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (timeElapsed*10) + 'px';
     var timeElapsed = 100 - timerValue;
     var crawlers = document.getElementsByClassName('crawler');
     for (var i = 0; i < crawlers.length; i++) {
       if (timerValue%2 === 0) {
         crawlers[i].style.marginTop = '0px';
       }
       else {
         crawlers[i].style.marginTop = '10px';
       }
       crawlers[i].style.marginLeft = (timeElapsed*10) + 'px';
     }
  }
};