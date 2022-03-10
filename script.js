responsiveMenuButton = document.querySelector(".navfixed__icon");
responsiveOpt = document.querySelectorAll(".navfixed__linkOpt");
responsiveNav = document.querySelector(".navfixed__menu");
about = document.querySelector(".proyects");

function showMenu() {
  responsiveNav.classList.remove('hidden');
}

function hideMenu() {
  responsiveNav.classList.add('hidden');
}

responsiveMenuButton.addEventListener('click', () => showMenu());
responsiveNav.addEventListener('click', () => hideMenu());

window.onscroll = function() {
  let position = about.getBoundingClientRect().y;
  let scroll = document.documentElement.scrollTop;
  if(window.matchMedia("(max-width: 555px)").matches) {
    responsiveMenuButton.style = "";
  }else if(scroll > position) {
    responsiveMenuButton.style.transform = "scale(1)";
  }else {
    responsiveMenuButton.style.transform = "scale(0)";
  }
}
