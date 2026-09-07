/* =========================================================
   PROJECT MODAL
========================================================= */

const projectModal =
    document.getElementById("projectModal");


const projectModalTitle =
    document.getElementById("projectModalTitle");


const projectModalDescription =
    document.getElementById("projectModalDescription");


const projectModalImage =
    document.getElementById("projectModalImage");


const projectModalLabel =
    document.getElementById("projectModalLabel");


const projectModalTechnologies =
    document.getElementById("projectModalTechnologies");


const projectModalStatus =
    document.getElementById("projectModalStatus");


const projectModalDisclosure =
    document.getElementById("projectModalDisclosure");


const projectModalRepository =
    document.getElementById("projectModalRepository");


const projectModalClone =
    document.getElementById("projectModalClone");


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {


    /* =====================================================
       TUP-SWIFT
    ===================================================== */

    "tup-swift": {

        label: "Education System",

        title: "TUP-SWIFT",

        image: "images/tup-swift.png",

        description:
            "TUP-SWIFT is a university-focused web application designed to support digital academic workflows and streamline the receiving, processing, and tracking of documents across administrative offices within the Technological University of the Philippines.",

        technologies: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Chart.js",
            "API's",
            "Prototype / Device / Tracker"
        ],

        status:
            "Project Showcase Coming Soon",

        disclosure:
            "TUP-SWIFT includes role-based access for Faculty and Admin users. Administrators have full access to dashboard monitoring, workflow configuration, office management, and transaction tracking, while Faculty users can create and monitor transactions based on workflows configured by administrators.",

        repository: "https://github.com/rameldumosdos-byte/tup-swift-demo",

        clone: "pages/tup-swift.html"

    },


    /* =====================================================
       TLO-ITSO
    ===================================================== */

    "tlo-itso": {

        label: "Student Intellectual Property Application System",

        title: "TLO-ITSO",

        image: "images/tlo-itso.png",

        description:
            "TLO-ITSO is an implemented online university application system used by TUP students to submit thesis-related intellectual property applications through the Technology Licensing Office and Intellectual Property and Technology Support Office.",

        technologies: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Chart.js",
            "APIs"
        ],

        status:
            "Live & Currently in Use",

        disclosure:
            "TLO-ITSO is a completed and actively used university system that provides TUP students with an online platform for submitting intellectual property applications related to their thesis requirements, including Copyright, Patent, and Industrial Design applications. Administrators can review and manage applications, monitor application progress, and oversee the application workflow through the administrative interface.",

        repository: "#",

        clone: "pages/tlo-itso.html"

    },


    /* =====================================================
       TUP-SDRMS
    ===================================================== */

    "tup-sdrms": {

        label: "Student Request Management System",

        title: "TUP-SDRMS",

        image: "images/sdrms.png",

        description:
            "TUP-SDRMS (Student Document Request Management System) is an online request management system designed to make requesting official student documents easier, more organized, and more convenient.",

        technologies: [
            "Laravel",
            "PHP",
            "React"
        ],

        status:
            "Live Production System",

        disclosure:
            "The original TUP-SDRMS is restricted to authorized TUP users. A separate clone was created for portfolio purposes, allowing visitors to explore the system's interface and functionality without accessing the production environment.",

        repository: "#",

        clone: "pages/sdrms.html"

    },


    /* =====================================================
       AUDISA ADMIN & USER PORTAL
    ===================================================== */

    "audisa-portal": {

        label: "Business Management Platform",

        title: "Audisa Admin & User Portal",

        image: "images/audisa-main.png",

        description:
            "A business management platform designed to support administration, user management, quotations, contacts, file management, reporting, and day-to-day operational workflows.",

        technologies: [
            "PHP",
            "MySQL",
            "JavaScript",
            "API's",
            "Chart.js"
        ],

        status:
            "Private Business System",

        disclosure:
            "This project contains business-specific functionality, operational workflows, and information. Because of its business nature, the original system and its internal functionality are not publicly available.",

        repository: "https://github.com/rameldumosdos-byte/audisa-system-documentation",

        clone: "pages/audisa.html"

    },


    /* =====================================================
       AUDISA LANDING PAGE
    ===================================================== */

    "audisa-landing": {

        label: "Company Web Platform",

        title: "Audisa Landing Page",

        image: "images/audisa.jpg",

        description:
            "Originally built with WordPress and later transitioned to Framer for a more advanced web experience. The current version is fully customized and database-driven, allowing products to be automatically fetched and displayed on the landing page whenever new products are added.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Database Integration"
        ],

        status:
            "Custom Database-Driven Platform",

        disclosure:
            "The current landing page uses a customized system connected to the business product database. This allows newly added products to be automatically fetched and displayed on the website without manually updating the page.",

        repository: "#",

        clone: "pages/audisa-main.html"

    }

};


/* =========================================================
   OPEN PROJECT MODAL
========================================================= */

function openProjectModal(project) {

    const selectedProject =
        projects[project];


    /* =====================================================
       PROJECT VALIDATION
    ===================================================== */

    if (!selectedProject) {

        console.error(
            "Project not found:",
            project
        );

        return;
    }


    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    projectModalLabel.textContent =
        selectedProject.label;


    projectModalTitle.textContent =
        selectedProject.title;


    projectModalDescription.textContent =
        selectedProject.description;


    /* =====================================================
       PROJECT IMAGE
    ===================================================== */

    projectModalImage.src =
        selectedProject.image;


    projectModalImage.alt =
        selectedProject.title +
        " project preview";


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    projectModalTechnologies.innerHTML = "";


    selectedProject.technologies.forEach(
        technology => {

            const tag =
                document.createElement("span");

            tag.textContent =
                technology;

            projectModalTechnologies.appendChild(
                tag
            );

        }
    );


    /* =====================================================
       STATUS
    ===================================================== */

    projectModalStatus.textContent =
        selectedProject.status;


    /* =====================================================
       DISCLOSURE
    ===================================================== */

    projectModalDisclosure.textContent =
        selectedProject.disclosure;


    /* =====================================================
       REPOSITORY
    ===================================================== */

    projectModalRepository.href =
        selectedProject.repository;


    /* =====================================================
       CLONE / DEMO
    ===================================================== */

    projectModalClone.href =
        selectedProject.clone;


    /* =====================================================
       OPEN MODAL
    ===================================================== */

    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE PROJECT MODAL
========================================================= */

function closeProjectModal() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================================
   CLOSE WHEN CLICKING OUTSIDE MODAL
========================================================= */

projectModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === projectModal
        ) {

            closeProjectModal();

        }

    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeProjectModal();

        }

    }
);


/* =========================================================
   DISCLOSURE CHEVRON
========================================================= */
function toggleProjectDisclosure() {

    const disclosure = document.querySelector(".project-disclosure");

    if (!disclosure) {
        return;
    }

    disclosure.classList.toggle("open");
}
