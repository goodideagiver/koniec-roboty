const counterElement = document.getElementById('end-counter');

const timeHandler = localeTime => {
	const [hour, minute, second] = localeTime.split(':');
	if (hour < 16 && hour >= 8) {
		counterElement.innerText = `${16 - hour} godz ${
			59 - minute < 10 ? '0' + (59 - minute) : 59 - minute
		} min ${59 - second < 10 ? '0' + (59 - second) : 59 - second} sek`;
	} else if (hour > 16) {
		counterElement.inputMode = 'Po robocie';
	} else {
		counterElement.innerText = `Robota za ${8 - hour} godz ${59 - minute} min ${
			59 - second
		} sek`;
	}
};

timeHandler(new Date().toLocaleTimeString());
setInterval(() => {
	timeHandler(new Date().toLocaleTimeString());
}, 1000);
