// Simple script to update the copyright year automatically
document.addEventListener('DOMContentLoaded', function() {
    // Update the year in the footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // You can add more interactive features here later
    console.log('Al-Arqam Cleaning website loaded successfully!');
});