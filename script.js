/* Main Javascript
 1. Event listener for opening and closing the hamburger menu
 2. Expand code boxes on the skill page
 3. Theme switch (dark mode toggle)
 4. Easter egg (hidden key sequence)
*/

document.addEventListener('DOMContentLoaded', () => {
    // declare menu constants for menu buttons/nav menu
    const menuOpen = document.querySelector('#menu-open-button');
    const menuClose = document.querySelector('#menu-close-button');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    // Check if element excist
    if (menuOpen && menuClose && navMenu) {
        // Open menu when clicking the open button
        menuOpen.addEventListener('click', () => {
            // Show the menu on the screen by apply styling 0px
            navMenu.style.left = '0px';
            body.classList.add('show-mobile-menu');
        });

        // Close menu when clicking the close button
        menuClose.addEventListener('click', () => {
            // hide the menu outside the screen by -300px on close
            navMenu.style.left = '-300px';
            body.classList.remove('show-mobile-menu');
        });
    }
});

    // Add click event listeners to code boxes - skillpage
    const codeBoxes = document.querySelectorAll('.code-box');
    codeBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Toggle expanded class to show/hide content
            box.classList.toggle('expanded');
        });
    });
    // Theme switch functionality
    document.addEventListener('DOMContentLoaded', () => {
        const themeSwitch = document.getElementById('theme-switch');
        const icon = themeSwitch.querySelector('i');
        
        // Check if the user has dark mode enabled and replace toggle flexicon icon
        const darkMode = localStorage.getItem('darkMode') === 'true';
        if (darkMode) {
            document.body.classList.add('dark-mode');
            icon.classList.replace('bx-sun', 'bx-moon');
        }

        // Toggle dark mode when clicking the theme switch button
        themeSwitch.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
            
            // Toggle the icon based on the theme
            if (isDark) {
                icon.classList.replace('bx-sun', 'bx-moon');
            } else {
                icon.classList.replace('bx-moon', 'bx-sun');
            }
        });
    });

    // Easter egg typing
    document.addEventListener('DOMContentLoaded', () => {
        let keySequence = '';
        const secretCode = '1337';
        const modal = document.getElementById('easterEggModal');
        const closeButton = document.querySelector('.easter-egg-close');
        
        // Detect key presses and check for secret code sequence
        document.addEventListener('keydown', (e) => {
            keySequence += e.key;
            if (keySequence.length > secretCode.length) {
                keySequence = keySequence.slice(1);
            }
            // If keySequence equal hidden code - show a pop up modal
            if (keySequence === secretCode) {
                modal.style.display = 'block';
                keySequence = '';
            }
        });
        // Close the modal when clicking the close button
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        // Close the modal when clicking outside of it
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });