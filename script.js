// Toggle Dark Mode
const darkModeButton = document.getElementById("lightMode");

darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    darkModeButton.textContent = isDarkMode ? "🌙" : "🌞"; // Toggle icon based on mode
});

// Toggle Hamburger Menu on Mobile
const hamburgerMenu = document.getElementById("hamburgerMenu");
const leftNavLinks = document.getElementById("leftNavLinks");

hamburgerMenu.addEventListener("click", () => {
    leftNavLinks.classList.toggle("active"); // Show/hide nav links when menu is clicked
});

document.addEventListener("DOMContentLoaded", function() {
    const swipeTexts = document.querySelectorAll('.swipe-text');
    let currentIndex = 0;

    function changeSwipeText() {
        // Remove 'active' class from all texts
        swipeTexts.forEach(text => text.classList.remove('active'));
        
        // Add 'active' class to the current index text
        swipeTexts[currentIndex].classList.add('active');
        
        // Move to the next index
        currentIndex = (currentIndex + 1) % swipeTexts.length; // Loop back to first word
    }

    // Initial setup: change the first swipe text to active
    changeSwipeText();
    
    // Change text every 5 seconds (match with the animation timing)
    setInterval(changeSwipeText, 5000);
});


