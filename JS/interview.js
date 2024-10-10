document.addEventListener('DOMContentLoaded', function() {

    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Function to open modal and disable body scrolling
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent body from scrolling
        }
    }

    // Function to close modal and re-enable body scrolling
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Re-enable body scrolling
        }
    }

    // Add event listeners to toggle buttons to open modals
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetModal = button.getAttribute('data-target');
            openModal(targetModal);
        });
    });

    // Add event listeners to close buttons to close modals
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetModal = button.getAttribute('data-close');
            closeModal(targetModal);
        });
    });

    // Close modal when clicking outside the modal content
    window.onclick = function(event) {
        modals.forEach(function(modal) {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    };
});






const slides = document.querySelector('.carousel-slides');
const totalSlides = document.querySelectorAll('.image-banner1, .image-banner2, .image-banner3, .image-banner4').length;
let currentIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`; // Move to the specified slide
}

// Function to go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Decrement index
  showSlide(currentIndex);
}

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Increment index
  showSlide(currentIndex);
}

// Event listeners for buttons
document.querySelector('.prev-button').addEventListener('click', prevSlide);
document.querySelector('.next-button').addEventListener('click', nextSlide);

// Initial display
showSlide(currentIndex);






document.getElementById('user-icon').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click event from bubbling up
    var dropMenu = document.getElementById('drop-menu');
    // Toggle display of dropdown
    dropMenu.style.display = dropMenu.style.display === 'block' ? 'none' : 'block';
});

// Hide dropdown if clicking outside
document.addEventListener('click', function(event) {
    var dropMenu = document.getElementById('drop-menu');
    if (!dropMenu.contains(event.target) && !document.getElementById('user-icon').contains(event.target)) {
        dropMenu.style.display = 'none';
    }
});

