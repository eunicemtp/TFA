'use strict'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { PixiPlugin } from "gsap/dist/PixiPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, PixiPlugin);

const { from, to } = gsap;

/* /////////// */
/* BURGER MENU */
/* ////////// */


// var menuBurger = document.querySelector("#btn-menu");
// var menu = document.querySelector('.menu--mobile');
// menuBurger.addEventListener("click", function () {
//   menu.classList.toggle("menu--open");
// });

function toggleMenu() {
  const menuMobile = document.querySelector('.menu--mobile');
  menuMobile.classList.toggle("menu--open");
}

document.querySelector("#btn--menu").addEventListener("click", toggleMenu);

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


const time = gsap.timeline();
let match = gsap.matchMedia();
ScrollTrigger.saveStyles(".mobile, .desktop");

// /* /////////// */
// /* CONTAINER 2 */
// /* ////////// */


match.add("(min-width: 800px)", () => {

  // Sélectionne les éléments que tu veux animer
  const elementsToAnimate = document.querySelectorAll('.triangle .un, .triangle .deux, .triangle .trois, .triangle .cinq, .triangle .six');
  const elementsToAnimate2 = document.querySelectorAll('.triangle2 .un, .triangle2 .deux, .triangle2 .trois, .triangle2 .cinq, .triangle2 .six');
  const hide = document.querySelectorAll('.triangle .un, .triangle .deux, .triangle .trois, .triangle .quatre, .triangle .cinq, .triangle .six, .triangle .sept, .triangle .huit, .triangle .neuf');
  // Sélectionne l'élément .container__2
  const container = document.querySelector('.container__2');

  // Crée une timeline GSAP pour l'animation du trigger
  const tl = gsap.timeline({
    paused: true // L'animation démarre en pause
  });

  // Utilise GSAP pour animer l'opacité des éléments
  to(elementsToAnimate, {
    opacity: 1,         // Opacité cible
    duration: 0.5,      // Durée de l'animation en secondes
    ease: 'power1.out', // Courbe d'animation (facultatif, tu peux ajuster cela)
    stagger: 0.1,       // Délai entre chaque élément
    onComplete: () => tl.reverse() // Inverse la timeline une fois l'animation complétée
  });

  // Utilise GSAP pour animer l'opacité des éléments jusqu'à 0
  tl.to(hide, {
    opacity: 0,          // Opacité cible
    duration: 0.5,       // Durée de l'animation en secondes
    ease: 'power1.inOut', // Courbe d'animation (facultatif, tu peux ajuster cela)
    stagger: 0.1,        // Délai entre chaque élément
    onComplete: () => { 
      tl.reversed(false); // Annule l'état inversé de la timeline lorsque l'animation est terminée

    }
  });


  // Utilise GSAP pour animer l'opacité des éléments
  to(elementsToAnimate2, {
    opacity: 1,         // Opacité cible
    duration: 0.5,      // Durée de l'animation en secondes
    ease: 'power1.out', // Courbe d'animation (facultatif, tu peux ajuster cela)
    stagger: 0.1,       // Délai entre chaque élément
    onComplete: () => tl.reverse() // Inverse la timeline une fois l'animation complétée
  });


  // Déclenche l'animation lorsque l'élément .container__2 est atteint
  ScrollTrigger.create({
    trigger: 'container__2',
    start: 'top top',
    onEnter: () => tl.play(),
    onLeaveBack: () => tl.reverse(), // Inverse la timeline lorsque l'élément .container__2 est quitté en faisant défiler vers le haut

  });
// });

//   /* /////////// */
//   /* CONTAINER 3 */
//   /* ////////// */
 
  // Crée une timeline GSAP pour l'animation d'opacité
  const opacityTimeline = gsap.timeline({
    paused: true, // L'animation démarre en pause
    scrollTrigger:{
      trigger:'.container__4',
      start:'top -15vh',
      onEnter: () => opacityTimeline.play(),
      onLeaveBack: () => opacityTimeline.reverse(), // Inverse la timeline lorsque container__3 est quitté en faisant défiler vers le haut
    }
  });

  // Utilise GSAP pour animer l'opacité de l'élément hide jusqu'à 0
  opacityTimeline.to(hide, {
    opacity: 0,          // Opacité cible
    duration: 0.5,       // Durée de l'animation en secondes
    ease: 'power1.inOut', // Courbe d'animation (facultatif, tu peux ajuster cela)
    stagger: 0.1,        // Délai entre chaque élément

    onComplete: () => { 
      opacityTimeline.reversed(false); // Annule l'état inversé de la timeline lorsque l'animation est terminée
    }
  });


  opacityTimeline.to(".triangle2", {
    opacity: 1,          // Opacité cible
    duration: 0.5,       // Durée de l'animation en secondes
    ease: 'power1.inOut', // Courbe d'animation (facultatif, tu peux ajuster cela)
    stagger: 0.1,        // Délai entre chaque élément
    onComplete: () => { 
      opacityTimeline.reversed(false); // Annule l'état inversé de la timeline lorsque l'animation est terminée

    }
  });

  /* /////////// */
  /* CONTAINER 4 */
  /* ////////// */



  gsap.to(".triangle2 .move_1", {
    scrollTrigger: {
      trigger: ".container__4",
      toggleActions: "play none reset reverse",
      start:"top top",
      markers: true
    },

    x: '-200vw',

    ease: "smooth",
    duration: 1
  });

  gsap.to(".triangle2 .un,.triangle2 .sept",{

    opacity:0
  })

  gsap.to(".triangle2 .neuf",{

    y:'10vh',
    x:'-10vw',
    rotate:-50
  })
    

});








/* ////////////// */
/* MOBILE VERSION */
/* ////////////// */
/* MOBILE VERSION */
/* ////////////// */



gsap.set('.section', { autoAlpha: 0 });

var sections = gsap.utils.toArray('.section');

var sectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#section-gsap',
    pin: '#section-gsap',
    scrub: 0.5,
    start: "top top",
    end: '+=1500%',
  },
});

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  // desktop setup code here...
  sections.forEach(function (elem, i) {
    const tlDelay = i;
    var titles = elem.querySelectorAll('.text');
    var contentTL = gsap.timeline();

    gsap.set('.section', { zIndex: (i, target, targets) => targets.length - i });

    contentTL
      .to(elem, { autoAlpha: 1 }, tlDelay)
      .from(titles, { xPercent: -100, duration: 1, ease: 'power2.out', stagger: 0.6 })
      .to(elem, { autoAlpha: 0 });

    sectionTl.add(contentTL, tlDelay);
  });
});

mm.add("(max-width: 799px)", () => {
  // mobile setup code here...
  sections.forEach(function (elem, i) {
    const tlDelay = i;
    var titles = elem.querySelectorAll('.text');
    var contentTL = gsap.timeline();

    gsap.set('.section', { zIndex: (i, target, targets) => targets.length - i });

    contentTL
      .to(elem, { autoAlpha: 1 }, tlDelay)
      .from(titles, { xPercent: -100, duration: 1, ease: 'power2.out', stagger: 0.6 })
      .to(elem, { autoAlpha: 0 });

    sectionTl.add(contentTL, tlDelay);
  });
});

var sections2 = gsap.utils.toArray('.section2');

var sectionTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#section-gsap2',
    pin: '#section-gsap2',
    scrub: 0.5,
    start: "top top",
    end: '+=750%',
  },
});

mm.add("(min-width: 800px)", () => {
  // desktop setup code here...
  sections2.forEach(function (elem, i) {
    const tlDelay = i;
    var texte = elem.querySelectorAll('.text2');
    var img = elem.querySelectorAll('.icon2');
    var titles = elem.querySelectorAll('.titles_scroll')
    var contentTL = gsap.timeline();

    gsap.set('.section2', { zIndex: (i, target, targets) => targets.length - i });

    contentTL
      .to(elem, { autoAlpha: 1 }, tlDelay)
      .from(texte, { xPercent: -105, duration: 1, ease: 'power2.out', stagger: 0.6 })
      .from(img, { autoAlpha:0 })
      .from(titles, { xPercent: 105, duration: 1, ease: 'power2.out', stagger: 0.6 })

      .to(elem, { autoAlpha: 0 })


    sectionTl2.add(contentTL, tlDelay);
  });
});

mm.add("(max-width: 799px)", () => {
  // mobile setup code here...
  sections2.forEach(function (elem, i) {
    const tlDelay = i;
    var texte = elem.querySelectorAll('.text2');
    var img = elem.querySelectorAll('.icon2');
    var titles = elem.querySelectorAll('.titles_scroll')
    var contentTL = gsap.timeline();

    gsap.set('.section2', { zIndex: (i, target, targets) => targets.length - i });

    contentTL
      .to(elem, { autoAlpha: 1 }, tlDelay)
      .from(img, { autoAlpha:0 })
      .from(texte, { xPercent: -150, duration: 1, ease: 'power2.out', stagger: 0.6 })
      .from(titles, { xPercent: 100, duration: 1, ease: 'power2.out', stagger: 0.6 })

      .to(elem, { autoAlpha: 0 })


    sectionTl2.add(contentTL, tlDelay);
  });
});