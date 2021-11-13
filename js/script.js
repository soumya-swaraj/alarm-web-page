let setalram = document.getElementById("setalram");
let alarmtime = document.getElementById("alarmtime");
setalram.addEventListener("click", setAlarm);

function setAlarm(e) {
    e.preventDefault();
    let time = alarmtime.value;
    let hr = time.substring(0, 2);
    let min = time.substring(3);
    hr = parseInt(hr, 10);
    min = parseInt(min, 10);
    let nowTime = new Date();
    let nowhr = nowTime.getHours();
    let nowmin = nowTime.getMinutes();
    let nowmsec = ((nowhr * 60) + nowmin) * 60 * 1000;
    let afterTime;
    let successfullymsg = document.getElementById("successfullymsg");
    if (time != "") {
        let msec = ((hr * 60) + min) * 60 * 1000;
        if (nowmsec > msec) {
            afterTime = msec - nowmsec + 24 * 60 * 60 * 1000;
        }
        else {
            afterTime = msec - nowmsec;
        }
        setTimeout(() => {
            ringAlarm();
        }, afterTime);
        successfullymsg.classList.add("show");
        successfullymsg.classList.add("alert-success");
        successfullymsg.innerText = "Alarm Set Successfully!"
        setTimeout(() => {
            successfullymsg.classList.remove("show");
            successfullymsg.classList.remove("alert-success");
        }, 1600);
    }
    else {
        successfullymsg.classList.add("show");
        successfullymsg.classList.add("alert-danger");
        successfullymsg.innerText = "Invalid Time!"
        setTimeout(() => {
            successfullymsg.classList.remove("show");
            successfullymsg.classList.remove("alert-danger");
        }, 1600);
    }
    document.getElementById("form").reset();
}

function ringAlarm() {
    var audio = new Audio('assets/Dance Monkey - Instrumental Music.mp3');
    audio.play();
}
