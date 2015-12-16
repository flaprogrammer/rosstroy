$(document).ready(function() {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
			center: [59.830142, 30.544696],
			zoom: 15,
			// Обратите внимание, что в API 2.1 по умолчанию карта создается с элементами управления.
			// Если вам не нужно их добавлять на карту, в ее параметрах передайте пустой массив в поле controls.
			controls: []
		});

		var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			balloonContentBody: [
				'<address>',
				'<strong>Заводская, 15</strong>',
				'<br/>',
				'</address>'
			].join(''),
			hintContent: "Заводская, 15"
		});

		myMap.geoObjects.add(myPlacemark);



	});

	$('.flexslider').flexslider();

	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});

	$('.townhouse.modal-trigger').on('click', function() {
		var name = $(this).attr('data-name');
		for(var i=0; i<flats.length; i++) {
			if (flats[i].name == name) {
				showFlatModal(i);
				break;
			}
		}
	})

	function showFlatModal(index) {
		$('.js-common').html(flats[index].common);
		$('.js-live').html(flats[index].live);
		$('.js-kitchen').html(flats[index].kitchen);
		$('.js-balcony').html(flats[index].balcony);
		$('.js-room-img').attr('src', 'img/plans/'+flats[index].img);
		$('#modal-townhouse h2').html('Имя')
	}

	$('.filter-item').on('click', function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});



});



filterFlats = (function() {

	var rooms = 'all';
	var area = 0;

	$('.filter-area').on('click', function() {
		area = $(this).attr('data-filter-sq');
		filterIt();

	});

	$('.filter-room').on('click', function() {
		rooms = $(this).attr('data-filter-rooms');
		filterIt();
	});

	var filterIt = function() {
		$('.townhouse').css('display', 'block');
		for(var i=0; i<flats.length; i++) {
			if (rooms=="all") break;
			if (rooms!=flats[i].rooms) {
				$('.townhouse[data-name="'+flats[i].name+'"]').css('display', 'none');
			}
		}
		for(var i=0; i<flats.length; i++) {
			if (area>flats[i].common) {
				$('.townhouse[data-name="'+flats[i].name+'"]').css('display', 'none');
			}
		}
	}

})();


flats = [
	{
		name: "C 31.72",
		img: "C 31,72.JPG",
		rooms: 0,
		common: 31.72,
		live: 22.67,
		kitchen: 0,
		balcony: 4.27
	},
	{
		name: "C 27.38",
		img: "C 27,38.JPG",
		common: 27.38,
		rooms: 0,
		live: 17.65,
		kitchen: 0,
		balcony: 4.32
	},
	{
		name: "C 26.25",
		img: "C 26,25.JPG",
		common: 26.25,
		live: 17.08,
		rooms: 0,
		kitchen: 0,
		balcony: 4.77
	},
	{
		name: "C 25.57",
		img: "C 25,57.JPG",
		common: 25.57,
		live: 17.41,
		rooms: 0,
		kitchen: 0,
		balcony: 1.6
	},
	{
		name: "1 37.48",
		img: "1 37,48.JPG",
		common: 37.48,
		live: 16.83,
		rooms: 1,
		kitchen: 9.36,
		balcony: 7.04
	},
	{
		name: "1 34.99",
		img: "1 34,99.JPG",
		common: 34.99,
		live: 16.82,
		rooms: 1,
		kitchen: 9.65,
		balcony: 1.48
	},
	{
		name: "1 36.47",
		img: "1 36,47.JPG",
		common: 36.47,
		live: 15.37,
		rooms: 1,
		kitchen: 8.52,
		balcony: 5.89
	},
	{
		name: "1 33.37",
		img: "1 33,37.JPG",
		common: 33.37,
		live: 14.94,
		rooms: 1,
		kitchen: 8.3,
		balcony: 3.12
	},
	{
		name: "2 56.64",
		img: "2 56,64.JPG",
		common: 56.64,
		live: 27.36,
		rooms: 2,
		kitchen: 15.08,
		balcony: 5
	},
	{
		name: "2 57.78",
		img: "2 57,78.JPG",
		common: 57.78,
		live: 26.95,
		rooms: 2,
		kitchen: 14.72,
		balcony: 5.27
	},
	{
		name: "2 54.56",
		img: "2 54,56.JPG",
		common: 54.56,
		live: 26.17,
		rooms: 2,
		kitchen: 14.52,
		balcony:3.04
	}
]

