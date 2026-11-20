
// ==============================
// 1. MOBILE NAVIGATION MENU
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


// Close mobile menu after clicking a navigation link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// ==============================
// 2. CONTACT FORM VALIDATION
// ==============================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get user input values
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();


    // Check empty fields
    if (!name || !email || !subject || !message) {

        formMessage.style.color = "red";

        formMessage.textContent = "Please fill in all the fields.";

        return;

    }


    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.style.color = "red";

        formMessage.textContent = "Please enter a valid email address.";

        return;

    }


    // Show success message
    formMessage.style.color = "green";

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been submitted successfully.";


    // Clear form fields
    contactForm.reset();

});


// ==============================
// 3. GET STARTED BUTTON
// ==============================

const getStartedButtons = document.querySelectorAll(
    ".nav-button, .hero-buttons .primary-button"
);

getStartedButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const pricingSection = document.getElementById("pricing");

        pricingSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ==============================
// 4. SMOOTH SECTION NAVIGATION
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==============================
// 5. PRICING BUTTON INTERACTION
// ==============================

const pricingButtons = document.querySelectorAll(".price-button");

pricingButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const planName = this.closest(".price-card").querySelector("h3").textContent;

        const subjectField = document.getElementById("subject");

        subjectField.value = "Interested in " + planName;

    });

});

