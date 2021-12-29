const hamburgerBtn = document.querySelector(".nav__hamburger");
const navigation = document.querySelector(".nav__navigation");
const navLink = document.querySelectorAll(".nav__item");
const navBars = document.querySelector(".nav__bars");

const handleNav = () => {
	navigation.classList.toggle("nav__navigation--active");
	navBars.classList.toggle("nav__bars--active");

	navLink.forEach(item => {
		item.addEventListener("click", () => {
			navigation.classList.remove("nav__navigation--active");
			navBars.classList.remove("nav__bars--active");
		});
	});
};

hamburgerBtn.addEventListener("click", handleNav);
