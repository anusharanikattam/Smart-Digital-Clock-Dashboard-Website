// CLOCK
const hour =
document.getElementById("hour");

const minute =
document.getElementById("minute");

const second =
document.getElementById("second");

const digitalClock =
document.getElementById("digitalClock");

const greeting =
document.getElementById("greeting");

const dateEl =
document.getElementById("date");

function updateClock(){

    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // Analog
    hour.style.transform =
    `translateX(-50%)
     rotate(${h*30+m*0.5}deg)`;

    minute.style.transform =
    `translateX(-50%)
     rotate(${m*6}deg)`;

    second.style.transform =
    `translateX(-50%)
     rotate(${s*6}deg)`;

    // Digital
    digitalClock.innerHTML =
    `${String(h).padStart(2,'0')}
     :
     ${String(m).padStart(2,'0')}
     :
     ${String(s).padStart(2,'0')}`;

    // Greeting
    if(h < 12){

        greeting.innerHTML =
        "🌅 Good Morning Anusha";

    }

    else if(h < 18){

        greeting.innerHTML =
        "☀️ Good Afternoon Anusha";

    }

    else{

        greeting.innerHTML =
        "🌙 Good Evening Anusha";
    }

    // Date
    dateEl.innerHTML =
    now.toDateString();
}

setInterval(updateClock,1000);

updateClock();


// WORLD CLOCK
function updateWorldClock(){

    document.getElementById("india")
    .innerHTML =
    new Date().toLocaleTimeString(
        "en-IN"
    );

    document.getElementById("usa")
    .innerHTML =
    new Date().toLocaleTimeString(
        "en-US",
        {timeZone:'America/New_York'}
    );

    document.getElementById("japan")
    .innerHTML =
    new Date().toLocaleTimeString(
        "en-JP",
        {timeZone:'Asia/Tokyo'}
    );
}

setInterval(updateWorldClock,1000);

updateWorldClock();


// WEATHER API
async function getWeather(){

    const apiKey = "YOUR_API_KEY";

    const city = "Vijayawada";

    const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("temp")
    .innerHTML =
    `🌡 Temp: ${data.main.temp}°C`;

    document.getElementById("humidity")
    .innerHTML =
    `💧 Humidity:
     ${data.main.humidity}%`;

    document.getElementById("wind")
    .innerHTML =
    `🌬 Wind:
     ${data.wind.speed} km/h`;
}

getWeather();


// BATTERY STATUS
navigator.getBattery().then(function(battery){

    function updateBattery(){

        document.getElementById("battery")
        .innerHTML =
        `${Math.floor(
            battery.level*100
        )}% ${
            battery.charging
            ? "⚡ Charging"
            : ""
        }`;
    }

    updateBattery();

    battery.addEventListener(
        "levelchange",
        updateBattery
    );
});


// INTERNET STATUS
function updateInternet(){

    if(navigator.onLine){

        document.getElementById("internet")
        .innerHTML =
        "🟢 Connected";

    }

    else{

        document.getElementById("internet")
        .innerHTML =
        "🔴 Offline";
    }
}

window.addEventListener(
    "online",
    updateInternet
);

window.addEventListener(
    "offline",
    updateInternet
);

updateInternet();


// VOICE ASSISTANT
window.onload = function(){

    let speech =
    new SpeechSynthesisUtterance(

    "Welcome Anusha to Smart Clock Dashboard"

    );

    speechSynthesis.speak(speech);
};


// DARK MODE
document.getElementById("themeBtn")
.addEventListener("click",()=>{

    document.body.classList.toggle(
        "light-mode"
    );

});


// STOPWATCH
let sec = 0;
let min = 0;
let hrs = 0;

let timer = null;

function stopwatchRun(){

    sec++;

    if(sec == 60){

        sec = 0;

        min++;
    }

    if(min == 60){

        min = 0;

        hrs++;
    }

    document.getElementById("stopwatch")
    .innerHTML =
    `${String(hrs).padStart(2,'0')}
     :
     ${String(min).padStart(2,'0')}
     :
     ${String(sec).padStart(2,'0')}`;
}

function startStopwatch(){

    if(timer !== null) return;

    timer =
    setInterval(stopwatchRun,1000);
}

function pauseStopwatch(){

    clearInterval(timer);

    timer = null;
}

function resetStopwatch(){

    clearInterval(timer);

    timer = null;

    sec = 0;
    min = 0;
    hrs = 0;

    document.getElementById("stopwatch")
    .innerHTML = "00:00:00";
}
let hours = now.getHours();
let session = "AM";

if(hours >= 12){
  session = "PM";
}
hours = hours % 12 || 12;