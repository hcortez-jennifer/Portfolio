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


// WORKS ANIMATION
function animateWorks() {
    let scrollAnimation = gsap.to(".projects__card__container", {
        y: () => -(
            document.querySelector(".projects__card__container").scrollHeight -
            document.querySelector(".projects__card__container").clientHeight
        ),
        ease: "none",
        scrollTrigger: {
            trigger: ".projects",
            start: "top top",
            end: "bottom bottom",
            pin: ".projects__info",
            scrub: 1,
        }
    });

    gsap.utils.toArray(".project__card").forEach((card) => {
        gsap.fromTo(
            card,
            { opacity: 0, y: 100, scale: 1 }, 
            {
                opacity: 1,
                y: 0,
                scale: 1, 
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            }
        );
    });

    ScrollTrigger.matchMedia({
        "(max-width: 991px)": function () {
            scrollAnimation.kill(); 
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
            gsap.set(".projects__info", { position: "relative" }); 
        },
        "(min-width: 992px)": function () {
            gsap.set(".projects__info", { position: "sticky", top: "0" }); 
        }
    });
}

document.addEventListener("DOMContentLoaded", animateWorks);