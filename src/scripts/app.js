'use strict'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { PixiPlugin } from "gsap/dist/PixiPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, PixiPlugin);
gsap.registerPlugin(ScrollTrigger);

gsap.set('.section', { autoAlpha: 0 })

var sections = gsap.utils.toArray('.section');

var sectionTl = gsap.timeline({
  scrollTrigger: { 
    trigger: '#section-gsap',
    pin: '#section-gsap',
    scrub: 0.5,
    start: "top top",
    end: '+=950%',
  },
})


sections.forEach(function(elem,i) {
  
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