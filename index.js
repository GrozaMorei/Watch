let time = document.querySelector('.time');
let arrowHour = document.querySelector('.arrow-hour__inner');
let arrowMinute = document.querySelector('.arrow-minute__inner');

let date = new Date();
let realHource;
let realMinute;
let realSecond;

arrowHour.style.transform = `rotateZ(${realHource * 30 + realMinute / 2}deg)`;
arrowMinute.style.transform = `rotateZ(${date.getMinutes() * 6}deg)`;

let rotate = 0;

setInterval(() => {
	date = new Date();
	realHource = date.getHours();
	realMinute = date.getMinutes();
	realSecond = date.getSeconds();

	if (realMinute == 0) {
		arrowMinute.style.transition = 'none';
		arrowMinute.style.transform = `rotateZ(0deg)`;
		arrowMinute.style.transition = 'all 60s';
	} else {
		arrowMinute.style.transform = `rotateZ(${realMinute * 6}deg)`;
	}

	if (realHource == 0) {
		arrowHour.style.transition = 'none';
		arrowHour.style.transform = `rotateZ(0deg)`;
		arrowHour.style.transition = 'all 60s';
	} else {
		arrowHour.style.transform = `rotateZ(${
			realHource * 30 + realMinute / 2
		}deg)`;
	}

	time.innerHTML = `${realHource}:${realMinute}:${realSecond}`;
}, 1000);
