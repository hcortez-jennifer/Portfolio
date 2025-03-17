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