function runTimer(countdownElem){
     //tracks the current countdown time
     var currTime = 50;

     //tracks the current time
     var timeout = 5000;

     //this value will not change and creates the five second delay
     var timeoutIncrement = 5000;

     //loops
     for(var counter=0; counter < 11; counter++){
         //comment this one
        setTimeout(function(){
            if(currTime == 0){
            alert("Blastoff!");
            countdownElem.innerHTML = "Launch successful";
        } //half-way stretch
            else if (currTime <25){
            countdownElem.innerHTML = "Nothing less than 1/2 to launch, time left = " + currTime;
        }
        else{
            countdownElem.innerHTML = currTime;
        }

        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;
     }
    }