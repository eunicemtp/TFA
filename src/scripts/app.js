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



const time = gsap.timeline()


/* /////////// */
/* CONTAINER 2 */
/* ////////// */


const scenes = gsap.utils.toArray(".container__2");

// maybe use dymanic height for pin/scroll ends?
const height = (scenes.length - 1) * 400 + "%";

// Scenes Timeline
const pinTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container__2",
    pin: ".fixe",
    start: "center center",
    // end: `+=${height}`,
    end:"+=700vh",
    scrub: 0.75
  },
});

 gsap.from(".gauche",{
  x:"-200%",
  duration:3,
  delay:6,
  opacity:0
})
gsap.from(".triangle",{
  x:'0',
  y:'0',


  onComplete: function(){

    gsap.to(".triangle", {
      scrollTrigger: {
          trigger: ".container__2",
          toggleActions: "restart pause reverse reverse",
          start: "20vh center",
          pin: ".pin",
          end:"50vh"
          // markers: true
          
      },
      x:'-30%',
      y:'-18%',
      ease:"smooth",
      duration:2,
      rotate:90,
      onComplete: function(){

        // gsap.from(".gauche",)

        gsap.to(".triangle .neuf", {
      
          scrollTrigger: {
            trigger: ".container__2",
            toggleActions: "play none reset reverse ",
            start:".pin",
            markers: true,
        
         
            
          },
          y:'-440%',
          ease:"smooth",
          duration:2,
          
          zIndex:10,
          
          onComplete: function(){

            gsap.to(".triangle .huit", {
          
              scrollTrigger: {
                trigger: ".gauche",
                toggleActions: "play none reset reverse ",
                
                markers: true
                
              },
              x:'102%',
              ease:"smooth",
              duration:2,
              delay:0.5

            });

            gsap.to(".gauche", {
              ease:"smooth",
              toggleActions: "restart pause reset reverse",
              // delay:30.5,
              pin:'.pin',
              // duration:5,
              x:0

            
            });


          }
          
        
          
        });
      
      }
    });

  }
})


/* /////////// */
/* CONTAINER 3 */
/* ////////// */
gsap.to(".triangle", {
  scrollTrigger: {
      trigger: ".container__3",
      toggleActions: "restart pause reverse reverse",
      start: "20vh center",
      pin: ".pin2",
      end:"50vh"
      // markers: true
      
  },
});
gsap.to(".triangle .neuf", {
      
  scrollTrigger: {
    trigger: ".container__3",
    toggleActions: "play none reset reverse ",
    start:".title__h3",
    markers: true,
  },
  y:'0%',
  ease:"smooth",
  duration:1.5
  
});


gsap.from(".triangle .huit", {
  
  scrollTrigger: {
    trigger: ".container__3",
    toggleActions: "play none reset reverse ",
    start:".title__h3",
    markers: true
    
  },
  x:'0%',
  ease:"smooth",
  duration:1.5,
  

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