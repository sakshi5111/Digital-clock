
setInterval(() => {
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >=12 ? "PM" : "AM";

//convert into 12 hours clock
if(h > 12) {
    h = h -12;
}

//add zero before single digit
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

hours.innerHTML = h + "<br><span>Hours</span>";
minutes.innerHTML = m + "<br><span>Minutes</span>";
seconds.innerHTML = s + "<br><span>Second</span>";
ampm.innerHTML = am;

// 12hr clock
hh.style.strokeDashoffset = 440 - (440 * h) / 12;
// 60 minutes 
mm.style.strokeDashoffset = 440 - (440 * m) / 60;
// 60 seconds 
ss.style.strokeDashoffset = 440 - (440 * s) / 60;
})