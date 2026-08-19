// Variables
// Menu hamburger
const navBar = document.getElementById("nav-bar");
const btnHamburger = document.getElementById("btn-hamburger");
const btnClose = document.getElementById("btn-close");
const navBarLinks = document.querySelectorAll(".nav-bar a");

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

// Appel des fonction
// MenuHamber
menuHamburger();
