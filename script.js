// script.js

const sections = document.querySelectorAll('.section');
let currentSection = 0;

function goToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        sections[currentSection].classList.add('fade-out');
        setTimeout(() => {
            sections[currentSection].style.display = 'none';
            target.style.display = 'flex';
            currentSection = Array.from(sections).indexOf(target);
        }, 500);
    }
}

// Initialize visibility
sections.forEach((section, index) => {
    section.style.display = index === 0 ? 'flex' : 'none';
});
