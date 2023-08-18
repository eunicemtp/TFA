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


match.add("(min-width: 769px)", () => {
  // const scenes = gsap.utils.toArray(".container__2");
  // const height = (scenes.length - 1) * 400 + "%";
  const pinTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".container__2",
      pin: ".fixe",
      start: "center center",
      end: "+=950vh",
      scrub: 0.75,
      limitCallbacks: true // Ajoutez cette option pour limiter les appels de rappel
    }
  });

  // gsap.from(".gauche", {
  //   x: "-200%",
  //   duration: 3,
  //   delay: 4,
  //   opacity: 0
  // });


  // gsap.from(".triangle", {
  //   x: '0',
  //   y: '0',
  //   opacity:1,
  //   onComplete: function() {
  //     gsap.to(".triangle", {
  //       scrollTrigger: {
  //         trigger: ".container__2",
  //         toggleActions: "restart pause resume reverse",
  //         start: "20vh center",
  //         pin: ".pin",
  //         end: "50vh",
  //         limitCallbacks: true, // Ajoutez cette option pour limiter les appels de rappel

  //       },
  //       x: '-30%',
  //       y: '-18%',
  //       ease: "smooth",
  //       duration: 2,
  //       rotate: 90,
  //       onComplete: function() {
  //         gsap.to(".triangle .neuf", {
  //           scrollTrigger: {
  //             trigger: ".container__2",
  //             toggleActions: "play none reset reverse",
  //             start: ".pin",
  //             markers: true
  //           },
  //           y: '-440%',
  //           ease: "smooth",
  //           duration: 2,
  //           zIndex: 10,

  //           onComplete: function() {
  //             gsap.to(".triangle .huit", {
  //               scrollTrigger: {
  //                 trigger: ".gauche",
  //                 toggleActions: "play none reset reverse",
  //                 markers: true
  //               },
  //               x: '102%',
  //               ease: "smooth",
  //               duration: 2,
  //               delay: 0.5
  //             });

  //             gsap.to(".gauche", {
  //               ease: "smooth",
  //               toggleActions: "restart pause reset reverse",
  //               pin: '.pin',
  //               x: 0,

  //             });

  //           }
  //         });

  //       },


  //     });

  //   },

  // });


  // // Sélectionne les éléments que tu veux animer
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

  // //Utilise GSAP pour animer l'opacité des éléments jusqu'à 0
  // tl.to(elementsToAnimate2, {
  //   opacity: 0,          // Opacité cible
  //   duration: 0.5,       // Durée de l'animation en secondes
  //   ease: 'power1.inOut', // Courbe d'animation (facultatif, tu peux ajuster cela)
  //   stagger: 0.1,        // Délai entre chaque élément
  //   onComplete: () => { 
  //     tl.reversed(false); // Annule l'état inversé de la timeline lorsque l'animation est terminée

  //   }
  // });

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

//   // ScrollTrigger.create({
//   //   trigger: 'container__3',
//   //  start: 'top top',
//   //  onEnter: () => opacityTimeline.play(),
//   //  onLeaveBack: () => opacityTimeline.reverse(), // Inverse la timeline lorsque container__3 est quitté en faisant défiler vers le haut
//   // });


  // const tween = gsap.to([".triangle .neuf", ".triangle .huit"], {
  //   x: "0%",
  //   y: "0%",
  //   opacity:0,
  //   ease: "smooth",
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: ".container__2",
  //     start: "bottom center",
      
  //     end: "+=700vh",
  //     toggleActions: "play none reset reset",
  //     onLeaveBack: () => {

  //       gsap.to([".triangle .neuf", ".triangle .huit"], {
  //         x: "105%",
  //         y: "-15%",
  //         ease: "smooth",
  //         duration: 1,
          
  //        onComplete: animContainer3
  //       });
  //     }
  //   },
    
  // });

  const pinTl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".container__3",
      pin: ".fixe2",
      start: "center center",
      end: "+=700vh",
      scrub: 0.75,
      limitCallbacks: true // Ajoutez cette option pour limiter les appels de rappel
    }
  });

  // tween.then(animContainer3);

  // function animContainer3() {

  //   gsap.to(".triangle .move_1", {
  //     scrollTrigger: {
  //       trigger: ".container__3",
  //       toggleActions: "play none reset reverse",
  //       start:"top top",
  //       markers: true
  //     },
  //     x: '40%',
  //     ease: "smooth",
  //     duration: 1,
      
  //   });

  //   gsap.to(".triangle .deux", {
  //     scrollTrigger: {
  //       trigger: ".container__3",
  //       toggleActions: "play none reset reverse",
  //       start:"top top",
  //       markers: true
  //     },
  //     y: '-520%',
  //     ease: "smooth",
  //     duration: 1,
  //     opacity:1
  //   });

  //   gsap.to(".triangle .move_2", {
  //     scrollTrigger: {
  //       trigger: ".container__3",
  //       toggleActions: "play none reset reverse",
  //       markers: true,
        
  //     },
  //     x: '70%',
  //     y: '-10%',
  //     ease: "smooth",
  //     duration: 1.5,
  //     opacity:1
  //   });

  //   gsap.to(".triangle .sept", {
  //     scrollTrigger: {
  //       trigger: ".container__3",
  //       toggleActions: "restart pause reverse reverse",
  //       markers: true
  //     },
  //     y: '-40%',
  //     ease: "smooth",
  //     duration: 1.5,
  //     delay: 1.5,
      
  //   });
  //   gsap.to(".triangle .six", {
  //     scrollTrigger: {
  //       trigger: ".pin-container",
  //       toggleActions: "restart pause reverse reverse",
  //       markers: true
  //     },
  //     x: '100%',
  //     y: '-10%',
  //     ease: "smooth",
  //     duration: 1.5,
  //     delay: 1.5,
      
  //   });
  //   gsap.to(".triangle .trois",{

  //     opacity:1,



      
  //   });


    // gsap.to(hide, {
    //   opacity: 0,          // Opacité cible
    //   duration: 0.5,       // Durée de l'animation en secondes
    //   ease: 'power1.inOut', // Courbe d'animation (facultatif, tu peux ajuster cela)
    //   stagger: 0.1,        // Délai entre chaque élément
    //   // onComplete: () => { 
    //   //   tl.reversed(false); // Annule l'état inversé de la timeline lorsque l'animation est terminée
  
    //   // }
    // });

//     const tween2 = gsap.to(".triangle .neuf", {
//       scrollTrigger: {
//         trigger: ".container__3",
//         toggleActions: "restart pause reverse reverse",
//         start: ".pin-container",
//         markers: true
//       },
//       x: '105%',
//       y: '-15%',
//       ease: "smooth",
//       duration: 2,
//       onComplete: suite
//     });
      
//   }

//   tween2.then(suite);

//   function suite(){

//     gsap.to(".triangle .neuf", {
      
//       y: '-445%',
//       ease: "smooth",
//       duration: 2,
//     });
    
  // }



  // const hide2 = document.querySelectorAll('.triangle2 .un, .triangle2 .deux, .triangle2 .trois, .triangle2 .quatre, .triangle2 .cinq, .triangle2 .six, .triangle2 .sept, .triangle2 .huit, .triangle2 .neuf');
  //const elementToShow2 = document.querySelectorAll('.triangle2 .quatre, .triangle2 .cinq, .triangle2 .sept, .triangle2 .huit, .triangle2 .neuf');


  // Crée une timeline GSAP pour l'animation d'opacité
  const opacityTimeline = gsap.timeline({
    paused: true, // L'animation démarre en pause
    scrollTrigger:{
      trigger:'.container__4',
      start:'top top',
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

  // const pinTl3 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".container__4",
  //     pin: ".fixe3",
  //     start: "center center",
  //     end: "+=700vh",
  //     scrub: 0.75,
  //     limitCallbacks: true // Ajoutez cette option pour limiter les appels de rappel
  //   }
  // });

  // gsap.to(".triangle2",{
  //   scrollTrigger: {
  //     trigger: ".container__4",
  //     toggleActions: "play none reset reverse",
  //     start:"top top",
  //     markers: true,
  //     pin: ".container__4",
      
  //   },
  //   y:'90vh',
    

  //   onComplete: () => {
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
    
  //     gsap.to(".triangle2 .move_2", {
  //       scrollTrigger: {
  //         trigger: ".container__4",
  //         toggleActions: "play none reset reverse",
  //         start:"top top",
  //         markers: true
  //       },
  //       x: '10vw',
  //       y:'0vh',
  //       ease: "smooth",
  //       duration: 1
  //     });
       
  //   }

  // })
  // const elementsToAnimate2 = document.querySelectorAll('.triangle2 .un, .triangle2 .deux, .triangle2 .trois, .triangle2 .cinq, .triangle2 .six');
  // const show = gsap.timeline({
  //   paused: true, // L'animation démarre en pause
  //   scrollTrigger:{
  //     trigger:'.dilemme',
  //     start:'top top',
  //     onEnter: () => show.play(),
  //     onLeaveBack: () => show.reverse(), // Inverse la timeline lorsque container__3 est quitté en faisant défiler vers le haut
  //   }
  // });


  // // Utilise GSAP pour animer l'opacité des éléments jusqu'à 0
  // show.to(elementsToAnimate2, {
  //   opacity: 0,          // Opacité cible
  //   duration: 0.5,       // Durée de l'animation en secondes
  //   ease: 'power1.inOut', // Courbe d'animation (facultatif, tu peux ajuster cela)
  //   stagger: 0.1,        // Délai entre chaque élément
  //   onComplete: () => { 
  //     show.reversed(false); // Annule l'état inversé de la timeline lorsque l'animation est terminée

  //   }
  // });

  // show.to(elementsToAnimate2,{

  //   opacity:1,
  //   duration: 0.5,       // Durée de l'animation en secondes
  //   ease: 'power1.inOut', // Courbe d'animation (facultatif, tu peux ajuster cela)
  //   stagger: 0.1,        // Délai entre chaque élément
  // })
  // gsap.from(".triangle2", {

  //   scrollTrigger: {



  //   },
  //   y:'0',
  //   x:'0',
  //   onComplete: () =>{


  //     gsap.to(".triangle2", {
  //       scrollTrigger: {
  //         trigger: ".dilemme",
  //         toggleActions: "play none reset reverse",
  //         start: ".top top",
  //         markers: true,
  //         pin:".pin4",
  //         end:"600vh"
  //       },
  //       y:'105vh',
  //       opacity:1,
  //       // onComplete: () => { 
  //       //   gsap.to(".triangle2 .neuf", {
  //       //     scrollTrigger: {
  //       //       trigger: ".dilemme",
  //       //       toggleActions: "play none reset reverse",
  //       //       start: ".pin4",
  //       //       markers: true,
  //       //     },
  //       //     y: '-440%',
  //       //     ease: "smooth",
  //       //     duration: 2,
  //       //     zIndex: 10,
  
  //       //     onComplete: () => {
  //       //       gsap.to(".triangle2 .huit", {
  //       //         scrollTrigger: {
  //       //           trigger: ".gauche",
  //       //           toggleActions: "play none reset reverse",
  //       //           markers: true
  //       //         },
  //       //         x: '102%',
  //       //         ease: "smooth",
  //       //         duration: 2,
  //       //         delay: 0.5
  //       //       });
  
  //       //       gsap.to(".gauche", {
  //       //         ease: "smooth",
  //       //         toggleActions: "restart pause reset reverse",
  //       //         pin: '.pin',
  //       //         x: 0,
  
  //       //       })
  
  //       //     }
  //         // })
  //       // }
  //     })
  

  //   }
  // })



  // const elementsToAnimate3 = document.querySelectorAll('.triangle .sept, .triangle .quatre, .triangle .huit');
  // const show3 = gsap.timeline({
  //   paused: true, // L'animation démarre en pause
  //   scrollTrigger:{
  //     trigger:'.dilemme',
  //     start:'top top',
  //     onEnter: () => show3.play(),
  //     onLeaveBack: () => show3.reverse(), // Inverse la timeline lorsque container__3 est quitté en faisant défiler vers le haut
  //     // onLeave: () => show3.to('.triangle',{

  //     //   opacity:0
  //     // })
  //   }
  // });


  // //Utilise GSAP pour animer l'opacité des éléments jusqu'à 0
  // show3.to(hide, {
  //   opacity: 0,          // Opacité cible
  //   duration: 0.5,       // Durée de l'animation en secondes
  //   ease: 'power1.inOut', // Courbe d'animation (facultatif, tu peux ajuster cela)
  //   stagger: 0.1,        // Délai entre chaque élément
  //   // onComplete: () => { 
  //   //   show3.reversed(false); // Annule l'état inversé de la timeline lorsque l'animation est terminée

  //   // }
  // });

  // show3.to(elementsToAnimate3,{

  //   opacity:1,
  //   duration: 0.5,       // Durée de l'animation en secondes
  //   ease: 'power1.inOut', // Courbe d'animation (facultatif, tu peux ajuster cela)
  //   stagger: 0.1,        // Délai entre chaque élément
  // })

  // gsap.to(".triangle .neuf", {
  //   scrollTrigger: {
  //     trigger: ".dilemme",
  //     toggleActions: "play none reset reverse",
  //     start: ".pin3",
  //     markers: true
  //   },
  //   // y: '-440%',
  //   x: '-20%',
  //   ease: "smooth",
  //   duration: 2,
  //   zIndex: 10,
  //   rotate:'10',
  //   position:'sticky',

  //   onComplete: function() {
  //     gsap.to(".triangle .huit", {
  //       scrollTrigger: {
  //         trigger: ".gauche2",
  //         toggleActions: "play none reset reverse",
  //         markers: true
  //       },
  //       x: '-5%',
  //       ease: "smooth",
  //       duration: 2,
  //       delay: 0.5,
  //       position:'sticky',
  //     });

  //     gsap.to(".gauche2", {
  //       ease: "smooth",
  //       toggleActions: "restart pause reset reverse",
  //       pin: '.pin3',
  //       x: 0,

  //     });

  //     gsap.to(".triangle .sept", {
  //       scrollTrigger: {
  //         trigger: ".gauche2",
  //         toggleActions: "play none reset reverse",
  //         markers: true
  //       },
  //       y: '-5%',
  //       x:'-4%',
  //       ease: "smooth",
  //       duration: 2,
  //       delay: 0.5,
  //       position:'sticky',

  //       // onComplete: () => { gsap.to(".triangle", {opacity:'0'} )}
  //     });

  //   }
  // });

  // const show4 = gsap.timeline({
  //   paused: true, // L'animation démarre en pause
  //   scrollTrigger:{
  //     trigger:'.container__5',
  //     start:'top top',
  //     onEnter: () => show4.play(),
  //     onLeaveBack: () => show4.reverse(), // Inverse la timeline lorsque container__3 est quitté en faisant défiler vers le haut


  //   }
  // });

  //Utilise GSAP pour animer l'opacité des éléments jusqu'à 0
  // gsap.to('.triangle', {

  //   opacity: 0,          // Opacité cible

  //   scrollTrigger:{
  //         trigger:'.section-next',
  //         start:'100VH top',
  //   }

  // });


  // show4.to(elementsToAnimate3,{

  //   opacity:1,
  //   duration: 0.5,       // Durée de l'animation en secondes
  //   ease: 'power1.inOut', // Courbe d'animation (facultatif, tu peux ajuster cela)
  //   stagger: 0.1,        // Délai entre chaque élément
  // })


  // gsap.to(".triangle .quatre", {
  //   scrollTrigger: {
  //     trigger: ".container__5",
  //     toggleActions: "play none reset reverse",
  //     start: ".pin3",
  //     markers: true
  //   },
  //   // y: '-440%',
  //   x: '-20%',
  //   ease: "smooth",
  //   duration: 2,
  //   zIndex: 10,
  //   rotate:'10',

  //   onComplete: function() {
  //     gsap.to(".container__5 .huit", {
  //       scrollTrigger: {
  //         trigger: ".triangle h2",
  //         toggleActions: "play none reset reverse",
  //         markers: true
  //       },
  //       x: '-5%',
  //       ease: "smooth",
  //       duration: 2,
  //       delay: 0.5
  //     });

  //     gsap.to(".container__5 h2", {
  //       ease: "smooth",
  //       toggleActions: "restart pause reset reverse",
  //       pin: '.pin3',
  //       x: 0,

  //     });

  //     gsap.to(".triangle .sept", {
  //       scrollTrigger: {
  //         trigger: ".container__5 h2",
  //         toggleActions: "play none reset reverse",
  //         markers: true
  //       },
  //       y: '-5%',
  //       x:'-4%',
  //       ease: "smooth",
  //       duration: 2,
  //       delay: 0.5,

  //       // onComplete: () => { gsap.to(".triangle", {opacity:'0'} )}
  //     });

  //   }
  // });

  
 
 

});








/* ////////////// */
/* MOBILE VERSION */
/* ////////////// */
/* MOBILE VERSION */
/* ////////////// */


match.add("(max-width: 768px)", () => {

  // gsap.from(".triangle",{

  //   x:'0',
  //   y:'0',
  //   // opacity:1,
  //   // onComplete: action

  // })

  // function action(){

  //   gsap.to(".triangle", {
  //     scrollTrigger: {
  //       trigger: ".container__2",
  //       start: "center center",
  //       toggleActions: "restart none reset reverse",
  //     },
  //     y: "73vh",
  //     x:"-10%",
  //     ease: "smooth",
  //     duration: 1.5,
  //     scale:1.5
  //   });

  //   gsap.to(".un,.deux, .trois, .quatre, .cinq, .six, .huit", {
  //     scrollTrigger: {
  //       trigger: ".container__1",
  //       start: "center center",
  //       toggleActions: "restart none reset reverse",
  //     },
  //     opacity:0
  //   });

  //   gsap.to(".neuf, .sept", {
  //     scrollTrigger: {
  //       trigger: ".container__1",
  //       start: "center center",
  //       toggleActions: "restart none reset reverse",
  //       pin:".container__2 .title__h3"
  //     },
  //     y:"30vh",
  //     ease: "smooth",
  //     duration: 1.5,
  //     rotate:-90,
  //     onComplete: action2
  //   });


  // }
});


// function action2(){

//   gsap.to(".triangle", {
//     scrollTrigger: {
//       trigger: ".container__3",
//       start: "bottom center ",
//       toggleActions: "restart none reset reverse",
//     },
//     y: "273vh",

//     ease: "smooth",
//     duration: 1.5,
//     scale:1.5,
//     onComplete: action3
//   });
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


//}

// function action3(){

//   gsap.to(".triangle",{
//     scrollTrigger: {
//       trigger:".container__4",
//       start:"bottom center",
//       pin:true,
//       toggleActions:"restart none reset reverse"
//     },

//     y:"400vh",
//     ease:"smooth",
//     duration:1.5
//   })
// }
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


// /*
// gsap.to(".triangle .un", {
//   scrollTrigger: {
//       trigger: ".container__2",


//   },
//   x:'-235%',
//   y:'-10%',
//   ease:"smooth",
//   duration:2,
//   rotate:90,
//   position:"sticky"
// });

// gsap.to(".triangle .deux", {
//   scrollTrigger: {
//       trigger: ".container__2",

//   },
//   x:'-195%',
//   y:'-125%',
//   ease:"smooth",
//   duration:2,
//   rotate:90,
//   position:"sticky"
// });

// gsap.to(".triangle .trois", {
//   scrollTrigger: {
//       trigger: ".container__2",


//   },
//   x:'-381%',
//   y:'-100%',
//   ease:"smooth",
//   duration:2,
//   rotate:30,
//   position:"sticky"
// });

// gsap.to(".triangle .quatre", {
//   scrollTrigger: {
//       trigger: ".container__2",


//   },
//   x:'-480%',
//   y:'-15%',
//   ease:"smooth",
//   duration:2,
//   rotate:270,
//   position:"sticky"
// });

// gsap.to(".triangle .cinq", {
//   scrollTrigger: {
//       trigger: ".container__2",


//   },
//   x:'-530%',
//   y:'-77%',
//   ease:"smooth",
//   duration:2,
//   rotate:270,
//   position:"sticky"
// });

// gsap.to(".triangle .six", {
//   scrollTrigger: {
//       trigger: ".container__2",


//   },
//   x:'-194%',
//   y:'-83%',
//   ease:"smooth",
//   duration:2,
//   rotate:90,
//   position:"sticky"
// });

// gsap.to(".triangle .sept", {
//   scrollTrigger: {
//       trigger: ".container__2",


//   },
//   x:'-428%',
//   y:'-29%',
//   ease:"smooth",
//   duration:2,
//   rotate:270,
//   position:"sticky"
// });

// gsap.to(".triangle .huit", {
//   scrollTrigger: {
//       trigger: ".container__2",


//   },
//   x:'-300%',
//   y:'120%',
//   ease:"smooth",
//   duration:2,
//   rotate:90,
//   position:"sticky"
// });

// gsap.to(".triangle .neuf", {
//   scrollTrigger: {
//       trigger: ".container__2",


//   },
//   x:'220%',
//   y:'85%',
//   ease:"smooth",
//   duration:2,
//   rotate:90,
//   position:"sticky"
// });
// */