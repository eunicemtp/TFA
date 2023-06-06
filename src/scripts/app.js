'use strict'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { PixiPlugin } from "gsap/dist/PixiPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, PixiPlugin);

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
