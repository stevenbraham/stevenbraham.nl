import LazyLoad from "vanilla-lazyload";
import { Collapse } from "bootstrap.native";

const lazyLoadInstance = new LazyLoad({
  elements_selector: ".img-lazy",
  threshold: 50,
});

const collapseBtn = document.getElementById("collapse-btn");
if (collapseBtn) {
  const collapseBtnInstance = new Collapse(collapseBtn);
  collapseBtnInstance.hide();
}
