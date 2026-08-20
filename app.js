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

// Appel des fonction
// Menu hamburger
menuHamburger();

// compte a rebour
displayTime();
setInterval(displayTime, 1000)

// Reserver sur whatsApp
reserveWA()