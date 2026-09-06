/* =========================================================
   EXPERIENCE DOCUMENT MODAL
========================================================= */


/* =========================================================
   EXPERIENCE DOCUMENT DATA
========================================================= */

const experienceDocuments = {

    /* =====================================================
       FREELANCE
    ===================================================== */

    "freelance-coe": {

        type: "COE",

        title: "Certificate of Employment",

        label: "FREELANCE DEVELOPER",

        description:
            "Certificate of employment and professional experience documentation for my freelance development work.",

        fileName:
            "Freelance-Developer-COE.pdf",

        fileType:
            "Certificate of Employment",

        icon:
            "bx-file",

        url:
            "documents/freelance/coe.pdf"

    },


    "freelance-docs": {

        type: "DOCUMENTATION",

        title: "Freelance Development Documentation",

        label: "FREELANCE DEVELOPER",

        description:
            "Documentation related to projects, development work, technical activities, and deliverables completed during my freelance experience.",

        fileName:
            "Freelance-Developer-Documentation.pdf",

        fileType:
            "Project Documentation",

        icon:
            "bx-folder-open",

        url:
            "documents/freelance/documentation.pdf"

    },


    /* =====================================================
       COLLEGE INSTRUCTOR
    ===================================================== */

    "instructor-coe": {

        type: "COE",

        title: "Certificate of Employment",

        label: "COLLEGE INSTRUCTOR",

        description:
            "Certificate of employment documenting my professional experience as a College Instructor at the Technological University of the Philippines – Manila Campus.",

        fileName:
            "College-Instructor-COE.pdf",

        fileType:
            "Certificate of Employment",

        icon:
            "bx-file",

        url:
            "documents/instructor/coe.pdf"

    },


    "instructor-docs": {

        type: "DOCUMENTATION",

        title: "Teaching & Course Documentation",

        label: "COLLEGE INSTRUCTOR",

        description:
            "Documentation related to teaching activities, course development, Web Application Development, Mobile Application Development, and student mentoring.",

        fileName:
            "College-Instructor-Documentation.pdf",

        fileType:
            "Professional Documentation",

        icon:
            "bx-folder-open",

        url:
            "documents/instructor/documentation.pdf"

    },


    /* =====================================================
       UNIVERSITY SYSTEMS DEVELOPER
    ===================================================== */

    "systems-developer-coe": {

        type: "COE",

        title: "Certificate of Employment",

        label: "UNIVERSITY SYSTEMS DEVELOPER",

        description:
            "Certificate of employment documenting my experience as a Contractual Programmer and University Systems Developer at the Technological University of the Philippines – Manila Campus.",

        fileName:
            "University-Systems-Developer-COE.pdf",

        fileType:
            "Certificate of Employment",

        icon:
            "bx-file",

        url:
            "documents/university/coe.pdf"

    },


    "systems-developer-docs": {

        type: "DOCUMENTATION",

        title: "University Systems Documentation",

        label: "UNIVERSITY SYSTEMS DEVELOPER",

        description:
            "Technical and project documentation related to university systems development, including TUP-SDRMS and TUP-SWIFT.",

        fileName:
            "University-Systems-Documentation.pdf",

        fileType:
            "Technical Documentation",

        icon:
            "bx-folder-open",

        url:
            "documents/university/documentation.pdf"

    },


    /* =====================================================
       AUDISA
    ===================================================== */

    "audisa-coe": {

        type: "COE",

        title: "Certificate of Employment",

        label: "AUDISA",

        description:
            "Certificate of employment documenting my professional experience and current role at Audisa.",

        fileName:
            "Audisa-COE.pdf",

        fileType:
            "Certificate of Employment",

        icon:
            "bx-file",

        url:
            "documents/audisa/coe.pdf"

    },


    "audisa-docs": {

        type: "DOCUMENTATION",

        title: "Audisa Development Documentation",

        label: "AUDISA",

        description:
            "Selected documentation related to full-stack engineering, business systems, development workflows, and applications maintained at Audisa.",

        fileName:
            "Audisa-Documentation.pdf",

        fileType:
            "Professional Documentation",

        icon:
            "bx-folder-open",

        url:
            "documents/audisa/documentation.pdf"

    }

};


/* =========================================================
   OPEN EXPERIENCE MODAL
========================================================= */

function openExperienceModal(documentId) {

    console.log(
        "Opening experience document:",
        documentId
    );


    const documentData =
        experienceDocuments[documentId];


    /* =====================================================
       CHECK DOCUMENT
    ===================================================== */

    if (!documentData) {

        console.error(
            "Experience document not found:",
            documentId
        );

        return;

    }


    /* =====================================================
       GET MODAL ELEMENTS
    ===================================================== */

    const modal =
        document.getElementById("experienceModal");

    const label =
        document.getElementById("experienceModalLabel");

    const title =
        document.getElementById("experienceModalTitle");

    const description =
        document.getElementById(
            "experienceModalDescription"
        );

    const fileName =
        document.getElementById(
            "experienceModalFileName"
        );

    const fileType =
        document.getElementById(
            "experienceModalFileType"
        );

    const icon =
        document.getElementById(
            "experienceModalIcon"
        );

    const openButton =
        document.getElementById(
            "experienceModalOpen"
        );


    /* =====================================================
       CHECK MODAL HTML
    ===================================================== */

    if (
        !modal ||
        !label ||
        !title ||
        !description ||
        !fileName ||
        !fileType ||
        !icon ||
        !openButton
    ) {

        console.error(
            "Experience modal HTML is missing required elements."
        );

        return;

    }


    /* =====================================================
       INSERT DATA
    ===================================================== */

    label.textContent =
        documentData.type;


    title.textContent =
        documentData.title;


    description.textContent =
        documentData.description;


    fileName.textContent =
        documentData.fileName;


    fileType.textContent =
        documentData.fileType;


    /* =====================================================
       ICON
    ===================================================== */

    icon.className =
        "bx " + documentData.icon;


    /* =====================================================
       DOCUMENT LINK
    ===================================================== */

    openButton.href =
        documentData.url;


    /* =====================================================
       SHOW MODAL
    ===================================================== */

    modal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =========================================================
   CLOSE EXPERIENCE MODAL
========================================================= */

function closeExperienceModal() {

    const modal =
        document.getElementById("experienceModal");


    if (!modal) {

        return;

    }


    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


/* =========================================================
   CLOSE WHEN CLICKING ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeExperienceModal();

        }

    }
);