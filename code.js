function runTimer(countdownElem){
     //tracks the current countdown time
     var currTime = 50;

     //tracks the current time
     var timeout = 5000;

     //this value will not change and creates the five second delay
     var timeoutIncrement = 5000;

     setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;
    
    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;   
    
    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;   
    
    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;   

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;   

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;   

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;   

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;   

    setTimeout(function(){
        countdownElem.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;   

    //This is the last time we need to call setTimeout, currTime is now 0
    setTimeout(function(){
        alert("blastoff!");
        countdownElem.innerHTML = "Launch Successful";
    }, timeout);
}