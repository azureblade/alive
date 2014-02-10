var alive = (function() {
	var MONTH_DAYS = Object.freeze({
		0: 31,
		1: 28,
		2: 31,
		3: 30,
		4: 31,
		5: 30,
		6: 31,
		7: 31,
		8: 30,
		9: 31,
		10: 30,
		11: 31
	});

	var a = {};

	a.getYears = function(birth) {
		if (!birth) {
			return NaN;
		}

		var now = new Date();

		var delta = now.getTime() - birth.getTime();

		var seconds = Math.floor(delta / 1000);
		var minutes = Math.floor(seconds / 60);
		var hours = Math.floor(minutes / 60);
		var days = Math.floor(hours / 24);

		return Math.floor(days / 365.25);
	}

	a.getMonths = function(birth) {
		if (!birth) {
			return NaN;
		}

		return null;
	}

	a.getDays = function(birth) {
		if (!birth) {
			console.log('birth not defined.');
			return NaN;
		}

		var now = new Date();

		var delta = now.getTime() - birth.getTime();

		var seconds = Math.floor(delta / 1000);
		var minutes = Math.floor(seconds / 60);
		var hours = Math.floor(minutes / 60);

		return Math.floor(hours / 24);
	}

	a.getHours = function(birth) {
		if (!birth) {
			return NaN;
		}

		var now = new Date();

		var delta = now.getTime() - birth.getTime();

		var seconds = Math.floor(delta / 1000);
		var minutes = Math.floor(seconds / 60);

		return Math.floor(minutes / 60);
	}

	a.getMinutes = function(birth) {
		if (!birth) {
			return NaN;
		}

		var now = new Date();

		var delta = now.getTime() - birth.getTime();
		var seconds = Math.floor(delta / 1000);

		return Math.floor(seconds / 60)
	}

	a.getSeconds = function(birth) {
		if (!birth) {
			return NaN;
		}

		var now = new Date();

		var delta = now.getTime() - birth.getTime();

		return Math.floor(delta / 1000);
	}

	return a;
})();

$(document).ready(function() {
	var birth = new Date(1994, 7, 24);

	$('.content').html(alive.getYears(birth) + " years\n");
	$('.content').append(alive.getMonths(birth) + " months\n");
	$('.content').append(alive.getDays(birth) + " days\n");
	$('.content').append(alive.getHours(birth) + " hours\n");
	$('.content').append(alive.getMinutes(birth) + " minutes\n");
	$('.content').append(alive.getSeconds(birth) + " seconds\n");
});