let time = document.querySelector('.time');
let arrowHour = document.querySelector('.arrow-hour__inner');
let arrowMinute = document.querySelector('.arrow-minute__inner');

let date = new Date();
let realHource;
let realMinute;
let realSecond;

arrowHour.style.transform = `rotateZ(${
	date.getHours() * 30 + date.getMinutes() / 2
}deg)`;
arrowMinute.style.transform = `rotateZ(${date.getMinutes() * 6}deg)`;
animReset(1);

setInterval(() => {
	date = new Date();
	realHource = date.getHours();
	realMinute = date.getMinutes();
	realSecond = date.getSeconds();

	if (realMinute == 0) {
		animReset(0);
		arrowMinute.style.transform = `rotateZ(0deg)`;
		animReset(1);
	}
	if (realHource == 0) {
		animReset(0);
		arrowHour.style.transform = `rotateZ(0deg)`;
		animReset(1);
	}
	arrowMinute.style.transform = `rotateZ(${realMinute * 6}deg)`;
	arrowHour.style.transform = `rotateZ(${realHource * 30 + realMinute / 2}deg)`;

	time.innerHTML = `${realHource}:${realMinute}:${realSecond}`;
}, 1000);

function animReset(value) {
	value
		? (arrowHour.style.transition = 'all 60s')
		: (arrowHour.style.transition = 'none');
	value
		? (arrowMinute.style.transition = 'all 60s')
		: (arrowMinute.style.transition = 'none');
}
