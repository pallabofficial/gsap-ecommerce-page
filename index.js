console.log("hello");
let tl = gsap.timeline();

tl

    .from("#navbar", {
        opacity:0,
        y:-50,
        duration:1,
        ease:Power1.easeInOut,
        stagger:0,
    });
   gsap.from("#banner-img-1", {
        opacity:0,
        x:-500,
        duration:1,
        ease:Power1.easeInOut,
        delay:1.1,
    });
    gsap.from("#banner-img-2", {
        opacity:0,
        x:500,
        duration:1,
        ease:Power1.easeInOut,
        delay:1.1,
    });
    gsap.from("#banner-img-3", {
        opacity:0,
        x:-500,
        duration:1,
        ease:Power1.easeInOut,
        delay:1.1,
    });
    gsap.from("#banner-img-4", {
        opacity:0,
        x:500,
        duration:1,
        ease:Power1.easeInOut,
        delay:1.1,
    });
    gsap.from("#banner-title, #banner-btn, #banner-drop-down",{
        scale:1.8,
        delay:2.1,
        opacity:0,
        duration:1,
        ease:Power1.easeInOut,
    });
    
    
   

