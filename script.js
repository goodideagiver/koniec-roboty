const counterElement = document.getElementById('end-counter');
const appMain = document.getElementById('app');
const header = appMain.querySelector('h1');
const progress = document.getElementById('progress');
appMain.style.transition = '.2s';

let WORK_START_HR = parseInt(prompt('Godzina o której rozpoczynasz robotę', 8));
let WORK_END_HR = parseInt(prompt('Godzina o której kończysz robotę', 16));

progress.setAttribute('max', WORK_END_HR - WORK_START_HR);

const setStyle = scale => {
	appMain.style.transform = 'scale(' + scale + ')';
};

const timeHandler = localeTime => {
	const [hour, minute, second] = localeTime.split(':');
	if (hour < WORK_END_HR && hour >= WORK_START_HR) {
		counterElement.innerText = `${WORK_END_HR - hour} godz ${
			59 - minute < 10 ? '0' + (59 - minute) : 59 - minute
		} min ${59 - second < 10 ? '0' + (59 - second) : 59 - second} sek`;
		setStyle(1 + second / 70);
		progress.value = hour - WORK_START_HR;
	} else if (hour > WORK_END_HR) {
		header.innerText = 'Robota zakończona';
		counterElement.innerText = '';
	} else {
		counterElement.innerText = `Robota za ${WORK_START_HR - hour} godz ${
			59 - minute
		} min ${59 - second} sek`;
	}
};

timeHandler(new Date().toLocaleTimeString());
setInterval(() => {
	timeHandler(new Date().toLocaleTimeString());
}, 1000);
