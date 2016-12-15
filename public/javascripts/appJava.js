// Password input
function pswFunction(){
	document.getElementById("wordTest").readOnly = true;
	}

// Javascript Calendar
window.onload = function(){
	var calDate = new Date();
	var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var month = calDate.getMonth();
	var year = calDate.getFullYear();
	var firstDate = monthName[month] + " " + 1 + " " + year;
	var testDate = new Date(firstDate).toDateString();
	var firstDay = testDate.substring(0, 3);
	var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	var dayNom = dayName.indexOf(firstDay);
	var days = new Date(year, month+1, 0).getDate();
	var calendar = getCalendar(dayNom, days);
		document.getElementById("calendarMonthsYears").innerHTML = monthName[month]+" "+year;
		document.getElementById("calendarDates").appendChild(calendar);
};

function getCalendar(dayNom, days){
	var table = document.createElement('table');
	var tr = document.createElement('tr');

	for(var c=0; c<7; c++){
		var td = document.createElement('td');
		td.innerHTML = "SMTWTFS"[c];
		tr.appendChild(td);
		}
	table.appendChild(tr);

	tr = document.createElement('tr');
	var c;
	for(c=0; c<7; c++){
		if(c == dayNom){
			break;
		}
		var td = document.createElement('td');
		td.innerHTML = "";
		tr.appendChild(td);
	}
	var count = 1;
	for(; c<7; c++){
		var td = document.createElement('td');
		td.innerHTML = count;
		count++;
		tr.appendChild(td);
	}
	table.appendChild(tr);

	for(var r=3; r<=7; r++){
		tr = document.createElement('tr');
		for(var c=0; c<7; c++){
			if(count > days){
				table.appendChild(tr);
				return table;
			}
			var td = document.createElement('td');
			td.innerHTML = count;
			count++;
			tr.appendChild(td);
		}
	table.appendChild(tr);
	}
	return table;
}
// Javascript Clock
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
