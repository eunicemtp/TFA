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


const time = gsap.timeline();
let match = gsap.matchMedia();
ScrollTrigger.saveStyles(".mobile, .desktop");

/* /////////// */
/* CONTAINER 2 */
/* ////////// */


match.add("(min-width: 769px)", () => {
  const scenes = gsap.utils.toArray(".container__2");
  const height = (scenes.length - 1) * 400 + "%";
  const pinTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".container__2",
      pin: ".fixe",
      start: "center center",
      end: "+=700vh",
      scrub: 0.75,
      limitCallbacks: true // Ajoutez cette option pour limiter les appels de rappel
    }
  });

  gsap.from(".gauche", {
    x: "-200%",
    duration: 3,
    delay: 4,
    opacity: 0
  });


  gsap.from(".triangle", {
    x: '0',
    y: '0',
    opacity:1,
    onComplete: function() {
      gsap.to(".triangle", {
        scrollTrigger: {
          trigger: ".container__2",
          toggleActions: "restart pause resume reverse",
          start: "20vh center",
          pin: ".pin",
          end: "50vh",
          limitCallbacks: true, // Ajoutez cette option pour limiter les appels de rappel

        },
        x: '-30%',
        y: '-18%',
        ease: "smooth",
        duration: 2,
        rotate: 90,
        onComplete: function() {
          gsap.to(".triangle .neuf", {
            scrollTrigger: {
              trigger: ".container__2",
              toggleActions: "play none reset reverse",
              start: ".pin",
              markers: true
            },
            y: '-440%',
            ease: "smooth",
            duration: 2,
            zIndex: 10,

            onComplete: function() {
              gsap.to(".triangle .huit", {
                scrollTrigger: {
                  trigger: ".gauche",
                  toggleActions: "play none reset reverse",
                  markers: true
                },
                x: '102%',
                ease: "smooth",
                duration: 2,
                delay: 0.5
              });

              gsap.to(".gauche", {
                ease: "smooth",
                toggleActions: "restart pause reset reverse",
                pin: '.pin',
                x: 0,

              });

            }
          });

        },


      });

    },

  });





  // // Sélectionne les éléments que tu veux animer
  // const elementsToAnimate = document.querySelectorAll('.triangle .un, .triangle .deux, .triangle .trois, .triangle .cinq, .triangle .six');
  // //const hide = document.querySelectorAll('.triangle .un, .triangle .deux, .triangle .trois, .triangle .quatre, .triangle .cinq, .triangle .six, .triangle .sept, .triangle .huit, .triangle .neuf');
  // // Sélectionne l'élément .container__2
  // const container = document.querySelector('.container__2');

  // // Crée une timeline GSAP pour l'animation du trigger
  // const tl = gsap.timeline({
  //   paused: true // L'animation démarre en pause
  // });

  // // Utilise GSAP pour animer l'opacité des éléments
  // to(elementsToAnimate, {
  //   opacity: 1,         // Opacité cible
  //   duration: 0.5,      // Durée de l'animation en secondes
  //   ease: 'power1.out', // Courbe d'animation (facultatif, tu peux ajuster cela)
  //   stagger: 0.1,       // Délai entre chaque élément
  //   onComplete: () => {
  //     tl.reverse() // Inverse la timeline une fois l'animation complétée
     
  //   }
  // });

  // // Utilise GSAP pour animer l'opacité des éléments jusqu'à 0
  // tl.to(elementsToAnimate, {
  //   opacity: 0,          // Opacité cible
  //   duration: 0.5,       // Durée de l'animation en secondes
  //   ease: 'power1.inOut', // Courbe d'animation (facultatif, tu peux ajuster cela)
  //   stagger: 0.1,        // Délai entre chaque élément
  //   onComplete: () => { 
  //     tl.reversed(false); // Annule l'état inversé de la timeline lorsque l'animation est terminée

      
  //   }
  // });

  // // Déclenche l'animation lorsque l'élément .container__2 est atteint
  // ScrollTrigger.create({
  //   trigger: '.container__2',
  //   start: 'top top',
  //   onEnter: () => tl.play(),
  //   onLeaveBack: () => tl.reverse(), // Inverse la timeline lorsque l'élément .container__2 est quitté en faisant défiler vers le haut

  // });



  /* /////////// */
  /* CONTAINER 3 */
  /* ////////// */



  const hide = document.querySelectorAll('.triangle .un, .triangle .deux, .triangle .trois, .triangle .quatre, .triangle .cinq, .triangle .six, .triangle .sept, .triangle .huit, .triangle .neuf');
  //const elementToShow = document.querySelectorAll('.triangle .deux');

  // Crée une timeline GSAP pour l'animation d'opacité
  const opacityTimeline = gsap.timeline({
    paused: true, // L'animation démarre en pause
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


  opacityTimeline.to(elementToShow, {
    opacity: 1,          // Opacité cible
    duration: 0.5,       // Durée de l'animation en secondes
    ease: 'power1.inOut', // Courbe d'animation (facultatif, tu peux ajuster cela)
    stagger: 0.1,        // Délai entre chaque élément
    onComplete: () => { 
      opacityTimeline.reversed(false); // Annule l'état inversé de la timeline lorsque l'animation est terminée
    }
  });

  // Déclenche l'animation d'opacité lorsque le bas de container__2 atteint 5vh depuis le haut de container__3
  ScrollTrigger.create({
    trigger: 'container__3',
    start: 'top top',
    onEnter: () => opacityTimeline.play(),
    onLeaveBack: () => opacityTimeline.reverse(), // Inverse la timeline lorsque container__3 est quitté en faisant défiler vers le haut
  });

});

// gsap.to(".triangle .un,.deux, .trois, .quatre, .cinq, .six,.sept", {
//   // scrollTrigger: {
//   //   trigger: ".container__2",
//   //   toggleActions: "play none reset reverse",
//   //   start: ".pin",
//   //   markers: true
//   // },
//   trigger: ".container__2",
//   opacity:0,
//   ease: "smooth",
//   duration: 2,
//   start:"top",
//   // zIndex: 10,
// });






/* ////////////// */
/* MOBILE VERSION */
/* ////////////// */
/* MOBILE VERSION */
/* ////////////// */


match.add("(max-width: 768px)", () => {

  gsap.from(".triangle",{

    x:'1%',
    y:'1%',
    // opacity:1,
    onComplete: action

  })

  function action(){

    gsap.to(".triangle", {
      scrollTrigger: {
        trigger: ".container__1",
        start: "center center",
        toggleActions: "restart none reset reverse",
      },
      y: "73vh",
      x:"-10%",
      ease: "smooth",
      duration: 1.5,
      scale:1.5
    });

    gsap.to(".un,.deux, .trois, .quatre, .cinq, .six, .huit", {
      scrollTrigger: {
        trigger: ".container__1",
        start: "center center",
        toggleActions: "restart none reset reverse",
      },
      opacity:0
    });

    gsap.to(".neuf, .sept", {
      scrollTrigger: {
        trigger: ".container__1",
        start: "center center",
        toggleActions: "restart none reset reverse",
        pin:".container__2 .title__h3"
      },
      y:"30vh",
      ease: "smooth",
      duration: 1.5,
      rotate:-90,
      onComplete: action2
    });


  }
});


function action2(){

  gsap.to(".triangle", {
    scrollTrigger: {
      trigger: ".container__3",
      start: "bottom center ",
      toggleActions: "restart none reset reverse",
    },
    y: "273vh",

    ease: "smooth",
    duration: 1.5,
    scale:1.5,
    onComplete: action3
  });
  // gsap.to(".huit", {
  //   scrollTrigger: {
  //     trigger: ".container__3",
  //     start: "bottom center ",
  //     toggleActions: "restart none reset reverse",
  //   },
  //   // y: "273vh",
  //   rotate:90,
  //   opacity:1
  // });


}

function action3(){

  gsap.to(".triangle",{
    scrollTrigger: {
      trigger:".container__4",
      start:"bottom center",
      pin:true,
      toggleActions:"restart none reset reverse"
    },

    y:"400vh",
    ease:"smooth",
    duration:1.5
  })
}
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
      .from(titles, { xPercent: 160, duration: 1, ease: 'power2.out', stagger: 0.6 })

      .to(elem, { autoAlpha: 0 })


    sectionTl2.add(contentTL, tlDelay);
  });
});


/*
gsap.to(".triangle .un", {
  scrollTrigger: {
      trigger: ".container__2",


  },
  x:'-235%',
  y:'-10%',
  ease:"smooth",
  duration:2,
  rotate:90,
  position:"sticky"
});

gsap.to(".triangle .deux", {
  scrollTrigger: {
      trigger: ".container__2",

  },
  x:'-195%',
  y:'-125%',
  ease:"smooth",
  duration:2,
  rotate:90,
  position:"sticky"
});

gsap.to(".triangle .trois", {
  scrollTrigger: {
      trigger: ".container__2",


  },
  x:'-381%',
  y:'-100%',
  ease:"smooth",
  duration:2,
  rotate:30,
  position:"sticky"
});

gsap.to(".triangle .quatre", {
  scrollTrigger: {
      trigger: ".container__2",


  },
  x:'-480%',
  y:'-15%',
  ease:"smooth",
  duration:2,
  rotate:270,
  position:"sticky"
});

gsap.to(".triangle .cinq", {
  scrollTrigger: {
      trigger: ".container__2",


  },
  x:'-530%',
  y:'-77%',
  ease:"smooth",
  duration:2,
  rotate:270,
  position:"sticky"
});

gsap.to(".triangle .six", {
  scrollTrigger: {
      trigger: ".container__2",


  },
  x:'-194%',
  y:'-83%',
  ease:"smooth",
  duration:2,
  rotate:90,
  position:"sticky"
});

gsap.to(".triangle .sept", {
  scrollTrigger: {
      trigger: ".container__2",


  },
  x:'-428%',
  y:'-29%',
  ease:"smooth",
  duration:2,
  rotate:270,
  position:"sticky"
});

gsap.to(".triangle .huit", {
  scrollTrigger: {
      trigger: ".container__2",


  },
  x:'-300%',
  y:'120%',
  ease:"smooth",
  duration:2,
  rotate:90,
  position:"sticky"
});

gsap.to(".triangle .neuf", {
  scrollTrigger: {
      trigger: ".container__2",


  },
  x:'220%',
  y:'85%',
  ease:"smooth",
  duration:2,
  rotate:90,
  position:"sticky"
});
*/