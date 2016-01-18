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

		var myMap2 = new ymaps.Map('map2', {
			center: [59.830142, 30.544696],
			zoom: 15,
			// Обратите внимание, что в API 2.1 по умолчанию карта создается с элементами управления.
			// Если вам не нужно их добавлять на карту, в ее параметрах передайте пустой массив в поле controls.
			controls: []
		});

		var myPlacemark2 = new ymaps.Placemark(myMap2.getCenter(), {
			balloonContentBody: [
				'<address>',
				'<strong>Заводская, 15</strong>',
				'<br/>',
				'</address>'
			].join(''),
			hintContent: "Заводская, 15"
		});

		myMap2.geoObjects.add(myPlacemark2);



	});

	$(".main-modal-form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
			e.preventDefault();
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
	            type: "POST", //Метод отправки
	            url: "send.php", //путь до php фаила отправителя
	            data: form_data,
	            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отправлено!");
               }
            });
            $('.modal-wrapper').trigger('click');
    });
	$(".presentation-modal-form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
			e.preventDefault();
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
	            type: "POST", //Метод отправки
	            url: "send.php", //путь до php фаила отправителя
	            data: form_data,
	            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отправлено!");
					window.location = "/docs/ZhK_Ekaterina_GOTOVO_final.pdf"
               }
            });
            $('.modal-wrapper').trigger('click');
    });
	$(".form-flat").submit(function(e) { //устанавливаем событие отправки для формы с id=form
			e.preventDefault();
            var form_data = $(this).serialize(); //собераем все данные из формы
			console.log(form_data);
            $.ajax({
	            type: "POST", //Метод отправки
	            url: "send.php", //путь до php фаила отправителя
	            data: form_data,
	            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отправлено!");
               }
            });
    });
	$(".form-ipoteka").submit(function(e) { //устанавливаем событие отправки для формы с id=form
			e.preventDefault();
            var form_data = $(this).serialize(); //собераем все данные из формы
			console.log(form_data);
            $.ajax({
	            type: "POST", //Метод отправки
	            url: "send.php", //путь до php фаила отправителя
	            data: form_data,
	            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отправлено!");
               }
            });
    });
	$(".form-docs").submit(function(e) { //устанавливаем событие отправки для формы с id=form
			e.preventDefault();
            var form_data = $(this).serialize(); //собераем все данные из формы
			console.log(form_data);
            $.ajax({
	            type: "POST", //Метод отправки
	            url: "send.php", //путь до php фаила отправителя
	            data: form_data,
	            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отправлено!");
               }
            });
		window.location = "/docs/ipoteka.docx"
    });

	$('.flexslider').flexslider();
	$('.flexslider-mini').flexslider({
		animation: "slide",
		controlNav: false,
		itemWidth: 350,
		itemMargin: 3,
		animationLoop: false,
		slideshow: false,
	});

	$('nav a').click(function(){
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
		$('#modal-townhouse h2').html(flats[index].text);
		$('.form-flat input[name="utm_name"]').val(flats[index].name);
		$('.form-ipoteka input[name="utm_name"]').val(flats[index].name);
		$('.form-docs input[name="utm_name"]').val(flats[index].name);
	}

	$('.filter-item').on('click', function() {

	});

	$('.townhouse').each(function(i, el) {

		dataName = $(el).attr('data-name');
		price = flats.filter(function(flat) {return flat.name==dataName})[0].price;
		$(el).find('.townhouse-descriptrion').html(Math.floor(price/1000)+" "+ price%1000 +" 000 руб.");
	});









	filterFlats = (function() {

		var rooms = 'all';
		var area = 0;
		var price_from = 0;
		var price_to = 10000;

		$('.filter-area').on('click', function() {

			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				area = 0;
			}
			else {
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
				area = $(this).attr('data-filter-sq');
			}

			filterIt();

		});

		$('.filter-room').on('click', function() {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				rooms = 'all';
			}
			else {
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
				rooms = $(this).attr('data-filter-rooms');
			}

			filterIt();
		});



		var pricesArray = flats.map(function(flat) {
			return flat.price;
		});
		var minPrice = Math.min.apply(null, pricesArray);
		var maxPrice = Math.max.apply(null, pricesArray);
		$('#slider-price').ionRangeSlider({
			type: "double",
			grid: true,
			min: minPrice,
			max: maxPrice,
			from: minPrice,
			to: maxPrice,
			prettify: true,
			postfix: " 000",
			onFinish: function (data) {
				price_from = data.from;
				price_to = data.to;
				filterIt()
			}
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
			for(var i=0; i<flats.length; i++) {
				if (price_from>flats[i].price || price_to<flats[i].price) {
					$('.townhouse[data-name="'+flats[i].name+'"]').css('display', 'none');
				}
			}
		}

	})();

});


flats = [
	{
		name: "C 31.72",
		img: "C 31,72.JPG",
		text: "Квартира-студия",
		rooms: 0,
		price: 2040,
		common: 31.72,
		live: 22.67,
		kitchen: 0,
		balcony: 4.27
	},
	{
		name: "C 27.38",
		img: "C 27,38.JPG",
		text: "Квартира-студия",
		common: 27.38,
		rooms: 0,
		price: 1770,
		live: 17.65,
		kitchen: 0,
		balcony: 4.32
	},
	{
		name: "C 26.25",
		img: "C 26,25.JPG",
		text: "Квартира-студия",
		common: 26.25,
		live: 17.08,
		rooms: 0,
		price: 1710,
		kitchen: 0,
		balcony: 4.77
	},
	{
		name: "C 25.57",
		img: "C 25,57.JPG",
		text: "Квартира-студия",
		common: 25.57,
		live: 17.41,
		rooms: 0,
		price: 1700,
		kitchen: 0,
		balcony: 1.6
	},
	{
		name: "1 37.48",
		img: "1 37,48.JPG",
		text: "1 комнатная квартира",
		common: 37.48,
		live: 16.83,
		rooms: 1,
		price: 2650,
		kitchen: 9.36,
		balcony: 7.04
	},
	{
		name: "1 34.99",
		img: "1 34,99.JPG",
		text: "1 комнатная квартира",
		common: 34.99,
		live: 16.82,
		rooms: 1,
		price: 2330,
		kitchen: 9.65,
		balcony: 1.48
	},
	{
		name: "1 36.47",
		img: "1 36,47.JPG",
		text: "1 комнатная квартира",
		common: 36.47,
		live: 15.37,
		rooms: 1,
		price: 2250,
		kitchen: 8.52,
		balcony: 5.89
	},
	{
		name: "1 33.37",
		img: "1 33,37.JPG",
		text: "1 комнатная квартира",
		common: 33.37,
		live: 14.94,
		rooms: 1,
		price: 2160,
		kitchen: 8.3,
		balcony: 3.12
	},
	{
		name: "2 56.64",
		img: "2 56,64.JPG",
		text: "2 комнатная квартира",
		common: 56.64,
		live: 27.36,
		rooms: 2,
		price: 3490,
		kitchen: 15.08,
		balcony: 5
	},
	{
		name: "2 57.78",
		img: "2 57,78.JPG",
		text: "2 комнатная квартира",
		common: 57.78,
		live: 26.95,
		rooms: 2,
		price: 3500,
		kitchen: 14.72,
		balcony: 5.27
	},
	{
		name: "2 54.56",
		img: "2 54,56.JPG",
		text: "2 комнатная квартира",
		common: 54.56,
		live: 26.17,
		rooms: 2,
		price: 3400,
		kitchen: 14.52,
		balcony:3.04
	}
]

