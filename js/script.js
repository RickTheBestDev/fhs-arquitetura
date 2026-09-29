/* =========================================================
   FHS ARQUITETURA
   SCRIPT.JS
   ========================================================= */


/* =========================
   MENU MOBILE
   ========================= */

const menuButton =
    document.getElementById("menu-button");

const nav =
    document.getElementById("nav");

const navLinks =
    document.querySelectorAll(".nav a");


if (menuButton && nav) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                nav.classList.toggle("active");

            document.body.classList.toggle(
                "menu-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );

}


navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            nav?.classList.remove("active");

            document.body.classList.remove(
                "menu-open"
            );

            menuButton?.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

});


/* =========================
   PORTFOLIO FILTER
   ========================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );

const portfolioProjects =
    document.querySelectorAll(
        ".portfolio-project"
    );


if (
    filterButtons.length > 0 &&
    portfolioProjects.length > 0
) {

    filterButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.getAttribute(
                        "data-filter"
                    );


                filterButtons.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                portfolioProjects.forEach(
                    (project) => {

                        const category =
                            project.getAttribute(
                                "data-category"
                            );


                        if (
                            filter === "all" ||
                            category === filter
                        ) {

                            project.classList.remove(
                                "hidden"
                            );

                        } else {

                            project.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

            }
        );

    });

}


/* =========================
   ANO ATUAL
   ========================= */

const currentYear =
    document.getElementById(
        "current-year"
    );

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}