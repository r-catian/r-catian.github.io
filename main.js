// nav

const mobileMenuButton = document.getElementById("mobile-menu-button")
const mobilemenu = document.getElementById("mobile-menu")

mobileMenuButton.addEventListener("click", () => {
    mobilemenu.classList.toggle("hidden")
})

// end nav



// back to top
var toTopButton = document.getElementById("to-top-button");

// Check if the button exists
if (toTopButton) {

    // On scroll event, toggle button visibility based on scroll position
    window.onscroll = function() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            toTopButton.classList.remove("hidden");
        } else {
            toTopButton.classList.add("hidden");
        }
    };

    // Function to scroll to the top of the page smoothly
    window.goToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

//   end of back to top


// opening animation
