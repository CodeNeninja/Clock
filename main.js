(function time() {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let myTime = document.querySelector('.time');

	//classes
	let secondsRing = document.querySelector('.seconds-ring');
	let minutesRing = document.querySelector('.minutes-ring');
	let hoursRing = document.querySelector('.hours-ring');	

	const secColor = 'pink';
	const minColor = 'purple';
	const hourColor = 'lightblue';

	if( seconds < 30 ){
		if(seconds !== 0){
			let secondDeg = 90 + (6 * seconds);
			secondsRing.style.background = 
			'linear-gradient(90deg, #fff 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient('+ secondDeg +'deg, '+ secColor +' 50%, #fff 50%, #fff)';
		} else {
			secondsRing.style.background =
			'linear-gradient(90deg, '+ secColor +' 50%,  rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, '+ secColor +' 50%, #f0f0f0 50%, #fff)';
		}
	} else {
		let firstDeg = -90 + ((seconds - 30) * 6);
		secondsRing.style.background = 
		'linear-gradient('+ firstDeg +'deg, '+ secColor +' 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, '+ secColor +' 50%, #fff 50%, #fff)';
	}

	if( minutes < 30 ){
		if(minutes !== 0){
			let secondDeg = 90 + (6 * minutes);
			minutesRing.style.background = 
			'linear-gradient(90deg, #fff 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient('+ secondDeg +'deg, '+ minColor +' 50%, #fff 50%, #fff)';
		} else {
			minutesRing.style.background =
			'linear-gradient(90deg, '+ minColor +' 50%,  rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, '+ minColor +' 50%, #f0f0f0 50%, #fff)';
		}
	} else {
		let firstDeg = -90 + ((minutes - 30) * 6);
		minutesRing.style.background = 
		'linear-gradient('+ firstDeg +'deg, '+ minColor +' 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, '+ minColor +' 50%, #fff 50%, #fff)';
	}

	if( hours < 12 ){
		if(hours !== 0){
			let secondDeg = 90 + (15 * hours);
			hoursRing.style.background = 
			'linear-gradient(90deg, #fff 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient('+ secondDeg +'deg, '+ hourColor +' 50%, #fff 50%, #fff)';
		} else {
			hoursRing.style.background =
			'linear-gradient(90deg, '+ hourColor +' 50%,  rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, '+ hourColor +' 50%, #f0f0f0 50%, #fff)';
		}
	} else {
		let firstDeg = -90 + ((hours - 12) * 15);
		hoursRing.style.background = 
		'linear-gradient('+ firstDeg +'deg, '+ hourColor +' 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, '+ hourColor +' 50%, #fff 50%, #fff)';
	}

	if(seconds < 10) { 
		seconds = '0'+seconds;
	}

	if(minutes < 10) { 
		minutes = '0'+minutes;
	}

	if(hours < 10) { 
		hours = '0'+hours;
	}	

	myTime.innerHTML = hours + ':' + minutes + ':' + seconds;
	setTimeout(time, 1000);
})();
