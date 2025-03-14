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



document.addEventListener("DOMContentLoaded", function () {
    const arrowBtns = document.querySelectorAll(".arrow__btn");
    let firstFont = true;

    arrowBtns.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            event.preventDefault(); 

            // Select the typography text container
            const typographyText = document.querySelector(".manrope__type");
            const fontName = document.querySelector(".font__section p:nth-of-type(1)"); // Manrope text

            if (firstFont) {
                typographyText.innerHTML = `
                    <p>Serif Font Example</p>
                    <p>1234567890</p>
                `;
                fontName.textContent = "Serif Font"; // Change font name
                btn.innerHTML = `<i class='bx bx-left-arrow-alt'></i>`; // Change icon
            } else {
                typographyText.innerHTML = `
                    <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                    <p>1234567890</p>
                `;
                fontName.textContent = "Manrope"; // Restore original font
                btn.innerHTML = `<i class='bx bx-right-arrow-alt'></i>`; // Restore icon
            }

            firstFont = !firstFont; // Toggle state
        });
    });
});
