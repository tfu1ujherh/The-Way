// Carousel functionality
let currentSlide = 0;
const images = document.querySelectorAll('.carousel-images img');
const contentItems = document.querySelectorAll('.carousel-content .content-item');
const totalSlides = images.length;

function showSlide(index) {
    // Hide all images and content
    images.forEach(img => img.classList.remove('active'));
    contentItems.forEach(content => content.classList.remove('active'));

    // Show the selected image and content
    images[index].classList.add('active');
    contentItems[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Set interval to automatically change slides
setInterval(nextSlide, 1600);

// Initially show the first slide
showSlide(currentSlide);


const names = [
    "Sudha Jaswanth",
    "Vishnu Vardhan Thota",
    "Sri Hasini",
    "Harsha vardhini",
    "Srinu",
    "Ariga Bhavani Shankar"
];

let index = 0;
const nameDisplay = document.getElementById("nameDisplay");

function changeName() {
    nameDisplay.style.opacity = 0; // Fade out

    setTimeout(() => {
        nameDisplay.textContent = names[index]; // Change name
        nameDisplay.style.opacity = 1; // Fade in

        index = (index + 1) % names.length; // Update index
    }, 500); // Duration for fade out
}

// Change name every 3 seconds
setInterval(changeName, 1500);


