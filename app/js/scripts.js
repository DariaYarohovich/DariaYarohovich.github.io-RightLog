
Vue.component("zakaz", {
    props: ['form-id'],
	template: "<form class=\"form\" v-bind:id=\"formId\">"+
                "<input type=\"hidden\" name=\"type\" value=\"Подключить RightLog\" >"+

                "<label class=\"form__label\">"+
                    "<select class=\"form__select selectpicker\" name=\"business\" >"+
                        "<option class=\"form__option\" value=\"default-business\" selected>Сфера деятельности</option>"+
                        "<option class=\"form__option\" value=\"shop\" >Магазин</option>"+
                        "<option class=\"form__option\" value=\"warehouse\" >Склад</option>"+
                        "<option class=\"form__option\" value=\"production\" >Производство</option>"+
                        "<option class=\"form__option\" value=\"state-enterprise\" >Госпредприятия</option>"+
                        "<option class=\"form__option\" value=\"organization\" >Учреждения</option>"+
                        "<option class=\"form__option\" value=\"bank\" >Банк</option>"+
                    "</select>"+
                "</label>"+
                "<label class=\"form__label\">"+
                    "<select class=\"form__select\" name=\"accounting-system\" >"+
                        "<option class=\"form__option\" value=\"default-system\" selected>Система учета</option>"+
                        "<option class=\"form__option\" value=\"one\" >Один</option>"+
                        "<option class=\"form__option\" value=\"two\" >Два</option>"+
                    "</select>"+
                "</label>"+

                "<label class=\"form__label\">"+
                    "<input class=\"form__input\" type=\"text\" name=\"name\" placeholder=\"Ваше имя\">"+
                "</label>"+
                "<label class=\"form__label\">"+
                    "<input class=\"form__input\" type=\"text\" name=\"phone-email\" placeholder=\"Телефон или email\">"+
                "</label>"+

                "<label class=\"form__label form__label_txtarea \">"+
                    "<textarea class=\"form__textarea\" name=\"message\"  cols=\"30\" rows=\"10\"></textarea>"+
                "</label>"+

                "<button class=\"form__btn\" type=\"submit\">Отправить запрос на подключение</button>"+
                "</form>"
});




var app = new Vue({
	el: "#app",
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
		],
		details: {
			shopDetails: false,
			warehouseDetails: false,
			productionDetails: false,
			soeDetails: false,
			companiesDetails: false,
			banksDetails: false
		}
	},
	computed: {
		coverActive: function() {
			var counter = false;

			for (key in this.details) {
				if (this.details[key] === true) {
					counter = true;
				}
			}
			return counter;
		}
	}
});


//mobile slider clients;
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
			behaviors: ["default", "scrollZoom"]
		}),

		myPlacemark2 = new ymaps.Placemark([53.849487, 27.664589], {
		}, {
            // Опции.
            // Своё изображение иконки метки.
			iconImageHref: "img/marker.png",
            // Размеры метки.
			iconImageSize: [23, 37],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
			iconImageOffset: [0, 0]
		});

    // Добавляем все метки на карту.
	myMap.geoObjects.add(myPlacemark2);
	myMap.controls.add("zoomControl", {right: "5px", top: "50%"});

}


// smooth scroll
+(function() {
	var scrollToggle = document.querySelectorAll(".scroll");

	if ( scrollToggle ) {
		var smoothScroll = function (anchor, duration) {

			var startLocation = window.pageYOffset;
			var endLocation = anchor.offsetTop;
			var distance = endLocation - startLocation;
			var increments = distance/(duration/16);
			var stopAnimation;

			var animateScroll = function () {
				window.scrollBy(0, increments);
				stopAnimation();
			};

			if ( increments >= 0 ) {
				stopAnimation = function () {
					var travelled = window.pageYOffset;
					if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
						clearInterval(runAnimation);
					}
				};
			}
			else {
				stopAnimation = function () {
					var travelled = window.pageYOffset;
					if ( travelled <= (endLocation || 0) ) {
						clearInterval(runAnimation);
					}
				};
			}

			var runAnimation = setInterval(animateScroll, 16);

		};

		[].forEach.call(scrollToggle, function (toggle) {
			toggle.addEventListener("click", function(e) {
				e.preventDefault();

				var dataID = toggle.getAttribute("href");
				var dataTarget = document.querySelector(dataID);
				var dataSpeed = toggle.getAttribute("data-speed");

				if (dataTarget) {
					smoothScroll(dataTarget, dataSpeed || 500);
				}

			}, false);

		});
	}
})();


//forms

$( "#form_zakaz" ).on( "submit", function( event ) {
	event.preventDefault();
	sendMail(this);
});

$( "#form_shop" ).on( "submit", function( event ) {
    event.preventDefault();
    sendMail(this);
});

$( "#form_warehouse" ).on( "submit", function( event ) {
    event.preventDefault();
    sendMail(this);
});

$( "#form_production" ).on( "submit", function( event ) {
    event.preventDefault();
    sendMail(this);
});

$( "#form_seo" ).on( "submit", function( event ) {
    event.preventDefault();
    sendMail(this);
});

$( "#form_companies" ).on( "submit", function( event ) {
    event.preventDefault();
    sendMail(this);
});

$( "#form_banks" ).on( "submit", function( event ) {
    event.preventDefault();
    sendMail(this);
});


function sendMail(form) {
	$.ajax({
		type: "POST",
		url: "send.php",
		data: $(form).serialize()
	});
}

