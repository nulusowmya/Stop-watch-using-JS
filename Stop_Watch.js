var seconds=0;
var minutes=0;
var hours=0;
var displayseconds=0;
var displayhours=0;
var displayminutes=0;
var interval="null";
var h,m,s;

function stopWatch(){
    seconds++;

    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }

    if(seconds<10){
        displayseconds="0"+seconds.toString();
    }
    else{
        displayseconds=seconds;
    }
    if(minutes<10){
        displayminutes="0"+minutes.toString();
    }
    else{
        displayminutes=minutes;
    }
    if(hours<10){
        displayhours="0"+hours.toString();
    }
    else{
        displayhours=hours;
    }
    document.getElementById("timer").innerHTML=displayhours+":"+displayminutes+":"+displayseconds;
}

function start(){
    h=hours;
    m=minutes;
    s=seconds;
    interval=window.setInterval(stopWatch,1000);
}

function stop(){
    document.getElementById("clr").style.display="block";
    var time=0;
    var x="";
    window.clearInterval(interval);
    var h1=hours-h;
    var m1=minutes-m;
    var s1=seconds-s;
    x+="-- ";
    if(h1>0){
        x+=h1.toString()+" hours ";
    }
    if(m1>0){
        x+=m1.toString()+" min ";
    }
    x+=s1.toString()+" sec ";
    document.getElementById("items").innerHTML+="<br>"+x;
}

function reset(){
    document.getElementById("timer").innerHTML="00:00:00";
    seconds=0;
    minutes=0;
    hours=0;
}

function delfun(){
    document.getElementById("items").innerHTML='';
    document.getElementById("clr").style.display="none"; 
}