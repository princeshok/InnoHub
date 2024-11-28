// Hamburger Menu Toggle
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');

    hamburgerMenu.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Swipe Text Animation
    const swipeTexts = document.querySelectorAll('.swipe-text');
    let index = 0;

    setInterval(() => {
      const current = swipeTexts[index];
      current.classList.remove('active');
      current.classList.add('exiting');

      index = (index + 1) % swipeTexts.length;
      const next = swipeTexts[index];
      next.classList.add('active');

      setTimeout(() => current.classList.remove('exiting'), 500); // Delay to remove the exiting class
    }, 2000); // Change text every 2 seconds 
