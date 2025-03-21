// NAV MENU ICON
document.addEventListener("DOMContentLoaded", () => {
    const navBarToggler = document.querySelector(".navbar-toggler");
    const navBarMenu = document.querySelector(".navbar__menu");
    const menuIcon = navBarToggler.querySelector(".menu__icon");

    navBarToggler.addEventListener("click", () => {
        const isOpen = navBarMenu.classList.contains("show");
        navBarMenu.classList.toggle("show");
        
        menuIcon.classList.toggle("bx-menu-alt-right", isOpen);
        menuIcon.classList.toggle("bx-x", !isOpen);
    });

    document.addEventListener("click", (e) => {
        if (!navBarMenu.contains(e.target) && !navBarToggler.contains(e.target)) {
            navBarMenu.classList.remove("show");
            menuIcon.classList.add("bx-menu-alt-right");
            menuIcon.classList.remove("bx-x");
        }
    });
});


// CIRCULAR TEXT
document.querySelectorAll(".circular__text p").forEach((circularText) => {
    circularText.innerHTML = circularText.innerText
        .split("")
        .map((char, i) => `<span style="transform:rotate(${i * 10}deg)">${char}</span>`)
        .join("");
});


// TYPOGRAPHY CHNAGE (PROJECT PAGE)
document.addEventListener("DOMContentLoaded", () => {
    const fonts = {
        "auclo.html": [
            { name: "Manrope", cssClass: "manrope__type", fontFamily: "'Manrope', sans-serif", label: "Primary type", role: "Body" },
            { name: "Ibarra real nova", cssClass: "ibarra__type", fontFamily: "'Ibarra Real Nova', serif", label: "Secondary type", role: "Header and title" }
        ],
        "lacatrina.html": [
            { name: "Montserrat", cssClass: "montserrat__type", fontFamily: "'Montserrat', sans-serif", label: "Primary type", role: "Body, header, and title" },
            { name: "Chocolate", cssClass: "chocolate__type", fontFamily: "'Chocolate', cursive", label: "Secondary type", role: "Subtitle"}
        ],
        "default": [
            { name: "Arial", cssClass: "arial__type", fontFamily: "'Arial', sans-serif", label: "Primary type", role: "Body" },
            { name: "Georgia", cssClass: "georgia__type", fontFamily: "'Georgia', serif", label: "Secondary type", role: "Titles" }
        ]
    };

    let pageName = window.location.pathname.split("/").pop();
    let currentFonts = fonts[pageName] || fonts["default"]; 
    let currentFontIndex = 0;

    const fontName = document.querySelector(".font__name");
    const fontBody = document.querySelector(".font__body");
    const fontLabel = document.querySelector(".font__label"); 
    const fontRole = document.querySelector(".font__role"); 
    const arrowBtns = document.querySelectorAll(".typography__arrow__btn .arrow__img");

    function updateTypography() {
        const font = currentFonts[currentFontIndex];

        fontBody.style.fontFamily = font.fontFamily;
        fontName.textContent = font.name;
        fontLabel.textContent = font.label;
        fontRole.textContent = font.role;

        arrowBtns.forEach((arrow) => {
            arrow.src = currentFontIndex === 0 
                ? "../../assets/icon/right__arrow.png" 
                : "../../assets/icon/left__arrow.png";
        });
    }

    document.querySelectorAll(".typography__arrow__btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            currentFontIndex = currentFontIndex === 0 ? 1 : 0;
            updateTypography();
        });
    });

    updateTypography();
});