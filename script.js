/* =========================================================
   AZKA NIAZ PORTFOLIO
   JAVASCRIPT
   ========================================================= */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 500);

});



/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});



/* CLOSE MENU AFTER CLICK */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            menuBtn.textContent = "☰";

        });

    });



/* ================= TYPING EFFECT ================= */

const typing =
    document.getElementById("typing");


const words = [

    "Frontend Developer",
    "Web Developer",
    "Software Engineering Student",
    "Creative Problem Solver"

];


let wordIndex = 0;

let letterIndex = 0;

let deleting = false;


function typeWriter() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typing.textContent =
            currentWord.substring(
                0,
                letterIndex + 1
            );

        letterIndex++;


        if (
            letterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeWriter,
                1300
            );

            return;

        }

    } else {

        typing.textContent =
            currentWord.substring(
                0,
                letterIndex - 1
            );

        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeWriter,
        deleting ? 45 : 85
    );

}


typeWriter();



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});



/* ================= NAVBAR SCROLL ================= */

const navbar =
    document.getElementById("navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);



/* ================= ACTIVE NAV LINK ================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 200;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >=
                    sectionTop &&
                window.scrollY <
                    sectionTop +
                    sectionHeight
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute(
                    "href"
                ) === `#${current}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);



/* ================= CURRENT YEAR ================= */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();



/* ================= CLOSE MENU OUTSIDE ================= */

document.addEventListener(
    "click",
    event => {

        if (
            !navMenu.contains(
                event.target
            ) &&
            !menuBtn.contains(
                event.target
            )
        ) {

            navMenu.classList.remove(
                "show"
            );

            menuBtn.textContent =
                "☰";

        }

    }
);



/* ================= SMOOTH PROJECT LINKS ================= */

document
    .querySelectorAll(".project-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href === "#" ||
                    !href
                ) {

                    event.preventDefault();

                }

            }
        );

    });



/* ================= CREDENTIAL LINKS ================= */

document
    .querySelectorAll(".credential-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href === "#" ||
                    !href
                ) {

                    event.preventDefault();

                    alert(
                        "Credential link will be added soon."
                    );

                }

            }
        );

    });