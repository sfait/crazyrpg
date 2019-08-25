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

//     const slideLeft = {
//         distance: "150%",
//         origin: "left",
//         opacity: null
//     };
//
//     const slideRight = {
//         distance: "150%",
//         origin: "right",
//         opacity: null
//     };
//
//     ScrollReveal().reveal(".main-header", { delay: 200 });
//     ScrollReveal().reveal(".second-header", { delay: 300 });
//     ScrollReveal().reveal(".story-header, .story-fourth-header, .story-paragraph, .about-us-box", slideLeft);
// }

// function showAnimations() {
//     const mobile = window.matchMedia("screen and (min-width: 750px)");
//
//     if (mobile.matches) {
//         useScrollReveal();
//     }
//
//     mobile.addListener( function(mobile) {
//         if (mobile.matches) {
//             useScrollReveal();
//         }
//     });
// };

const init = () => {
    showPhoto();
    // showAnimations();
}

document.addEventListener("DOMContentLoaded", init);
