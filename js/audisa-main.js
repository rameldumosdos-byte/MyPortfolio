/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileClose =
    document.getElementById("mobileClose");


menuButton.addEventListener(
    "click",
    () => {

        mobileMenu.classList.add("open");

        document.body.style.overflow =
            "hidden";

    }
);


mobileClose.addEventListener(
    "click",
    () => {

        mobileMenu.classList.remove("open");

        document.body.style.overflow =
            "";

    }
);



/* =========================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================================= */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            mobileMenu.classList.remove(
                "open"
            );

            document.body.style.overflow =
                "";

        }
    );

});



/* =========================================================
   PRODUCT ROW INTERACTION
========================================================= */

const productRows =
    document.querySelectorAll(".product-row");


productRows.forEach(row => {

    row.addEventListener(
        "click",
        () => {

            const name =
                row.querySelector(
                    ".product-name h3"
                );

            if (!name) return;

            console.log(
                "Selected product:",
                name.textContent.trim()
            );

        }
    );

});



/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".balance-card, " +
        ".product-row, " +
        ".download-card, " +
        ".benefit, " +
        ".partner-content, " +
        ".sound-content"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =========================================================
   PRODUCT ARROWS
========================================================= */

const productButtons =
    document.querySelectorAll(
        ".product-arrow"
    );


productButtons.forEach(button => {

    button.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const row =
                button.closest(
                    ".product-row"
                );

            const title =
                row.querySelector(
                    ".product-name h3"
                );

            if (!title) return;

            alert(
                "Opening " +
                title.textContent.trim()
            );

        }
    );

});



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            mobileMenu.classList.remove(
                "open"
            );

            document.body.style.overflow =
                "";

        }

    }
);