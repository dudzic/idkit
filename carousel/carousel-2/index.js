(() => {
	const carouselNavigation = document.querySelectorAll(
		".carousel-navigation"
	);

	const carouselSlider = new Swiper(".carousel-content-slider", {
		init: false,
		slidesPerView: 1,
	});

	const navToggleClass = "carousel-navigation--active";

	carouselSlider.on("init", () => {
		carouselNavigation[0].classList.add(navToggleClass);
	});

	carouselSlider.init();

	carouselNavigation.forEach((elem, id) => {
		elem.addEventListener("click", (e) => {
			e.preventDefault();
			carouselSlider.slideTo(id, 1400);
			carouselNavigation.forEach((elem2) => {
				elem2.classList.remove(navToggleClass);
			});
			elem.classList.add(navToggleClass);
		});
	});
})();
