const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

var tl = gsap.timeline();

tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration: 0
})

tl.to("#page1",{
    y:"2px",
    duration: 1,
    delay: 0.4
})
tl.to("#page1",{
    y:"0vh",
    duration: 1,
    rotate: -720,
    scale:1
})

