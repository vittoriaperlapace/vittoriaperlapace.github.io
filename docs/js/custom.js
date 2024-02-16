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

	function loadImages(directoryPath,filename,containerId) {
		const imageContainer = document.getElementById(containerId);
		imageContainer.innerHTML = ''; // Clear previous content

		try {
			// Create img elements for each filename
			const img = document.createElement('img');
			img.src = `${directoryPath}/${filename}`;
			img.style.height = '50px';
			img.className = 'm-2';
			imageContainer.appendChild(img);
		} catch (error) {
			console.error('Error loading images:', error);
		}
	}

	function loadSupporters(directoryPath,supporters,containerId){
		const containerElement = document.getElementById(containerId);
		containerElement.innerHTML = ''; // Clear previous content

		supporters.forEach(supporter => {
			let element = null
			if(supporter.url != ""){
				element = document.createElement('a');
				element.href = supporter.url;
			}
			else{
				element = document.createElement('span');
			}
			element.id = supporter.id

			containerElement.appendChild(element);

			loadImages(directoryPath,supporter.image,supporter.id)
		});

	}

	let supportersData = [	
		{"id":"UaMi","image" : "UaMi.jpeg", "url" :""},
		{"id":"liberiOltreLeIllusioni","image" : "LiberiOltreLeIllusioni.png", "url" :"https://www.liberioltreleillusioni.it/"},
		{"id":"RadiacaliItaliani","image" : "RadicaliItaliani.png", "url" :"https://instagram.com/radicali.it?igshid=YmMyMTA2M2Y="},
		{"id":"4","image" : "19-18-07-logo-liberali-democratici-europei-3.png", "url" :"https://www.instagram.com/libdemeuropei?igsh=ejB4YXBqbjR5eXp6"},
		{"id":"5","image" : "Azione_milano_logo_B.png", "url" :"https://www.instagram.com/azionemi?igsh=dTkxbTRrOTJzZjFt"},
		{"id":"6","image" : "IMG_20240205_220142_003.png", "url" :"https://instagram.com/voltitalia?igshid=YmMyMTA2M2Y="},
		{"id":"7","image" : "IMG_20240208_213143.png", "url" :"https://instagram.com/associazionepierocapone?igshid=YmMyMTA2M2Y="},
		{"id":"8","image" : "IMG_2324.PNG", "url" :"https://www.instagram.com/italiavivamilano?igsh=MWt0YjJhZTUwMHR2bQ=="},
		{"id":"Eumans","image" : "LOGO EUMANS PICCOLO (1).png", "url" :"https://instagram.com/eumans.eu?igshid=YmMyMTA2M2Y="},
		{"id":"10","image" : "Logo liberi.png", "url" :"https://instagram.com/liberi_al?igshid=YmMyMTA2M2Y="},
		{"id":"11","image" : "Logo vettoriale Comitato Ventotene orizzontale-01.png", "url" :"https://instagram.com/comitatoventotene?igshid=YmMyMTA2M2Y="},
		{"id":"12","image" : "Logo1.png", "url" :""},
		{"id":"13","image" : "Logo2-1.png", "url" :""},
		{"id":"14","image" : "Marchio_Aglietta_new.png", "url" :"https://www.instagram.com/radicali_aglietta?igsh=MTJhMzloOXNqZDczaQ=="},
		{"id":"15","image" : "Photoroom-20240208_215930.png", "url" :"https://www.instagram.com/associazioneanahita?igsh=MWU3d3RtbGJ4NzZxcg=="},
		{"id":"16","image" : "Photoroom-20240213_184533.png", "url" :"https://instagram.com/economiaitalia?igshid=YmMyMTA2M2Y="},
		{"id":"17","image" : "Photoroom-20240208_220940.png", "url" :"https://instagram.com/avvocatoatomico?igshid=YmMyMTA2M2Y="},
		{"id":"18","image" : "Photoroom-20240208_222613.png", "url" :"https://instagram.com/universit"},
		{"id":"19","image" : "Photoroom-20240208_223643.png", "url" :"https://instagram.com/federazionedirittiumani?igshid=YmMyMTA2M2Y="},
		{"id":"20","image" : "Photoroom-20240208_223905.png", "url" :"https://www.instagram.com/associazione_maana?igsh=Z3R4djh2dXFuZTgw"},
		{"id":"21","image" : "Photoroom-20240208_224228.png", "url" :"https://www.instagram.com/psi_uff?igsh=dWMwNW05YTRoeDMy"},
		{"id":"22","image" : "Photoroom-20240208_234345.png", "url" :"https://www.instagram.com/piueuropamilano?igsh=MTl2djI5ZWxvNnJyNQ=="},
		{"id":"23","image" : "Photoroom-20240209_124037.png", "url" :""},
		{"id":"24","image" : "Photoroom-20240209_124313.png", "url" :""},
		{"id":"25","image" : "Photoroom-20240209_124647.png", "url" :""},
		{"id":"26","image" : "Photoroom-20240209_124846.png", "url" :""},
		{"id":"27","image" : "Photoroom-20240209_125143.png", "url" :""},
		{"id":"28","image" : "Photoroom-20240209_221818.png", "url" :""},
		{"id":"29","image" : "Photoroom-20240210_162938.png", "url" :""},
		{"id":"30","image" : "Photoroom-20240210_163014.png", "url" :"https://instagram.com/giovaniucraina?igshid=YmMyMTA2M2Y="},
		{"id":"31","image" : "Tavola disegno 3.png", "url" :"https://instagram.com/gdmilano_?igshid=YmMyMTA2M2Y="},
		{"id":"32","image" : "logo GFE Lombardia.png", "url" :"https://instagram.com/gfe_jef.italy?igshid=YmMyMTA2M2Y="},
		{"id":"33","image" : "logo tortora 3.png", "url" :"https://instagram.com/radicalimilano?igshid=YmMyMTA2M2Y="},
		{"id":"34","image" : "logo.png", "url" :"https://instagram.com/yourope_eu?igshid=YmMyMTA2M2Y="},
		{"id":"35","image" : "logo_BASE_neg.png", "url" :"https://instagram.com/baseitaliaweb?igshid=YmMyMTA2M2Y="},
		{"id":"36","image" : "ua+ giallo azzurro.png", "url" :""},
		{"id":"37","image" : "LaRondine_bg-white.png", "url" :""},
		{"id":"38","image" : "IMG-20240211-WA0031.png", "url" :""},
		{"id":"39","image" : "Photoroom-20240211_212456.png", "url" :""},
		{"id":"40","image" : "Photoroom-20240211_113831.png", "url" :""},
		{"id":"41","image" : "Photoroom-20240211_212528.png", "url" :""},
		{"id":"42","image" : "Photoroom-20240211_173250.png", "url" :""},
		{"id":"43","image" : "Photoroom-20240211_212556.png", "url" :""},
		{"id":"44","image" : "Photoroom-20240211_212427.png", "url" :""},
		{"id":"45","image" : "Photoroom-20240212_104103.png", "url" :""},
		{"id":"46","image" : "Photoroom-20240212_181931.png", "url" :""},
		{"id":"47","image" : "IMG-20240214-WA0017.png", "url" :""},
		{"id":"AvvFrancescoCatania","image" : "AvvFrancescoCatania.jpg", "url" :"https://www.youtube.com/@AvvFrancescoCatania0000"},
		{"id":"OdvMriyaMpir","image" : "OdvMriyaMpir.png", "url" :""},
		{"id":"GiovaniBlu","image" : "GiovaniBlu.png ", "url" :"https://instagram.com/giovaniblu?igshid=YmMyMTA2M2Y"},
		{"id":"MalveDiUcrania","image" : "MalveDiUcrania.png", "url" :""},
		{"id":"R&P","image" : "R&P.png ", "url" :""},
		{"id":"PonteAtlantico","image" : "PonteAtlantico.jpg", "url" :""}
		// {"image/ : "/"IMG_20240208_144148_413.png", "url" :""},
		// {"image/ : "/ "Photoroom-20240208_220351.png", "url" :""},
		// {"image/ : "/"Tavola disegno 5.png", "url" :""},
	]
	
	supportersData = supportersData.sort((a, b) => 0.5 - Math.random())
	loadSupporters('./images/supporters',supportersData,'supportersImages')

})()


