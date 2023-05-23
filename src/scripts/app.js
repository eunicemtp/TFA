'use strict'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { PixiPlugin } from "gsap/dist/PixiPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, PixiPlugin);



/* /////////// */
/* BURGER MENU */
/* ////////// */


var menuBurger = document.querySelector("#btn-menu");
var menu = document.querySelector('.menu--mobile');
menuBurger.addEventListener("click", function () {
  menu.classList.toggle("menu--open");
});

function menuAffiche() {
    var menuClass = "menu--open",
        nav = document.getElementById("ancrage");
  
    if (nav.classList.contains(menuClass) == true) {
      nav.classList.remove(menuClass); // Cache le menu
    } else {
      nav.classList.add(menuClass); // Affiche le menu
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("ancrage").addEventListener("click", menuAffiche);
});