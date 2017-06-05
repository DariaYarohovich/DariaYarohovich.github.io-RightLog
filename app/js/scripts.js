

var clients = new Vue({
	el: "#clients",
	data: {
		clients: [
			{
				link: "#",
				imgUrl: "img/client1.png",
				alt: "",
				isActive: false
			},
			{
				link: "#",
				imgUrl: "img/client2.png",
				alt: "",
				isActive: false
			},
			{
				link: "#",
				imgUrl: "img/client3.png",
				alt: "",
				isActive: false
			},
			{
				link: "#",
				imgUrl: "img/client4.png",
				alt: "",
				isActive: false
			}
		]
	}
});



//mobile slider clients;

/*eslint no-undef:0*/
var swiper = new Swiper(".swiper-container", {
	pagination: ".swiper-pagination",
	nextButton: ".swiper-button-next",
	prevButton: ".swiper-button-prev",
	paginationClickable: true,
    // Default parameters
	slidesPerView: 4,
	spaceBetween: 70,
    // Responsive breakpoints
	breakpoints: {
        // when window width is <= 767px
		767: {
			slidesPerView: 2,
			spaceBetween: 15
		},
		991: {
			slidesPerView: 4,
			spaceBetween: 28
		}
	}
});

// select option customize
(function($) {
    $(function() {
        $("select").styler();
    });
})(jQuery);

// yandex map

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [53.848587, 27.661993],
            zoom: 15,
            behaviors: ['default', 'scrollZoom']
        }),

        myPlacemark2 = new ymaps.Placemark([53.849487, 27.664589], {
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [23, 37],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        });

    // Добавляем все метки на карту.
    myMap.geoObjects.add(myPlacemark2);
    myMap.controls.add('zoomControl', {right: '5px', top: '50%'});

}
