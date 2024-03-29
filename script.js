var _a, _b;
var counterElement = document.getElementById('end-counter');
var appMain = document.getElementById('app');
var header = appMain.querySelector('h1');
var progress = document.getElementById('progress');
appMain.style.transition = '.2s';
var WORK_START_HR = parseInt((_a = prompt('Godzina o której rozpoczynasz robotę OD 0 do 23', '8')) !== null && _a !== void 0 ? _a : '8');
var WORK_END_HR = parseInt((_b = prompt('Godzina o której kończysz robotę  OD 0 do 23', '16')) !== null && _b !== void 0 ? _b : '16') - 1;
progress.setAttribute('max', (WORK_END_HR - WORK_START_HR).toString());
var setStyle = function (scale) {
    appMain.style.transform = 'scale(' + scale + ')';
};
var timeHandler = function (localeTime) {
    var currentHour = new Date().getHours();
    var currentMinute = new Date().getMinutes();
    var currentSecond = new Date().getSeconds();
    var currentTimeIsDuringWorkHours = currentHour >= WORK_START_HR && currentHour < WORK_END_HR;
    if (currentTimeIsDuringWorkHours) {
        var hoursLeft = WORK_END_HR - currentHour;
        var minutesLeft = 60 - currentMinute;
        var secondsLeft = 60 - currentSecond;
        var percentageOfWorkDay = (currentHour - WORK_START_HR) / (WORK_END_HR - WORK_START_HR);
        counterElement.innerText = "".concat(hoursLeft, "h ").concat(minutesLeft, "m ").concat(secondsLeft, "s");
        progress.value = percentageOfWorkDay * 10;
        return;
    }
    counterElement.innerText = 'Nie ma roboty';
};
timeHandler(new Date().toLocaleTimeString());
setInterval(function () {
    timeHandler(new Date().toLocaleTimeString());
}, 1000);
