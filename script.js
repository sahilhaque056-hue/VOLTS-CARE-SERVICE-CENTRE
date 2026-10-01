/* =========================================
   WAJID AC WORK
   Main JavaScript
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------
       Current Year
       ----------------------------------------- */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    /* -----------------------------------------
       Smooth Navigation
       ----------------------------------------- */

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* -----------------------------------------
       WhatsApp Booking
       ----------------------------------------- */

    const whatsappButtons =
        document.querySelectorAll("[data-whatsapp]");

    whatsappButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const phone = "919933869133";

            const message =
                "Hello Wajid AC Work,%0A%0A" +
                "I want to book a service.%0A" +
                "Please contact me.";

            const whatsappURL =
                "https://wa.me/" + phone +
                "?text=" + message;

            window.open(whatsappURL, "_blank");

        });

    });


    /* -----------------------------------------
       Service Button Protection
       ----------------------------------------- */

    const bookingLinks =
        document.querySelectorAll(".booking-link");

    bookingLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (!this.getAttribute("href")) {
                this.setAttribute("href", "booking.html");
            }

        });

    });


    /* -----------------------------------------
       Scroll Reveal
       ----------------------------------------- */

    const revealElements =
        document.querySelectorAll(
            ".service-box, .brand, .hero-card"
        );

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

});
