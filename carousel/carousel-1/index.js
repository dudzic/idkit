(() => {
	new Swiper(".quality-certificates__slider", {
		slidesPerView: 1,
		spaceBetween: 40,
		navigation: {
			nextEl: ".quality-certificates__next",
			prevEl: ".quality-certificates__prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},
	});
})();
