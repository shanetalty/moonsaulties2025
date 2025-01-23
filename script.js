// Smooth scrolling with fade-out effect
function goToSection(sectionId) {
    const currentSection = document.querySelector('.section.active');
    const targetSection = document.getElementById(sectionId);

    if (currentSection && targetSection) {
        // Fade out current section
        currentSection.classList.add('fade-out');
        currentSection.addEventListener('animationend', () => {
            currentSection.classList.remove('active', 'fade-out');
            targetSection.classList.add('active');
        }, { once: true });
    }
}

// Set the initial section as active
document.getElementById('main').classList.add('active');
