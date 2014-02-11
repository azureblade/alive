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

		var now = new Date();

		var delta = now.getTime() - birth.getTime();

		var seconds = Math.floor(delta / 1000);
		var minutes = Math.floor(seconds / 60);
		var hours = Math.floor(minutes / 60);
		var days = Math.floor(hours / 24);

		var months = 0;
		var currMonth = 0;

		while (days > 0) {
			if (days - MONTH_DAYS[currMonth] >= 0) {
				days -= MONTH_DAYS[currMonth];
				months += 1;
				currMonth += 1;
			} else {
				break;
			}

			if (currMonth > 11) {
				currMonth = 0;
			}
		}

		return months;
	}

	a.getDays = function(birth) {
		if (!birth) {
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
	var id;
	
	$('#submit').click(function() {
		$('.loading, .loading div').show();

		window.clearInterval(id);
		$('.content div').not('.loading, .loading div').html('');

		var birth = new Date($('#birth').val());
		birth.setHours(24);

		id = setInterval(function() {
			$('.years').html(alive.getYears(birth) + ' years');
			$('.months').html((alive.getMonths(birth) + ' months').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
			$('.days').html((alive.getDays(birth) + ' days').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
			$('.hours').html((alive.getHours(birth) + ' hours').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
			$('.minutes').html((alive.getMinutes(birth) + ' minutes').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
			$('.seconds').html((alive.getSeconds(birth) + ' seconds').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
			$('.loading').hide();
		}, 1000);

		$('.content div').not('.loading, .loading div').hide();
		$('.years').show();
	});

	$('#years').click(function() {
		$('.content div').hide();
		$('.years').show();
	});

	$('#months').click(function() {
		$('.content div').hide();
		$('.months').show();
	});

	$('#days').click(function() {
		$('.content div').hide();
		$('.days').show();
	});

	$('#hours').click(function() {
		$('.content div').hide();
		$('.hours').show();
	});

	$('#minutes').click(function() {
		$('.content div').hide();
		$('.minutes').show();
	});

	$('#seconds').click(function() {
		$('.content div').hide();
		$('.seconds').show();
	});
});