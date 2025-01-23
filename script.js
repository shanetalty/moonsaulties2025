const sections = document.querySelectorAll('.section');
let currentSection = 0;

function goToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        // Fade out current section
        sections[currentSection].style.opacity = '0';

        setTimeout(() => {
            // Hide current section
            sections[currentSection].style.display = 'none';

            // Show target section
            target.style.display = 'flex';
            setTimeout(() => target.style.opacity = '1', 10);  // Ensure fade-in happens

            currentSection = Array.from(sections).indexOf(target);
        }, 500); // Match the fade-out duration
    }
}

// Initialize visibility
sections.forEach((section, index) => {
    section.style.display = index === 0 ? 'flex' : 'none';
    if (index === 0) {
        section.style.opacity = '1'; // Make sure the first section is visible
    }
});
