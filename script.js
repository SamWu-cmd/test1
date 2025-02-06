const text = "你好, こんにちは, 안녕하세요 <3 Hello, my name is Sam Wu and I am a ";
let index = 0;
const speed = 100; // Typing speed (ms per letter)

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        // Show text portions with delays
        setTimeout(() => { document.getElementById("additional-text-1").classList.add("show"); }, 1000);
        setTimeout(() => { document.getElementById("additional-text-2").classList.add("show"); }, 2000);
        setTimeout(() => { document.getElementById("additional-text-3").classList.add("show"); }, 3000);
        setTimeout(() => { document.getElementById("additional-text-4").classList.add("show"); }, 4000);
        
        // Show the scroll-down arrow after last text appears
        setTimeout(() => { document.querySelector(".scroll-down").classList.add("show"); }, 5000);
    }
}

// Start typing effect when page loads
window.onload = () => {
    typeEffect();
};


document.querySelector(".scroll-down a").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Scroll to the about section smoothly
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


// Select all navigation links
document.querySelectorAll(".nav-links a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default jump behavior

        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Function to open fullscreen view when an image is clicked
    function openFullscreen(imgSrc, captionText) {
        const fullscreenContainer = document.getElementById("fullscreen-container");
        const fullscreenImg = document.getElementById("fullscreen-img");
        const fullscreenCaption = document.getElementById("fullscreen-caption");

        fullscreenImg.src = imgSrc;
        fullscreenCaption.innerText = captionText; // Set caption text
        fullscreenContainer.style.display = "flex"; // Show fullscreen container
    }

    // Function to close fullscreen view
    function closeFullscreen() {
        document.getElementById("fullscreen-container").style.display = "none";
    }

    // Attach click event to all gallery images
    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", function () {
            const caption = this.parentElement.querySelector("p").innerText; // Get caption text
            openFullscreen(this.src, caption);
        });
    });

    // Close fullscreen when clicking outside the image
    document.getElementById("fullscreen-container").addEventListener("click", function (event) {
        if (event.target.id === "fullscreen-container") {
            closeFullscreen();
        }
    });

    // Close fullscreen when clicking the close button
    document.querySelector(".close-btn").addEventListener("click", closeFullscreen);
});


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    // Click event to flip cards manually
    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });
});


