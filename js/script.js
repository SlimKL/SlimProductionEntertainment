/* =====================================================
   SLIM PRODUCTION ENTERTAINMENT
   WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const nav =
        document.getElementById("navLinks");

    nav.classList.toggle("active");

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
===================================================== */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const nav =
            document.getElementById("navLinks");

        nav.classList.remove("active");

    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Thank you for contacting Slim Production Entertainment. We will get back to you soon."
            );

            contactForm.reset();

        }
    );

}