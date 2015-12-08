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