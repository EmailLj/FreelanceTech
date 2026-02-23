// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close menu after click on mobile
        const navLinks = document.querySelector(".links");
        const hamburger = document.getElementById("hamburger");
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});