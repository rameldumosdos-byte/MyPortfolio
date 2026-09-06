
    /* =========================================================
       MOBILE SIDEBAR
    ========================================================= */

    const mobileMenu =
        document.getElementById("mobileMenu");

    const sidebar =
        document.getElementById("sidebar");

    mobileMenu.addEventListener("click", function () {

        sidebar.classList.toggle("open");

    });



    /* =========================================================
       MENU ACTIVE STATE
    ========================================================= */

    document
        .querySelectorAll(".menu-item")
        .forEach(item => {

            item.addEventListener("click", function (event) {

                event.preventDefault();

                document
                    .querySelectorAll(".menu-item")
                    .forEach(menu => {
                        menu.classList.remove("active");
                    });

                this.classList.add("active");

            });

        });



    /* =========================================================
       CHART
    ========================================================= */

    const chart =
        document.getElementById("applicationChart");

    new Chart(chart, {

        type: "line",

        data: {

            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep"
            ],

            datasets: [

                {
                    label: "Applications",

                    data: [
                        8,
                        12,
                        16,
                        13,
                        19,
                        17,
                        23,
                        21,
                        19
                    ],

                    borderWidth: 2,

                    tension: .4,

                    fill: true,

                    pointRadius: 3,

                    pointHoverRadius: 5
                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    grid: {
                        color: "#eef0f2"
                    },

                    ticks: {
                        font: {
                            size: 9
                        }
                    }

                },

                x: {

                    grid: {
                        display: false
                    },

                    ticks: {
                        font: {
                            size: 9
                        }
                    }

                }

            }

        }

    });



    /* =========================================================
       VIEW APPLICATION
    ========================================================= */

    function viewApplication(
        id,
        student,
        type,
        program,
        date,
        status
    ) {

        document.getElementById(
            "modalApplicationId"
        ).textContent = id;

        document.getElementById(
            "modalStudent"
        ).textContent = student;

        document.getElementById(
            "modalType"
        ).textContent = type;

        document.getElementById(
            "modalProgram"
        ).textContent = program;

        document.getElementById(
            "modalDate"
        ).textContent = date;

        document.getElementById(
            "modalStatus"
        ).textContent = status;

        openApplicationModal();

    }



    /* =========================================================
       OPEN MODAL
    ========================================================= */

    function openApplicationModal() {

        document
            .getElementById("applicationModal")
            .classList.add("active");

        document.body.style.overflow = "hidden";

    }



    /* =========================================================
       CLOSE MODAL
    ========================================================= */

    function closeApplicationModal() {

        document
            .getElementById("applicationModal")
            .classList.remove("active");

        document.body.style.overflow = "";

    }



    /* =========================================================
       CLOSE MODAL OUTSIDE
    ========================================================= */

    document
        .getElementById("applicationModal")
        .addEventListener("click", function(event) {

            if (event.target === this) {

                closeApplicationModal();

            }

        });



    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            closeApplicationModal();

        }

    });
