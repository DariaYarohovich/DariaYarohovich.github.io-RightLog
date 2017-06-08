
Vue.component("order", {
    props: ['form-id', 'options', 'status'],
    data: function() {
        return {
            formVisible: true
        }
    },
    methods: {
        showMessage: function() {
            this.formVisible = !this.formVisible;
        }
    },
	template: "#order"
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
		},
        form: {
            name: "",
            contact: "",
            message: "",
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
		},
        buttonStatus: function() {
		    var result = true;

            if (this.form.name && this.form.contact) {
                result = false;
            }
            return result;
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


//send forms
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

