// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1500);
});

// ==========================
// DIGITAL CLOCK + DATE
// ==========================

function updateClock() {

    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();

    document.getElementById("date").innerHTML =
        now.toDateString();
}

setInterval(updateClock, 1000);
updateClock();

// ==========================
// GREETING
// ==========================

function updateGreeting() {

    const hour = new Date().getHours();

    let greeting = "";

    if (hour < 12) {
        greeting = "☀️ Good Morning";
    } else if (hour < 18) {
        greeting = "🌤 Good Afternoon";
    } else {
        greeting = "🌙 Good Evening";
    }

    document.getElementById("greeting").innerHTML = greeting;
}

updateGreeting();

// ==========================
// ANALOG CLOCK
// ==========================

function updateAnalogClock() {

    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    const secDeg = sec * 6;
    const minDeg = min * 6 + sec * 0.1;
    const hrDeg = hr * 30 + min * 0.5;

    document.getElementById("second").style.transform =
        `translateX(-50%) rotate(${secDeg}deg)`;

    document.getElementById("minute").style.transform =
        `translateX(-50%) rotate(${minDeg}deg)`;

    document.getElementById("hour").style.transform =
        `translateX(-50%) rotate(${hrDeg}deg)`;
}

setInterval(updateAnalogClock, 1000);
updateAnalogClock();

// ==========================
// WORLD CLOCK
// ==========================

function updateWorldClock() {

    document.getElementById("india").innerHTML =
        new Date().toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata"
        });

    document.getElementById("usa").innerHTML =
        new Date().toLocaleTimeString("en-US", {
            timeZone: "America/New_York"
        });

    document.getElementById("london").innerHTML =
        new Date().toLocaleTimeString("en-GB", {
            timeZone: "Europe/London"
        });
}

setInterval(updateWorldClock, 1000);
updateWorldClock();

// ==========================
// ALARM SYSTEM
// ==========================

let alarmTime = null;

const alarmAudio =
document.getElementById("alarmSound");

function setAlarm() {

    alarmTime =
    document.getElementById("alarmTime").value;

    if (!alarmTime) {
        alert("Please select alarm time");
        return;
    }

    document.getElementById("alarmStatus").innerHTML =
    "⏰ Alarm Set For : " + alarmTime;
}

function stopAlarm() {

    alarmAudio.pause();
    alarmAudio.currentTime = 0;

    document.getElementById("alarmPopup")
    .style.display = "none";

    document.getElementById("alarmStatus")
    .innerHTML = "Alarm Stopped";
}

function snoozeAlarm() {

    stopAlarm();

    let now = new Date();

    now.setMinutes(now.getMinutes() + 5);

    alarmTime =
    String(now.getHours()).padStart(2, "0")
    + ":" +
    String(now.getMinutes()).padStart(2, "0");

    document.getElementById("alarmStatus")
    .innerHTML =
    "😴 Snoozed For 5 Minutes";
}

setInterval(() => {

    if (!alarmTime) return;

    const now = new Date();

    const currentTime =
    String(now.getHours()).padStart(2, "0")
    + ":" +
    String(now.getMinutes()).padStart(2, "0");

    if (currentTime === alarmTime) {

        alarmAudio.play();

        document.getElementById("alarmPopup")
        .style.display = "flex";

        document.getElementById("alarmStatus")
        .innerHTML =
        "🚨 Alarm Ringing!";

        alarmTime = null;
    }

}, 1000);

// ==========================
// STOPWATCH
// ==========================

let stopwatchInterval;

let hours = 0;
let minutes = 0;
let seconds = 0;

function updateStopwatch() {

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById("stopwatch").innerHTML =
    `${String(hours).padStart(2,'0')}:` +
    `${String(minutes).padStart(2,'0')}:` +
    `${String(seconds).padStart(2,'0')}`;
}

function startStopwatch() {

    if (stopwatchInterval) return;

    stopwatchInterval =
    setInterval(updateStopwatch, 1000);
}

function pauseStopwatch() {

    clearInterval(stopwatchInterval);

    stopwatchInterval = null;
}

function resetStopwatch() {

    clearInterval(stopwatchInterval);

    stopwatchInterval = null;

    hours = 0;
    minutes = 0;
    seconds = 0;

    document.getElementById("stopwatch")
    .innerHTML = "00:00:00";
}

// ==========================
// BATTERY STATUS
// ==========================

if ("getBattery" in navigator) {

    navigator.getBattery().then((battery) => {

        function updateBattery() {

            document.getElementById("battery")
            .innerHTML =
            "🔋 " +
            Math.round(battery.level * 100)
            + "%";
        }

        updateBattery();

        battery.addEventListener(
            "levelchange",
            updateBattery
        );
    });

} else {

    document.getElementById("battery")
    .innerHTML =
    "Battery API Not Supported";
}

// ==========================
// TODO LIST
// ==========================

function addTask() {

    let task =
    document.getElementById("taskInput").value;

    if (task.trim() === "") return;

    let li =
    document.createElement("li");

    li.innerHTML =
    `${task}
    <span
    style="float:right;cursor:pointer;"
    onclick="this.parentElement.remove()">
    ❌
    </span>`;

    document.getElementById("taskList")
    .appendChild(li);

    document.getElementById("taskInput")
    .value = "";
}

// ==========================
// MOTIVATIONAL QUOTES
// ==========================

const quotes = [

"Success is the sum of small efforts repeated every day.",

"Believe you can and you're halfway there.",

"Dream big. Start small. Act now.",

"Stay positive, work hard, make it happen.",

"Every day is a fresh beginning.",

"Success starts with self-discipline."

];

document.getElementById("quote")
.innerHTML =
quotes[Math.floor(Math.random() * quotes.length)];

// ==========================
// THEME CHANGER
// ==========================

function changeTheme(color) {

    document.body.style.background =
    `linear-gradient(
        135deg,
        ${color},
        #0f172a,
        #06b6d4
    )`;
}

// ==========================
// DARK / LIGHT MODE
// ==========================

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

});

// ==========================
// VISITOR COUNTER
// ==========================

let visits =
localStorage.getItem("timeverse_visits")
|| 0;

visits++;

localStorage.setItem(
"timeverse_visits",
visits
);

document.getElementById("visitorCount")
.innerHTML = visits;