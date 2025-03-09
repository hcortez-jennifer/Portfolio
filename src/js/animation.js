// HERO ANIMATION
gsap.timeline()
    .from(".navbar-brand, .nav-item, .navbar-toggler", {
        opacity: 0,
        stagger: {
            amount: 1
        }
    }, "1")
    .from(".hero__container, .hero__h1, .hero__info, .contact__info", {
        y: 50,
        opacity: 0,
        stagger: {
            amount: 1
        }
    })
    .fromTo(".hero__img__container", {
        duration: 2, 
        opacity: 0,
        right: "-200px",
        ease: "bounce.out"
    }, {
        duration: 2, 
        opacity: 1,
        right: 0,
        ease: "bounce.out"
    })
    .fromTo(".arrow__btn", {
        y: 0
    }, {
        y: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    })