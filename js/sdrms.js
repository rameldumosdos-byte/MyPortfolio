/* =========================================================
   LOGIN MODAL
========================================================= */

const loginButton =
    document.getElementById("loginButton");

const mobileLogin =
    document.getElementById("mobileLogin");

const requestButton =
    document.getElementById("requestButton");

const loginModal =
    document.getElementById("loginModal");

const closeModal =
    document.getElementById("closeModal");


/* =========================================================
   OPEN MODAL
========================================================= */

function openLogin() {

    loginModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeLogin() {

    loginModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================================
   EVENTS
========================================================= */

loginButton.addEventListener(
    "click",
    openLogin
);


mobileLogin.addEventListener(
    "click",
    function () {

        openLogin();

        mobileNavigation.classList.remove("open");

    }
);


requestButton.addEventListener(
    "click",
    openLogin
);


closeModal.addEventListener(
    "click",
    closeLogin
);


/* =========================================================
   CLOSE MODAL WHEN CLICKING BACKGROUND
========================================================= */

loginModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === loginModal
        ) {

            closeLogin();

        }

    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeLogin();

        }

    }
);


/* =========================================================
   LOGIN FORM
========================================================= */

const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;


        if (
            username.trim() === "" ||
            password.trim() === ""
        ) {

            alert(
                "Please enter your username and password."
            );

            return;

        }


        /*
            FRONT-END ONLY

            No actual authentication is performed.
        */

        alert(
            "This is a front-end demo. " +
            "Connect this form to your backend login system."
        );

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileToggle =
    document.getElementById("mobileToggle");

const mobileNavigation =
    document.getElementById("mobileNavigation");


mobileToggle.addEventListener(
    "click",
    function () {

        mobileNavigation.classList.toggle("open");

    }
);


/* =========================================================
   CLOSE MOBILE MENU AFTER NAVIGATION
========================================================= */

const mobileLinks =
    mobileNavigation.querySelectorAll("a");


mobileLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileNavigation.classList.remove(
                    "open"
                );

            }
        );

    }
);


/* =========================================================
   CONTACT BUTTON
========================================================= */

const contactButton =
    document.getElementById("contactButton");


contactButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "#contact";

    }
);


/* =========================================================
   SERVICE BUTTONS
========================================================= */

const serviceButtons =
    document.querySelectorAll(
        ".service-card button"
    );


serviceButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                openLogin();

            }
        );

    }
);


/* =========================================================
   NAVIGATION ACTIVE STATE
========================================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );

                this.classList.add(
                    "active"
                );

            }
        );

    }
);