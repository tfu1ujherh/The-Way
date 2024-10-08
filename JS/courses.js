



const imageList = [
    '../IMAGES/banner_1.png',
    '../IMAGES/banner_2.png',
    '../IMAGES/banner_3.png',
    '../IMAGES/banner_4.png',
    '../IMAGES/banner_5.png',
    '../IMAGES/banner_6.png',
    '../IMAGES/banner_7.png'
];

let currentIndex = 0;
const interval = 1500; // Change image every 1.5 seconds

// Full scroll rotation
let scrollPosition = 0; // Track scroll position (0 to 1)
const rotationMultiplier = 180; // Adjust multiplier for desired rotation speed

// Initialize image carousel
function initializeCarousel() {
    const imageElement = document.getElementById('carouselImage');
    const sunImage = document.querySelector('.sun-image');

    function displayCurrentImage(index) {
        imageElement.src = imageList[index];
    }

    function autoSlideImages() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % imageList.length;
            displayCurrentImage(currentIndex);
        }, interval);
    }

    // Start the carousel
    displayCurrentImage(currentIndex);
    autoSlideImages();

    // Initialize sun image rotation
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        // Calculate scroll position (0 to 1)
        scrollPosition = (currentScrollY / (documentHeight - windowHeight)) || 0;

        // Adjust rotation angle based on scroll position
        const rotationAngle = scrollPosition * rotationMultiplier;

        // Apply rotation
        sunImage.style.transform = `rotate(${rotationAngle}deg)`;

        // Debugging: Log the rotation angle
        console.log('Rotation angle:', rotationAngle);
    });
}

// Initialize the sun image rotation and carousel
initializeCarousel();
