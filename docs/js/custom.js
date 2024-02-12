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
				img.className = 'm-2';
				imageContainer.appendChild(img);
			});
		} catch (error) {
			console.error('Error loading images:', error);
		}
	}


	let supportersLogos = [	
		"UaMi.jpeg",
		"LiberiOltreLeIllusioni.png",
		"RadicaliItaliani.png",
		"19-18-07-logo-liberali-democratici-europei-3.png",
		"Azione_milano_logo_B.png",
		"IMG_20240205_220142_003.png",
		//"IMG_20240208_144148_413.png",
		"IMG_20240208_213143.png",
		"IMG_2324.PNG",
		"LOGO EUMANS PICCOLO (1).png",
		"Logo liberi.png",
		"Logo vettoriale Comitato Ventotene orizzontale-01.png",
		"Logo1.png",
		"Logo2-1.png",
		"Marchio_Aglietta_new.png",
		"Photoroom-20240208_215930.png",
		"Photoroom-20240208_220351.png",
		"Photoroom-20240208_220940.png",
		"Photoroom-20240208_222613.png",
		"Photoroom-20240208_223643.png",
		"Photoroom-20240208_223905.png",
		"Photoroom-20240208_224228.png",
		"Photoroom-20240208_234345.png",
		"Photoroom-20240209_124037.png",
		"Photoroom-20240209_124313.png",
		"Photoroom-20240209_124647.png",
		"Photoroom-20240209_124846.png",
		"Photoroom-20240209_125143.png",
		"Photoroom-20240209_221818.png",
		"Photoroom-20240210_162938.png",
		"Photoroom-20240210_163014.png",
		"Tavola disegno 3.png",
		//"Tavola disegno 5.png",
		"logo GFE Lombardia.png",
		"logo tortora 3.png",
		"logo.png",
		"logo_BASE_neg.png",
		"ua+ giallo azzurro.png",
		"LaRondine_bg-white.png",
		"IMG-20240211-WA0031.png",
		"Photoroom-20240211_212456.png",
		"Photoroom-20240211_113831.png",
		"Photoroom-20240211_212528.png",
		"Photoroom-20240211_173250.png",
		"Photoroom-20240211_212556.png",
		"Photoroom-20240211_212427.png"
	]

	// const supportersLogos = ['UaMi.jpeg', 'LiberiOltreLeIllusioni.png','RadicaliItaliani.png', 'EconomiaItalia.png'];
	// const mediaParthnerLogos = ['LiberiOltreLeIllusioni.png', 'EconomiaItalia.png'];
	supportersLogos = supportersLogos.sort((a, b) => 0.5 - Math.random())
	loadImages('./images/supporters',supportersLogos,'supportersImages') //supporters
	// loadImages('./images/media-partnership',mediaParthnerLogos,'mediaPartnerImages') //mediaPartnerImages

})()


