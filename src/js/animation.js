// HERO ANIMATION
gsap.timeline()
    .from(".navbar-brand, .nav-item, .navbar-toggler", {
        opacity: 0,
        stagger: {
            amount: 1
        }
    }, "1")
    .from(".hero__container, .hero__h1, .hero__info, .service__info, .archive__container, .archive__content__grid", {
        y: 50,
        opacity: 0,
        stagger: {
            amount: 1
        }
    }, "+=1")