function clock() {
	var d = new Date();

	var hours = d.getHours();
	var minutes = d.getMinutes();

	//Used to pad the minutes with leading zeros
	minutes = (minutes < 10 ? "0" : "") + minutes;

	//Math-y adjustments
	var amPm = (hours < 12) ? "AM" : "PM";
	hours = (hours > 12) ? hours - 12 : hours;
	hours = (hours == 0) ? 12 : hours;

	//Adds the time to the page
	document.getElementById('time').innerHTML = hours + ":" + minutes + '<span class="ampm">' + amPm + '</span>';

	var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
	var day = weekday[d.getDay()];


	var thisMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	var month = thisMonth[d.getMonth()];

	var date = d.getDate();
	var year = d.getFullYear();

	//Adds the date to the page
	document.getElementById('fulldate').innerHTML = day + ", " + month + " " + date + ", " + year;
};