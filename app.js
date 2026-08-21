// Variables
// Menu hamburger
const navBar = document.getElementById("nav-bar");
const btnHamburger = document.getElementById("btn-hamburger");
const btnClose = document.getElementById("btn-close");
const navBarLinks = document.querySelectorAll(".nav-bar a");

// Compte a rebour
const chrono = document.getElementById("chrono");
let dateFestival = "2026-08-21T18:00:00";

// Reserver sur whatsApp
const btnPass1 = document.getElementById('btn-pass-1');
const btnPass3 = document.getElementById('btn-pass-3');

// Filtrer programme
// Bouton
const btnVendredi = document.getElementById('btn-vendredi');
const btnSamedi = document.getElementById('btn-samedi');
const btnDimanche = document.getElementById('btn-dimanche');
// 2ours
const jour1 = document.getElementById('jour-1');
const jour2 = document.getElementById('jour-2');
const jour3 = document.getElementById('jour-3');

// Afficher la reponse
const btnDowns = document.querySelectorAll('.btn-down');
const btnUps = document.querySelectorAll('.btn-up');

// Fonctions
// Menu hamburger
const menuHamburger = () => {
	// ecouter evenement de click sur le bouton hamburger
	btnHamburger.addEventListener("click", () => {
		navBar.classList.remove("active");
		btnHamburger.style.display = "none";
		btnClose.style.display = "block";
	});

	btnClose.addEventListener("click", () => {
		navBar.classList.add("active");
		btnHamburger.style.display = "block";
		btnClose.style.display = "none";
	});

	navBarLinks.forEach((link) => {
		link.addEventListener("click", () => {
			navBar.classList.add("active");
			btnHamburger.style.display = "block";
			btnClose.style.display = "none";
		});
	});
};

// Compte a rebour
// calculer le temps restant
const timeStay = (date) => {
	const dateNow = new Date();
	const dateTarget = new Date(date);
	// Caluculer la difference
	const difference = dateTarget - dateNow;
	if (difference <= 0) {
		return {
			day: 0,
			hour: 0,
			minute: 0,
			second: 0,
		};
	}
	// Total des seconde restantes
	const secondTotal = Math.floor(difference / 1000);
	// Nombre de jours restants
	const day = Math.floor(secondTotal / 86400);
	// Nombre d'heure
	const hour = Math.floor((secondTotal % 86400) / 3600)
	// Nombre de minute
	const minute = Math.floor((secondTotal % 3600 ) / 60);
	// Nombre de seconde
	const second = Math.floor((secondTotal % 60));

	return {
		day,
		hour,
		minute,
		second
	}
};

// Afficher le temps
const displayTime = () => {
	const time = timeStay(dateFestival);
	if (time) {
		const day = String(time.day).padStart(2, "0");
		const hour = String(time.hour).padStart(2, "0");
		const minute = String(time.minute).padStart(2, "0");
		const second = String(time.second).padStart(2, "0");
		chrono.innerHTML = `
			<div class="time">
				<time>${day}</time>
				<span>Jours</span>
			</div>
			<div class="time">
				<time>${hour}</time>
				<span>Heures</span>
			</div>
			<div class="time">
				<time>${minute}</time>
				<span>Minutes</span>
			</div>
			<div class="time">
				<time>${second}</time>
				<span>Secondes</span>
			</div>
		`
	}
}

// Reserver sur whatsApp
// Ouvrir whatsApp
const openWhatsApp = (pass) => {
	const numero = "+242066804011";
	const message = `Bonjour, je souhaite réserver un ${pass} pour le Festival Sape & Lumière.`;

	const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;

	window.open(url, "_blank");
}

// fonction reservation
const reserveWA = () => {
	btnPass1.addEventListener("click", () => {
		openWhatsApp('Pass 1 Jours');
	});

	btnPass3.addEventListener("click", () => {
		openWhatsApp('Pass 3 Jours');
	})
}

// Choisir jour
const choisirJour = () => {
	btnVendredi.addEventListener('click', () => {
		if (btnVendredi.classList.contains('filtre')) {
			return;
		} else {
			btnVendredi.classList.add('filtre');

			if(btnSamedi.classList.contains('filtre')) {
				btnSamedi.classList.remove('filtre')
			}
			if(btnDimanche.classList.contains('filtre')) {
				btnDimanche.classList.remove('filtre')
			}
		}

		jour1.classList.remove('jour-hidden');

		if(!jour2.classList.contains('jour-hidden')) {
			jour2.classList.add('jour-hidden')
		}

		if(!jour3.classList.contains('jour-hidden')) {
			jour3.classList.add('jour-hidden')
		}	
	});

	btnSamedi.addEventListener('click', () => {
		if (btnSamedi.classList.contains('filtre')) {
			return;
		} else {
			btnSamedi.classList.add('filtre');
			
			if(btnVendredi.classList.contains('filtre')) {
				btnVendredi.classList.remove('filtre')
			}
			if(btnDimanche.classList.contains('filtre')) {
				btnDimanche.classList.remove('filtre')
			}
		}

		jour2.classList.remove('jour-hidden');

		if(!jour1.classList.contains('jour-hidden')) {
			jour1.classList.add('jour-hidden')
		}

		if(!jour3.classList.contains('jour-hidden')) {
			jour3.classList.add('jour-hidden')
		}	
	});

	btnDimanche.addEventListener('click', () => {
		if (btnDimanche.classList.contains('filtre')) {
			return;
		} else {
			btnDimanche.classList.add('filtre');
			
			if(btnVendredi.classList.contains('filtre')) {
				btnVendredi.classList.remove('filtre')
			}
			if(btnSamedi.classList.contains('filtre')) {
				btnSamedi.classList.remove('filtre')
			}
		}

		jour3.classList.remove('jour-hidden');

		if(!jour1.classList.contains('jour-hidden')) {
			jour1.classList.add('jour-hidden')
		}

		if(!jour2.classList.contains('jour-hidden')) {
			jour2.classList.add('jour-hidden')
		}	
	});
}

// Afficher reponses
const displayResponse = () => {
	btnDowns.forEach(btnDown => {
		btnDown.addEventListener('click', (event) => {
			const article = event.currentTarget.closest('.question-reponse');

			const reponse = article.querySelector('.reponse');
			const btnUp = article.querySelector('.btn-up');
			reponse.style.display = 'block';
			btnUp.style.display = 'inline';
			event.currentTarget.style.display = 'none';
		});
	});
}

const cacherResponse = () => {
	btnUps.forEach(btnUp => {
		btnUp.addEventListener('click', (event) => {
			const article = event.currentTarget.closest('.question-reponse');

			const reponse = article.querySelector('.reponse');
			const btnDown = article.querySelector('.btn-down');
			reponse.style.display = 'none';
			btnDown.style.display = 'inline';
			event.currentTarget.style.display = 'none';
		});
	});
}

// Appel des fonction
// Menu hamburger
menuHamburger();

// compte a rebour
displayTime();
setInterval(displayTime, 1000);

// Reserver sur whatsApp
reserveWA();

// Choisir Jour
choisirJour();

// Afficher reponse;
displayResponse();
cacherResponse();