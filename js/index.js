var countDownDateOfficial = new Date("August 31, 2021 16:00:00").getTime();

 
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDateOfficial - now;
        
  
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        

    document.getElementById("daysOficial").innerHTML = days + " " + "Days"
    document.getElementById("hoursOficial").innerHTML = hours + " " +  "Hours" 
    document.getElementById("minsOficial").innerHTML = minutes + " " +  "Minutes" 
    document.getElementById("secsOficial").innerHTML = seconds + " " +  "Seconds" 
        

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("daysOficial").innerHTML = ""
        document.getElementById("hoursOficial").innerHTML = "" 
        document.getElementById("minsOficial").innerHTML = ""
        document.getElementById("secsOficial").innerHTML = ""
        document.getElementById("endOficial").innerHTML = "TIME UP!!";
    }
    }, 1000);


    var countDownDateBeta = new Date("Jul 20, 2021 16:00:00").getTime();

 
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDateBeta - now;
        
  
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        

    document.getElementById("daysBeta").innerHTML = days + " " + "Days"
    document.getElementById("hoursBeta").innerHTML = hours + " " +  "Hours" 
    document.getElementById("minsBeta").innerHTML = minutes + " " +  "Minutes" 
    document.getElementById("secsBeta").innerHTML = seconds + " " +  "Seconds" 
        

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("daysBeta").innerHTML = ""
        document.getElementById("hoursBeta").innerHTML = "" 
        document.getElementById("minsBeta").innerHTML = ""
        document.getElementById("secsBeta").innerHTML = ""
        document.getElementById("endBeta").innerHTML = "TIME UP!!";
    }
    }, 1000);