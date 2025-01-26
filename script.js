// JavaScript to handle loading animation
document.addEventListener("DOMContentLoaded", () => {
    // Select the loading animation container
    const loadingAnimation = document.querySelector(".loader");

    // Hide the loading animation once the content is fully loaded
    window.addEventListener("load", () => {
        setTimeout(() => {
            loadingAnimation.style.opacity = "0"; // Add fade-out effect
            loadingAnimation.style.visibility = "hidden"; // Hide the element
        }, 500); // Timeout for smooth transition
    });
});
