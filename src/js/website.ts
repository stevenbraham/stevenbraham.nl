import '../scss/website.scss';
import LazyLoad from "vanilla-lazyload";

const lazyLoadInstance = new LazyLoad({
  elements_selector: "img",
  threshold: 50,
});

const collapseButton = document.querySelector(".navbar-toggler");
const navBar = document.querySelector(".navbar-collapse");

if (collapseButton) {
  collapseButton.addEventListener("click", function () {
    navBar?.classList.toggle("show");
  });
}
