// Digital Clock

function updateClock(){

let now=new Date();

document.getElementById("digitalClock").innerHTML=
now.toLocaleTimeString();

document.getElementById("date").innerHTML=
now.toDateString();

let h=now.getHours()%12;
let m=now.getMinutes();
let s=now.getSeconds();

document.getElementById("hour").style.transform=
`translateX(-50%) rotate(${h*30+m/2}deg)`;

document.getElementById("minute").style.transform=
`translateX(-50%) rotate(${m*6}deg)`;

document.getElementById("second").style.transform=
`translateX(-50%) rotate(${s*6}deg)`;
}

setInterval(updateClock,1000);

// World Clock

setInterval(()=>{
let india=new Date().toLocaleTimeString("en-IN");
document.getElementById("worldClock").innerHTML=
"India: "+india;
},1000);

// Alarm

let alarmTime="";

function setAlarm(){
alarmTime=document.getElementById("alarmTime").value;
alert("Alarm Set");
}

setInterval(()=>{
let now=new Date();
let current=
String(now.getHours()).padStart(2,'0')+
":"+
String(now.getMinutes()).padStart(2,'0');

if(current===alarmTime){
alert("Alarm Ringing!");
}
},1000);

// Stopwatch

let timer;
let sec=0;

function startStopwatch(){
timer=setInterval(()=>{
sec++;
document.getElementById("stopwatch").innerHTML=sec+" s";
},1000);
}

function stopStopwatch(){
clearInterval(timer);
}

function resetStopwatch(){
clearInterval(timer);
sec=0;
document.getElementById("stopwatch").innerHTML="00:00:00";
}

// Battery

if(navigator.getBattery){
navigator.getBattery().then(function(battery){
document.getElementById("battery").innerHTML=
Math.round(battery.level*100)+"%";
});
}

// Todo

function addTask(){

let task=document.getElementById("taskInput").value;

if(task==="") return;

let li=document.createElement("li");
li.innerHTML=task;

document.getElementById("taskList").appendChild(li);

document.getElementById("taskInput").value="";
}

// Theme Changer

function changeTheme(c1,c2){
document.body.style.background=
`linear-gradient(135deg,${c1},${c2})`;
}