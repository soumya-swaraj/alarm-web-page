let setalram = document.getElementById("setalram");
let alarmtime = document.getElementById("alarmtime");
setalram.addEventListener("click", setAlarm);

function setAlarm(e) {
    e.preventDefault();
    let time = alarmtime.value;
    // console.log(time);
    let hr = time.substring(0, 2);
    let min = time.substring(3);
    hr = parseInt(hr, 10);
    min = parseInt(min, 10);
    // console.log(hr + min);
    let nowTime = new Date();
    let nowhr = nowTime.getHours();
    let nowmin = nowTime.getMinutes();
    let nowmsec = ((nowhr * 60) + nowmin) * 60 * 1000;
    let afterTime;
    // console.log(nowhr, nowmin);
    if (time != "") {
        if (nowhr > hr) {
            hr = hr + 24;
            hr = hr * 60;
            min = hr + min;
            let msec = min * 60 * 1000;
            afterTime = msec - nowmsec;
        }
        else {
            let msec = ((hr * 60) + min) * 60 * 1000;
            afterTime = msec - nowmsec;
        }
        setTimeout(() => {
            ringAlarm();
        }, afterTime);
        document.getElementById("successfullymsg").classList.add("show");
        setTimeout(() => {
            document.getElementById("successfullymsg").classList.remove("show");
        }, 1000);
    } else {
        console.log("invalid time");
    }

}

function ringAlarm() {
    var audio = new Audio('assets/Dance Monkey - Instrumental Music.mp3');
    audio.play();
}