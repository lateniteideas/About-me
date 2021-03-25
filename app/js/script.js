ScrollTrigger.matchMedia({
  // DESKTOP
  "(min-width: 1200px)": function () {
    let rsz = gsap.timeline({
      scrollTrigger: {
        trigger: "#sct2",
        scroller: ".if__mc",
        start: "top bottom=-5px",
        toggleActions: "play none none reverse",
      },
    });
    rsz
      .from(".if", { height: "665", ease: "power3.inOut" })
      .from("#sct2", { autoAlpha: 0, y: "5", ease: "power3.inOut" }, "-=.4");
  },

  // MOBILE & TABLET
  "(max-width: 1199px)": function () {
    gsap.set(".if, #sct2", { clearProps: "all" });
  },

  // ALL
  all: function () {
    let pink = gsap.timeline({
      scrollTrigger: {
        trigger: "#sct2",
        scroller: ".if__mc",
        start: "top center",
        toggleActions: "play complete play reverse",
      },
    });

    let blue = gsap.timeline({
      scrollTrigger: {
        trigger: "#sct3",
        scroller: ".if__mc",
        start: "top bottom",
        toggleActions: "play complete play reverse",
      },
    });

    pink.to(".bg", {
      backgroundColor: "#f5b4b5",
      duration: "0.05",
      ease: Power3.easeOut,
    });
    blue.to(".bg", {
      backgroundColor: "#61c8e2",
      duration: "0.05",
      ease: Power3.easeOut,
    });
  },
});

