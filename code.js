//Start Button
function startButtonClick(){
    //don't let the user click the start button while countdown is running
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;

    //shorthand to point to the
    var countdownElem = document.getElementById("countdown");
    runTimer(countdownElem);
}

var arrInterval = new Array();

//Stop button
function stopButtonClick(){
    //don't let the user click the stop button while countdown is running
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;

    for (counter = 0; counter <51; counter++){
        clearTimeout(arrInterval[counter]);
    }
}

//this function will ask for a first name, last name and badge number
//the names need to be less than 20 characters and the badge number needs to be three characters or less
function getUserInput(){
    var fullName = "";
    var badgeNumber = 0;

    do{
        //the full name
        var firstName = prompt("Please enter your first name: ");
        var lastName = prompt("please enter your last name: ");

        fullName = firstName + " " + lastName;
        
        if (fullName.length > 20){
            alert("Please enter a shorter name! Length was: " + fullName.length);
        }
    }
    while(fullName.length > 20);

        do{
    //the badge number
    badgeNumber = prompt("Please enter your badge number: ")
    
    if (badgeNumber > 999){
        alert("Please enter a shorter badge number!")
        }
    }while (badgeNumber > 999);

    return fullName + ", Badge number " + badgeNumber;
}

//this is our new countdown function
function runTimer(countdownElem){
     //tracks the current countdown time
     var currTime = 50;

     //tracks the current time
     var timeout = 3;

     //this value will not change and creates the one second delay
     var timeoutIncrement = 1000;

     //loops
     for(var counter=0; counter < 51; counter++){
         //comment this one
        arrInterval[counter] = setTimeout(function(){
            if(currTime == 0){
            alert("Blastoff!");
            countdownElem.innerHTML = "Launch successful";
        } //half-way stretch
            else if (currTime <25){
            countdownElem.innerHTML = "Nothing less than 1/2 to launch, time left: = " + currTime;
        }
        else{
            countdownElem.innerHTML = currTime;
        }

        currTime = currTime - 1;
    }, timeout);
    timeout = timeout + timeoutIncrement;
     }
    }


    /*I have chosen Kanban as my flavor of agile

    During my research, I have chosen to talk about Kanban. I believe it is the easiest board since it uses visual goals.
    Kanban allows you to visualize your goal, called the commitment point. Then visualizes the steps it takes along the way until you reach your final step, the delivery point.
    It is slower but much more simpler than Scrum, another flavor of agile that was made back in the 90s and is recommended to be used with Kanban by the team behind it.*/