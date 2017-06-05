

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

// option customize

(function($) {
    $(function() {
        $("select").styler();
    });
})(jQuery);