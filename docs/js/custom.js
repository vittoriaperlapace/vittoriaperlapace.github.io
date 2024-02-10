(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();

	// Custom functions

	function loadImages(directoryPath,filenames,container) {
		const imageContainer = document.getElementById(container);
		imageContainer.innerHTML = ''; // Clear previous content
		try {
			// Create img elements for each filename
			filenames.forEach(filename => {
				const img = document.createElement('img');
				img.src = `${directoryPath}/${filename}`;
				img.style.height = '50px';
				img.className = 'mx-2';
				imageContainer.appendChild(img);
			});
		} catch (error) {
			console.error('Error loading images:', error);
		}
	}

	// const supportersLogos = ['UaMi.jpeg', 'LiberiOltreLeIllusioni.png','RadicaliItaliani.png', 'EconomiaItalia.png'];
	// const mediaParthnerLogos = ['LiberiOltreLeIllusioni.png', 'EconomiaItalia.png'];

	// loadImages('./images/supporters',supportersLogos,'supportersImages') //supporters
	// loadImages('./images/media-partnership',mediaParthnerLogos,'mediaPartnerImages') //mediaPartnerImages

})()