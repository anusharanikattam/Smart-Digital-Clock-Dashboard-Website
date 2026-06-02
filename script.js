// =====================
// Greeting
// =====================

function greeting() {
    let hour = new Date().getHours();
    let msg = "";

    if (hour < 12) {
        msg = "☀️ Good Morning";
    } else if (hour < 18) {
        msg = "🌤 Good Afternoon";
    } else {
        msg = "🌙 Good Evening";
    }

    document.getElementById("greeting").innerHTML = msg;
}

greeting();


// =====================
// Digital & Analog Clock
// =====================

function updateClock() {

    let now = new Date();

    document.getElementById("digitalClock").innerHTML =
        now.toLocaleTimeString();

    document.getElementById("date").innerHTML =
        now.toDateString();

    let h = now.getHours() % 12;
    let m = now.getMinutes();
    let s = now.getSeconds();

    document.getElementById("hour").style.transform =
        `translateX(-50%) rotate(${h * 30 + m / 2}deg)`;

    document.getElementById("minute").style.transform =
        `translateX(-50%) rotate(${m * 6}deg)`;

    document.getElementById("second").style.transform =
        `translateX(-50%) rotate(${s * 6}deg)`;
}

updateClock();
setInterval(updateClock, 1000);


// =====================
// World Clock
// =====================

function updateWorldClocks() {

    document.getElementById("india").innerHTML =
        new Date().toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata"
        });

    document.getElementById("usa").innerHTML =
        new Date().toLocaleTimeString("en-US", {
            timeZone: "America/New_York"
        });

    document.getElementById("uk").innerHTML =
        new Date().toLocaleTimeString("en-GB", {
            timeZone: "Europe/London"
        });

    document.getElementById("japan").innerHTML =
        new Date().toLocaleTimeString("en-US", {
            timeZone: "Asia/Tokyo"
        });

    document.getElementById("australia").innerHTML =
        new Date().toLocaleTimeString("en-AU", {
            timeZone: "Australia/Sydney"
        });

    document.getElementById("dubai").innerHTML =
        new Date().toLocaleTimeString("en-US", {
            timeZone: "Asia/Dubai"
        });

    document.getElementById("china").innerHTML =
        new Date().toLocaleTimeString("en-US", {
            timeZone: "Asia/Shanghai"
        });

    document.getElementById("france").innerHTML =
        new Date().toLocaleTimeString("en-US", {
            timeZone: "Europe/Paris"
        });
}

updateWorldClocks();
setInterval(updateWorldClocks, 1000);


// =====================
// Alarm
// =====================

let alarmTime = "";

function setAlarm() {

    alarmTime =
        document.getElementById("alarmTime").value;

    alert("Alarm Set Successfully!");
}

setInterval(() => {

    let now = new Date();

    let currentTime =
        String(now.getHours()).padStart(2, '0') +
        ":" +
        String(now.getMinutes()).padStart(2, '0');

    if (currentTime === alarmTime) {
        alert("⏰ Alarm Ringing!");
    }

}, 1000);


// =====================
// Stopwatch
// =====================

let timer;
let seconds = 0;

function startStopwatch() {

    clearInterval(timer);

    timer = setInterval(() => {

        seconds++;

        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;

        document.getElementById("stopwatch").innerHTML =
            `${String(hrs).padStart(2, '0')}:` +
            `${String(mins).padStart(2, '0')}:` +
            `${String(secs).padStart(2, '0')}`;

    }, 1000);
}

function stopStopwatch() {
    clearInterval(timer);
}

function resetStopwatch() {

    clearInterval(timer);

    seconds = 0;

    document.getElementById("stopwatch").innerHTML =
        "00:00:00";
}


// =====================
// Battery Status
// =====================

if (navigator.getBattery) {

    navigator.getBattery().then((battery) => {

        function updateBattery() {

            document.getElementById("battery").innerHTML =
                Math.round(battery.level * 100) + "%";
        }

        updateBattery();

        battery.addEventListener(
            "levelchange",
            updateBattery
        );
    });
}


// =====================
// To Do List
// =====================

function addTask() {

    let task =
        document.getElementById("taskInput").value;

    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    document.getElementById("taskList")
        .appendChild(li);

    let tasks =
        JSON.parse(localStorage.getItem("tasks"))
        || [];

    tasks.push(task);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    document.getElementById("taskInput").value = "";
}

window.onload = function () {

    let tasks =
        JSON.parse(localStorage.getItem("tasks"))
        || [];

    tasks.forEach(task => {

        let li = document.createElement("li");

        li.textContent = task;

        document.getElementById("taskList")
            .appendChild(li);
    });

};


// =====================
// Quotes
// =====================

const quotes = [
    "Success is the sum of small efforts repeated daily.",
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "Stay positive and work hard.",
    "Every day is a new beginning."
];

let quoteIndex = 0;

setInterval(() => {

    if (document.getElementById("quote")) {

        document.getElementById("quote").innerHTML =
            quotes[quoteIndex];

        quoteIndex =
            (quoteIndex + 1) % quotes.length;
    }

}, 5000);


// =====================
// Theme Changer
// =====================

function changeTheme(color1, color2) {

    document.body.style.background =
        `linear-gradient(135deg, ${color1}, ${color2})`;
}
