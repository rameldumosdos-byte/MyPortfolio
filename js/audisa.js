    /* =====================================================
       SIDEBAR NAVIGATION
    ===================================================== */

    const sidebarLinks =
        document.querySelectorAll(".sidebar-link");


    sidebarLinks.forEach(link => {

        link.addEventListener("click", () => {

            const target =
                link.dataset.target;

            const section =
                document.getElementById(target);

            if (!section) return;


            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            sidebarLinks.forEach(item => {

                item.classList.remove("active");

            });


            link.classList.add("active");


            /* Close mobile sidebar */

            document
                .getElementById("sidebar")
                .classList.remove("open");

        });

    });



    /* =====================================================
       SCROLL TO SECTION
    ===================================================== */

    function scrollToSection(id) {

        const element =
            document.getElementById(id);

        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }



    /* =====================================================
       FILTER MODULES
    ===================================================== */

    const filters =
        document.querySelectorAll(".filter");

    const modules =
        document.querySelectorAll(".module-card");

    const moduleCount =
        document.getElementById("moduleCount");


    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            const category =
                filter.dataset.filter;


            filters.forEach(item => {

                item.classList.remove("active");

            });


            filter.classList.add("active");


            let visible = 0;


            modules.forEach(module => {

                const moduleCategory =
                    module.dataset.category;


                if (
                    category === "all" ||
                    moduleCategory === category
                ) {

                    module.style.display =
                        "block";

                    visible++;

                } else {

                    module.style.display =
                        "none";

                }

            });


            moduleCount.textContent =
                visible + " modules";

        });

    });



    /* =====================================================
       SEARCH
    ===================================================== */

    const searchInput =
        document.getElementById("searchInput");


    searchInput.addEventListener(
        "input",
        function () {

            const query =
                this.value
                    .toLowerCase()
                    .trim();


            let visible = 0;


            modules.forEach(module => {

                const searchText =
                    (
                        module.dataset.search +
                        " " +
                        module.innerText
                    ).toLowerCase();


                if (
                    query === "" ||
                    searchText.includes(query)
                ) {

                    module.style.display =
                        "block";

                    visible++;

                } else {

                    module.style.display =
                        "none";

                }

            });


            moduleCount.textContent =
                visible + " modules";

        }
    );



    /* =====================================================
       DOCUMENTATION ACCORDION
    ===================================================== */

    const docTitles =
        document.querySelectorAll(".doc-title");


    docTitles.forEach(title => {

        title.addEventListener(
            "click",
            function () {

                const item =
                    this.parentElement;


                item.classList.toggle("open");

            }
        );

    });



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenu =
        document.getElementById("mobileMenu");

    const sidebar =
        document.getElementById("sidebar");


    mobileMenu.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle("open");

        }
    );



    /* =====================================================
       ACTIVE SECTION WHILE SCROLLING
    ===================================================== */

    const sections =
        document.querySelectorAll(".section");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;


                    const id =
                        entry.target.id;


                    sidebarLinks.forEach(link => {

                        link.classList.toggle(
                            "active",
                            link.dataset.target === id
                        );

                    });

                });

            },
            {
                rootMargin:
                    "-30% 0px -60% 0px"
            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });



    /* =====================================================
       KEYBOARD SHORTCUT
       "/" focuses search
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "/" &&
                document.activeElement.tagName !== "INPUT"
            ) {

                event.preventDefault();

                searchInput.focus();

            }

        }
    );