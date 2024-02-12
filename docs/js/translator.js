const Translator = (function () {

	'use strict'

	const translations = {
		en : {
			'24Febbraio' : 'Saturday 24th February',
			'days':'Days',
			'event-description':"With the slogan 'Vittoria For Peace', the rally will begin at 1.00 pm in Piazza Castello, and at 2.00/2.30 pm the march will start and end in Piazza del Duomo, where the demonstration dedicated to Ukraine will be held , where we will be able to hear the voices of people who have a lot to say, we will see courage and fight united for the freedom that will bring us just and lasting Peace. See you soon!",
			'event-intro':'On February 24, 2024, all of Northern Italy will gather in Milan for a demonstration dedicated to the tenth year of the Russian invasion in Ukraine and the second year of large-scale aggression.',
			'event-name' : 'Victory for peace',
			'hours': 'Hours',
			'minutes' : 'Minutes',
			'seconds' : 'Seconds',
			'supporters' : 'Supporters',
			'victory' : 'VICTORY',
			'for' : 'FOR',
			'peace' : 'PEACE'
		},
		it : {
			'24Febbraio' : 'Sabato 24 Febbraio',
			'days':'Giorni',
			'event-description':"Con lo slogan 'Vittoria Per La Pace', il raduno inizierà alle 13:00 in Piazza Castello, e alle 14:00/14:30 partirà la marcia che si concluderà in piazza del Duomo, dove si terrà un presidio dedicato all'Ucraina, dove potremo sentire le voci di persone che hanno molto da dire, vedremo coraggio e lotta uniti per la libertà che ci porterà la Pace giusta e duratura. A presto!",
			'event-intro':"Con lo slogan 'Vittoria Per La Pace', il raduno inizierà alle 13:00 in Piazza Castello, e alle 14:00/14:30 partirà la marcia che si concluderà in piazza del Duomo, dove si terrà un presidio dedicato all'Ucraina, dove potremo sentire le voci di persone che hanno molto da dire, vedremo coraggio e lotta uniti per la libertà che ci porterà la Pace giusta e duratura. A presto!",
			'event-name' : 'Vittoria per la pace',
			'hours': 'Ore',
			'minutes' : 'Minuti',
			'seconds' : 'Secondi',
			'supporters' : 'Aderenti',
			'victory' : 'VITTORIA',
			'for' : 'PER LA',
			'peace' : 'PACE'
		},
		uk : {
			'24Febbraio' : 'Субота 24 лютого',
			'days':'дні',
			'event-description':'Під гаслом «Вітторія за мир» мітинг розпочнеться о 13:00 на площі Кастелло, а о 14:00/14:30 марш розпочнеться та завершиться на площі Дуомо, де відбудеться мітинг, присвячений Україні, де ми зможемо почути голоси людей, які мають багато сказати, ми побачимо мужність і боротимемося об’єднано за свободу, яка принесе нам справедливий і міцний мир. До зустрічі!',
			'event-intro':'24 лютого 2024 року вся Північна Італія збереться в Мілані на демонстрацію, присвячену десятій річниці російського вторгнення в Україну та другому році широкомасштабної агресії.',
			'event-name' : 'Перемога заради миру',
			'hours': 'години',
			'minutes' : 'хвилини',
			'seconds' : 'секунди',
			'supporters' : 'Адепти',
			'victory' : 'Перемога',
			'for' : 'заради',
			'peace' : 'миру'
		}
	}

	function getLocaleFromLocalStorage() {
		// Check if "locale" variable exists in local storage
		if (localStorage.getItem("locale")) {
			// If it exists, set the script variable to its value
			var locale = localStorage.getItem("locale");
			return locale;
		} else {
			// If it doesn't exist, set a default value (or prompt the user for it)
			var defaultLocale = [,'en','it','uk'].includes(document.documentElement.lang) ? document.documentElement.lang : 'it' // You can set a default value here
			localStorage.setItem("locale", defaultLocale);
			return defaultLocale;
		}
	}
	
	const translateLabels = () => {
		const language = getLocaleFromLocalStorage();
		const labelElements = document.querySelectorAll("[data-i18n]")
		labelElements.forEach(element => {
			const label = element.getAttribute('data-i18n')
			element.innerText= translations[language][label]
		});
	} 
	
	const changeLang = (langInitials) => {
		localStorage.setItem("locale", langInitials);
		translateLabels()
	}

	translateLabels()

	return {
		changeLang : changeLang
	}
	
})()

