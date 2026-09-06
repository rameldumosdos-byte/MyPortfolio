   /* =========================================================
       MOBILE SIDEBAR
    ========================================================= */

    const mobileMenu = document.getElementById("mobileMenu");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    mobileMenu.addEventListener("click", function () {

        sidebar.classList.toggle("open");
        overlay.classList.toggle("open");

    });

    overlay.addEventListener("click", function () {

        sidebar.classList.remove("open");
        overlay.classList.remove("open");

    });


    /* =========================================================
       SIDEBAR NAVIGATION
    ========================================================= */

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {

        item.addEventListener("click", function () {

            navItems.forEach(nav => {
                nav.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* =========================================================
       SEARCH TRANSACTIONS
    ========================================================= */

    const searchInput =
        document.getElementById("searchInput");

    searchInput.addEventListener("input", function () {

        const searchValue =
            this.value.toLowerCase();

        const rows =
            document.querySelectorAll("#transactionTable tbody tr");

        rows.forEach(row => {

            const text =
                row.innerText.toLowerCase();

            if (text.includes(searchValue)) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });


    /* =========================================================
       MODALS
    ========================================================= */

    function openModal(id) {

        document
            .getElementById(id)
            .classList.add("show");

    }


    function closeModal(id) {

        document
            .getElementById(id)
            .classList.remove("show");

    }


    document.querySelectorAll(".modal").forEach(modal => {

        modal.addEventListener("click", function(event) {

            if (event.target === modal) {

                modal.classList.remove("show");

            }

        });

    });


    /* =========================================================
       CREATE WORKFLOW
    ========================================================= */

    function saveWorkflow() {

        alert(
            "Workflow created successfully.\n\n" +
            "In the real TUP-SWIFT system, this would save " +
            "the workflow and its office routing configuration."
        );

        closeModal("workflowModal");

    }


    /* =========================================================
       CREATE TRANSACTION
    ========================================================= */

    function createTransaction() {

        alert(
            "Transaction created successfully.\n\n" +
            "A unique TUP-SWIFT transaction number would " +
            "be generated and the workflow would begin."
        );

        closeModal("transactionModal");

    }


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            document
                .querySelectorAll(".modal")
                .forEach(modal => {

                    modal.classList.remove("show");

                });

        }

    });