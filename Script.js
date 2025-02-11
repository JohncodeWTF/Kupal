let isOpen = false; // Track envelope state

function toggleEnvelope() {
    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter");
    const envelope = document.querySelector(".envelope");
    const heartsContainer = document.querySelector(".hearts-container");

    if (!isOpen) {
        // Open the envelope
        flap.style.transform = "rotateX(180deg)";

        // Slide and fade in the letter
        setTimeout(() => {
            letter.style.top = "-40px"; 
            letter.style.opacity = "1"; 
        }, 300);

        // Slight bounce effect
        envelope.style.transform = "translateY(-10px)";
        setTimeout(() => {
            envelope.style.transform = "translateY(0px)";
        }, 600);

        // Create floating hearts
        generateHearts();

        isOpen = true;
    } else {
        // Close the envelope
        letter.style.top = "5%";  
        letter.style.opacity = "0";  

        setTimeout(() => {
            flap.style.transform = "rotateX(0deg)";
        }, 300);

        envelope.style.transform = "translateY(0px)";

        isOpen = false;
    }
}

// Function to generate floating hearts
function generateHearts() {
    const heartsContainer = document.querySelector(".hearts-container");

    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        // Random position
        const randomX = Math.random() * window.innerWidth;
        const randomSize = Math.random() * 10 + 15; // Random size

        heart.style.left = `${randomX}px`;
        heart.style.fontSize = `${randomSize}px`;

        heartsContainer.appendChild(heart);

        // Remove the heart after animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}