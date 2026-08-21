// Import
// Tableau d'artiste
import artists from "./data.js";
// Variables
// Menu hamburger
const navBar = document.getElementById("nav-bar");
const btnHamburger = document.getElementById("btn-hamburger");
const btnClose = document.getElementById("btn-close");
const navBarLinks = document.querySelectorAll(".nav-bar a");

// Compte a rebour
const chrono = document.getElementById("chrono");
let dateFestival = "2026-08-21T17:30:00";

// Reserver sur whatsApp
const btnPass1 = document.getElementById("btn-pass-1");
const btnPass3 = document.getElementById("btn-pass-3");

// Filtrer programme
// Bouton
const btnVendredi = document.getElementById("btn-vendredi");
const btnSamedi = document.getElementById("btn-samedi");
const btnDimanche = document.getElementById("btn-dimanche");
// 2ours
const jour1 = document.getElementById("jour-1");
const jour2 = document.getElementById("jour-2");
const jour3 = document.getElementById("jour-3");

// Afficher la reponse
const btnDowns = document.querySelectorAll(".btn-down");
const btnUps = document.querySelectorAll(".btn-up");

// Validation formulaire
const formContact = document.querySelector(".form-contact");
const nom = document.getElementById("nom");
const tel = document.getElementById("tel");
const message = document.getElementById("message");
const formText = formContact.querySelector(".form-text");

// Line-Up
const containerArtist = document.getElementById('container-artiste');
const btnAll = document.getElementById('btn-tous');
const btnMusique = document.getElementById('btn-musique');
const btnSapeur = document.getElementById('btn-sapeur');
const btnlight = document.getElementById('btn-art-lumiere');

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
	const hour = Math.floor((secondTotal % 86400) / 3600);
	// Nombre de minute
	const minute = Math.floor((secondTotal % 3600) / 60);
	// Nombre de seconde
	const second = Math.floor(secondTotal % 60);

	return {
		day,
		hour,
		minute,
		second,
	};
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
		`;
	}
};

// Reserver sur whatsApp
// Ouvrir whatsApp
const openWhatsApp = (pass) => {
	const numero = "+242066804011";
	const message = `Bonjour, je souhaite réserver un ${pass} pour le Festival Sape & Lumière.`;

	const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;

	window.open(url, "_blank");
};

// fonction reservation
const reserveWA = () => {
	btnPass1.addEventListener("click", () => {
		openWhatsApp("Pass 1 Jours");
	});

	btnPass3.addEventListener("click", () => {
		openWhatsApp("Pass 3 Jours");
	});
};

// Choisir jour
const choisirJour = () => {
	btnVendredi.addEventListener("click", () => {
		if (btnVendredi.classList.contains("filtre")) {
			return;
		} else {
			btnVendredi.classList.add("filtre");

			if (btnSamedi.classList.contains("filtre")) {
				btnSamedi.classList.remove("filtre");
			}
			if (btnDimanche.classList.contains("filtre")) {
				btnDimanche.classList.remove("filtre");
			}
		}

		jour1.classList.remove("jour-hidden");

		if (!jour2.classList.contains("jour-hidden")) {
			jour2.classList.add("jour-hidden");
		}

		if (!jour3.classList.contains("jour-hidden")) {
			jour3.classList.add("jour-hidden");
		}
	});

	btnSamedi.addEventListener("click", () => {
		if (btnSamedi.classList.contains("filtre")) {
			return;
		} else {
			btnSamedi.classList.add("filtre");

			if (btnVendredi.classList.contains("filtre")) {
				btnVendredi.classList.remove("filtre");
			}
			if (btnDimanche.classList.contains("filtre")) {
				btnDimanche.classList.remove("filtre");
			}
		}

		jour2.classList.remove("jour-hidden");

		if (!jour1.classList.contains("jour-hidden")) {
			jour1.classList.add("jour-hidden");
		}

		if (!jour3.classList.contains("jour-hidden")) {
			jour3.classList.add("jour-hidden");
		}
	});

	btnDimanche.addEventListener("click", () => {
		if (btnDimanche.classList.contains("filtre")) {
			return;
		} else {
			btnDimanche.classList.add("filtre");

			if (btnVendredi.classList.contains("filtre")) {
				btnVendredi.classList.remove("filtre");
			}
			if (btnSamedi.classList.contains("filtre")) {
				btnSamedi.classList.remove("filtre");
			}
		}

		jour3.classList.remove("jour-hidden");

		if (!jour1.classList.contains("jour-hidden")) {
			jour1.classList.add("jour-hidden");
		}

		if (!jour2.classList.contains("jour-hidden")) {
			jour2.classList.add("jour-hidden");
		}
	});
};

// Afficher reponses
const displayResponse = () => {
	btnDowns.forEach((btnDown) => {
		btnDown.addEventListener("click", (event) => {
			const article = event.currentTarget.closest(".question-reponse");

			const reponse = article.querySelector(".reponse");
			const btnUp = article.querySelector(".btn-up");
			reponse.style.display = "block";
			btnUp.style.display = "inline";
			event.currentTarget.style.display = "none";
		});
	});
};

const cacherResponse = () => {
	btnUps.forEach((btnUp) => {
		btnUp.addEventListener("click", (event) => {
			const article = event.currentTarget.closest(".question-reponse");

			const reponse = article.querySelector(".reponse");
			const btnDown = article.querySelector(".btn-down");
			reponse.style.display = "none";
			btnDown.style.display = "inline";
			event.currentTarget.style.display = "none";
		});
	});
};

// Validation du formulaire
const delayMessage = (paragraphe) => {
	setTimeout(() => {
		if (paragraphe) {
			paragraphe.remove();
		}
	}, 5000);
};

const afficherMessage = (texte, type) => {
	const paragraphe = document.createElement("p");

	paragraphe.textContent = texte;
	paragraphe.classList.add("form-message");

	if (type === "error") {
		paragraphe.classList.add("message-error");
	}

	if (type === "success") {
		paragraphe.classList.add("message-success");
	}

	formContact.insertBefore(paragraphe, formText);

	delayMessage(paragraphe);
};

const validationFormulaire = () => {
	formContact.addEventListener("submit", (event) => {
		event.preventDefault();

		const ancienMessage = formContact.querySelector(".form-message");
		if (ancienMessage) {
			ancienMessage.remove();
		}

		let messageErreur = "";

		// Verification du nom
		if (nom.value.trim() === "") {
			messageErreur = "Veuillez renseigner votre nom.";
		} // Vérification du téléphone
		else if (tel.value.trim() === "") {
			messageErreur = "Veuillez renseigner votre numéro de téléphone.";
		} else if (
			!tel.value.trim().startsWith("+242") ||
			tel.value.trim().length !== 13
		) {
			messageErreur =
				"Veuillez renseigner un numéro congolais valide commençant par +242.";
		}
		// Vérification du message
		else if (message.value.trim() === "") {
			messageErreur = "Veuillez renseigner votre message.";
		}

		if (messageErreur) {
			afficherMessage(messageErreur, "error");
			return;
		} else {
			afficherMessage(
				"Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.",
				"success",
			);
		}

		formContact.reset();
	});
};

// Line-Up
const displayArtist = (artists) => {
	containerArtist.innerHTML = artists.map(item => 
		`<article class='artist-card' style="background-image: url('${item.photo}')">
			<p class="artist-category">${item.category}</p>
			<p class="artist-name">${item.name}</p>			
		</article>`
	).join('');

	const artistCategories = document.querySelectorAll('.artist-category');

	artistCategories.forEach(category => {
		const content = category.textContent;
		if (content === 'musique') {
			category.classList.add('musique');
		}

		if (content === 'art & lumière') {
			category.classList.add('art-lumiere');
		}

		if (content === 'sapeur') {
			category.classList.add('sapeur');
		}
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

// Validation du formulaire
validationFormulaire();

// afficher Line-Up
displayArtist(artists);