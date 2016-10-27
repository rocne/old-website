(function() {
	var txt;
	window.onload = function() {
		txt = document.createElement("H2");
		document.body.appendChild(txt);
		updateTxt();
		setInterval(updateTxt, 1000);	
	}

	function updateTxt() {
		// approximating the start of my coding career at
		// 1 August 2013 at 8:30 AM
		var startOfCoding = new Date(
			2013,	// year
			8,	// month
			1,	// day
			8,	// hour
			30,	// minute
			0,	// second
			0	// millisecond
		);

		txt.innerHTML = timeSince(startOfCoding);
	}

	function timeSince(date) {
		var seconds = Math.floor((new Date() - date) / 1000);
		
		var minute = 60;
		var hr = minute * 60;
		var day = hr * 24;
		var month = day * 31;
		var year = day * 365;	

		var timeString = "";
		
		var years = Math.floor(seconds / year);		
		timeString += years + (years == 1 ? " year, " : " years, ");
		seconds %= year;

		var months = Math.floor(seconds / month);
		timeString += months + (months == 1 ? " month, " : " months, ");
		seconds %= month;

		var days = Math.floor(seconds / day);
		timeString += days + (days == 1 ? " day, " : " days, ");
		seconds %= day;

		var hours = Math.floor(seconds / hr);
		timeString += hours + (hours == 1 ? "hour, " : " hours, ");
		seconds %= hr;

		var minutes = Math.floor(seconds / minute);
		timeString += minutes + (minutes == 1 ? " minute " : " minutes, ");
		seconds %= minute;

		seconds = Math.floor(seconds);
		timeString += seconds + (seconds == 1 ? " second" : " seconds");

		return timeString;
	}

})();
