document.addEventListener('DOMContentLoaded', () => {
    // Navigation function
    function goToPage(pageNumber) {
        // Hide all pages
        const sections = document.querySelectorAll('section');
        sections.forEach(section => section.classList.add('hidden'));

        // Show the page we're navigating to
        document.getElementById('page' + pageNumber).classList.remove('hidden');
    }

    // Initial page load
    goToPage(1); // Start at page 1

    // Expose the function globally so the HTML can use it
    window.goToPage = goToPage;
});
