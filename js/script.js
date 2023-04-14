let burger = document.querySelector(".burger");
let ul = document.querySelector(".nav ul.copie");

burger.addEventListener("click", function () {
	if (ul.style.display === "" || ul.style.display === "none") {
		ul.style.cssText =
			"display: flex;position: absolute;flex-direction: column;background-color:  rgb(0, 0, 0, 50%);top: 100%;width: 100%;left: 0";
	} else {
		ul.style.display = "none";
	}
});

let iright = document.querySelector(".fa-angle-right");
let ileft = document.querySelector(".fa-angle-left");

const tabimages = [
	'url("../images/landing.jpg")',
	'url("../images/landing 2.webp")',
	'url("../images/landing 3.webp")',
];
let landing = document.querySelector(".landing");
if (localStorage.getItem("image")) {
	let i = localStorage.getItem("image");
	landing.style.backgroundImage = i;
	let j = tabimages.indexOf(i);

	[tabimages[0], tabimages[1], tabimages[2]] = [
		tabimages[j],
		tabimages[(j + 1) % 3],
		tabimages[(j + 2) % 3],
	];
}

console.log(landing.style.backgroundImage);
let cercles = document.querySelectorAll(".landing .cercles div");
for (let i = 0; i < 3; i++) {
	cercles[i].addEventListener("click", function () {
		for (let k = 0; k < 3; k++) {
			cercles[k].classList.remove("active");
		}
		this.className = "active";
		landing.style.backgroundImage = tabimages[i];
		window.localStorage.setItem("image", tabimages[i]);
	});
}
iright.addEventListener("click", function () {
	let currentimage = landing.style.backgroundImage;

	let indice = tabimages.indexOf(currentimage);

	landing.style.backgroundImage = tabimages[(indice + 1) % 3];
	for (let k = 0; k < 3; k++) {
		cercles[k].classList.remove("active");
	}
	cercles[(indice + 1) % 3].className = "active";
	window.localStorage.setItem("image", tabimages[(indice + 1) % 3]);
});

ileft.addEventListener("click", function () {
	let currentimage = landing.style.backgroundImage;
	for (let k = 0; k < 3; k++) {
		cercles[k].classList.remove("active");
	}
	let indice = tabimages.indexOf(currentimage);
	if (indice != 0) {
		landing.style.backgroundImage = tabimages[indice - 1];
		cercles[indice - 1].className = "active";
		window.localStorage.setItem("image", tabimages[indice - 1]);
	} else {
		landing.style.backgroundImage = tabimages[2];
		cercles[2].className = "active";
		window.localStorage.setItem("image", tabimages[2]);
	}
});
let button = document.querySelector(".onscroll");
let i = button.children[0];

button.addEventListener("click", function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});
window.onscroll = function () {
	if (window.scrollY >= 1000) {
		button.style.display = "flex";
	} else {
		button.style.display = "none";
	}
};

window.addEventListener("scroll", () => {
	let reveals = document.querySelectorAll(".reveal");
	let windowheight = window.innerHeight;
	for (let i = 0; i < reveals.length; i++) {
		let top = reveals[i].getBoundingClientRect().top;
		let revealtop = 150;

		if (top < windowheight - revealtop) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
});
