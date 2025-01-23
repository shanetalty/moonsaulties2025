document.querySelector('.scroll-icon').addEventListener('click', function() {
    const currentSection = document.querySelector('.award-section:not(.hidden)');
    
    // Hide the current section
    currentSection.classList.add('hidden');
    
    // Show the next section
    let nextSection = currentSection.nextElementSibling;
    if (nextSection) {
        nextSection.classList.remove('hidden');
    }
});
