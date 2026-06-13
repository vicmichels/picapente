document.addEventListener("DOMContentLoaded", () => {
    // 1. Menu Mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
        });
    }

    // 2. FAQ Accordéon
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Fermer les autres
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Ouvrir/Fermer l'actuel
            item.classList.toggle('active');
        });
    });
});