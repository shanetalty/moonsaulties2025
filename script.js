// script.js

// Function to navigate between sections
function goToSection(sectionId) {
    const currentSection = document.querySelector('.section.active');
    const nextSection = document.getElementById(sectionId);

    if (currentSection && nextSection) {
        // Add fade-out animation to the current section
        currentSection.classList.add('fade-out');

        // Wait for the animation to complete before switching
        setTimeout(() => {
            currentSection.classList.remove('active', 'fade-out');
            nextSection.classList.add('active');
        }, 500); // Match animation duration in CSS
    }
}

// Initial setup to mark the first section as active
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.section').classList.add('active');
});
