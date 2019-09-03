function showHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    const handleClick = () => {
        hamburger.classList.toggle("hamburger-active");
        menu.classList.toggle("menu-active");
    }

    hamburger.addEventListener("click", handleClick);
}

function showPhoto() {
    const photos = document.querySelectorAll(".photo");

    for (let i = 0; i < photos.length; i++) {
        photos[i].addEventListener("click", function() {
            const modal = this.querySelector(".modal");

            this.querySelector(".modal").classList.toggle("show-modal");

            window.addEventListener("click", function(e) {
                if (e.target == modal) {
                    modal.style.display = "none";
                }
            })
        })
    }
}

function useScrollReveal() {
    const slideLeft = {
        distance: "150%",
        origin: "left",
        opacity: null
    };

    const slideRight = {
        distance: "150%",
        origin: "right",
        opacity: null
    };

    ScrollReveal().reveal(".animation-show", { delay: 400 });
    ScrollReveal().reveal(".animation-left", slideLeft);
    ScrollReveal().reveal(".animation-right", slideRight);
}

function showAnimations() {
    const mobile = window.matchMedia("screen and (min-width: 1000px)");

    if (mobile.matches) {
        useScrollReveal();
    }

    mobile.addListener( function(mobile) {
        if (mobile.matches) {
            useScrollReveal();
        }
    });
};

const init = () => {
    showHamburgerMenu();
    showPhoto();
    showAnimations();
}

document.addEventListener("DOMContentLoaded", init);
