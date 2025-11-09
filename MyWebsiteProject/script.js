// Function to handle the Call to Action button click
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('ctaButton');
    const contactForm = document.getElementById('contactForm');

    // 1. Button Click Scroll
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Smoothly scroll down to the 'About' section
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Form Submission Handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission (which reloads the page)
            event.preventDefault();

            // In a real application, you would send this data to a server here.
            
            // Basic User Feedback
            alert("Thank you for your message! We will get back to you soon.");
            
            // Clear the form fields after successful submission
            this.reset();
        });
    }

    // 3. Simple Console Log for debugging
    console.log("Website scripts loaded and running successfully!");
});