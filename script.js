function updateClock(){

const now = new Date();

document.getElementById("digitalClock").innerHTML =
now.toLocaleTimeString();

document.getElementById("date").innerHTML =
now.toDateString();

document.getElementById("worldClock").innerHTML =
new Date().toLocaleTimeString("en-US",{
timeZone:"America/New_York"
});

let sec=now.getSeconds()*6;
let min=now.getMinutes()*6;
let hr=(now.getHours()%12)*30+min/12;

document.getElementById("second").style.transform=
`translateX(-50%) rotate(${sec}deg)`;

document.getElementById("minute").style.transform=
`translateX(-50%) rotate(${min}deg)`;

document.getElementById("hour").style.transform=
`translateX(-50%) rotate(${hr}deg)`;

}

setInterval(updateClock,1000);
updateClock();

navigator.getBattery().then(battery=>{
document.getElementById("battery").innerHTML=
Math.round(battery.level*100)+"%";
});

let alarmTime="";

function setAlarm(){
alarmTime=document.getElementById("alarmTime").value;
}

setInterval(()=>{
let now=new Date();
let current=
now.getHours().toString().padStart(2,"0")+":"+
now.getMinutes().toString().padStart(2,"0");

if(current===alarmTime){
alert("Alarm Ringing!");
}
},1000);

function addTask(){
let input=document.getElementById("taskInput");
let li=document.createElement("li");
li.textContent=input.value;
document.getElementById("taskList").appendChild(li);
input.value="";
}

let stopwatchInterval;
let seconds=0;

function startStopwatch(){
stopwatchInterval=setInterval(()=>{
seconds++;
let h=Math.floor(seconds/3600);
let m=Math.floor((seconds%3600)/60);
let s=seconds%60;

document.getElementById("stopwatch").innerHTML=
`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
},1000);
}

function resetStopwatch(){
clearInterval(stopwatchInterval);
seconds=0;
document.getElementById("stopwatch").innerHTML="00:00:00";
}
