*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    background:linear-gradient(135deg,#0f172a,#1e3a8a,#06b6d4);
    color:white;
    min-height:100vh;
    overflow-x:hidden;
    transition:0.4s;
}

body.light{
    background:linear-gradient(135deg,#f8fafc,#e2e8f0,#cbd5e1);
    color:#111;
}

/* Loader */

#loader{
    position:fixed;
    width:100%;
    height:100%;
    background:#0f172a;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:9999;
    font-size:2rem;
}

/* Animated Background */

.particles{
    position:fixed;
    width:100%;
    height:100%;
    z-index:-1;

    background:
    radial-gradient(circle,
    rgba(255,255,255,.2) 2px,
    transparent 2px);

    background-size:50px 50px;

    animation:move 20s linear infinite;
}

@keyframes move{
    from{
        background-position:0 0;
    }
    to{
        background-position:200px 200px;
    }
}

/* Header */

header{
    text-align:center;
    padding:30px 15px;
}

header h1{
    font-size:3rem;
}

header p{
    margin-top:10px;
}

.header-buttons{
    margin-top:15px;
}

button{
    border:none;
    padding:10px 15px;
    border-radius:10px;
    cursor:pointer;
    margin:5px;
    background:#2563eb;
    color:white;
}

button:hover{
    opacity:0.85;
}

/* Hero */

.hero{
    text-align:center;
    padding:20px;
}

.clock-card{
    max-width:600px;
    margin:20px auto;

    background:rgba(255,255,255,.15);

    backdrop-filter:blur(15px);

    padding:25px;

    border-radius:20px;

    box-shadow:0 8px 32px rgba(0,0,0,.3);
}

#clock{
    font-size:4rem;
}

#greeting{
    margin-bottom:20px;
}

/* Analog Clock */

.analog-clock{
    display:flex;
    justify-content:center;
    margin-top:30px;
}

.clock{
    width:250px;
    height:250px;
    border:8px solid white;
    border-radius:50%;
    position:relative;
    background:rgba(255,255,255,.1);
}

.hand{
    position:absolute;
    bottom:50%;
    left:50%;
    transform-origin:bottom;
    transform:translateX(-50%);
    border-radius:10px;
}

.hour{
    width:6px;
    height:70px;
    background:white;
}

.minute{
    width:4px;
    height:90px;
    background:#00ffcc;
}

.second{
    width:2px;
    height:100px;
    background:red;
}

.center-dot{
    width:15px;
    height:15px;
    border-radius:50%;
    background:white;

    position:absolute;

    top:50%;
    left:50%;

    transform:translate(-50%,-50%);
}

/* Dashboard */

.dashboard{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:20px;
    padding:30px;
}

.card{
    background:rgba(255,255,255,.15);

    backdrop-filter:blur(15px);

    padding:20px;

    border-radius:20px;

    box-shadow:0 8px 32px rgba(0,0,0,.3);
}

.card h2{
    margin-bottom:15px;
}

.card input{
    width:100%;
    padding:10px;
    border:none;
    border-radius:10px;
    margin:10px 0;
}

.card p{
    margin-top:10px;
}

/* To Do */

.todo-section{
    padding:20px;
}

#taskList{
    margin-top:15px;
    padding-left:20px;
}

#taskList li{
    margin:8px 0;
}

/* Theme */

.theme-section{
    padding:20px;
}

/* Features */

.features{
    padding:40px 20px;
    text-align:center;
}

.feature-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:15px;
    margin-top:20px;
}

.feature-grid div{
    background:rgba(255,255,255,.15);
    backdrop-filter:blur(10px);

    padding:15px;

    border-radius:15px;
}

/* About */

.about{
    padding:40px 20px;
    text-align:center;
}

.about p{
    max-width:800px;
    margin:auto;
    line-height:1.8;
}

/* Progress */

progress{
    width:100%;
    height:20px;
}

/* Footer */

footer{
    text-align:center;
    padding:40px 20px;
}

footer p{
    margin-top:10px;
}

/* Responsive */

@media(max-width:768px){

    header h1{
        font-size:2rem;
    }

    #clock{
        font-size:2.5rem;
    }

    .clock{
        width:200px;
        height:200px;
    }

    .dashboard{
        padding:15px;
    }
}
