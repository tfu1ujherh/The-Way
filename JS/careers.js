document.addEventListener('DOMContentLoaded', () => {
  // Select all the toggle buttons and modals
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close-btn');

  // Function to open a modal with animation
  function openModal(modalId) {
      document.body.classList.add('modal-open');
      const modal = document.getElementById(modalId);
      if (modal) {
          modal.classList.add('active');
      }
  }

  // Function to close a modal with animation
  function closeModal(modal) {
      document.body.classList.remove('modal-open');
      modal.classList.remove('active');
  }

  // Add event listeners to the buttons to open modals
  toggleButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          const targetModal = e.target.getAttribute('data-target');
          openModal(targetModal);
      });
  });

  // Add event listeners to close buttons to close modals
  closeButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modal = button.closest('.modal');
          if (modal) {
              closeModal(modal);
          }
      });
  });

  // Close modal when clicking outside the modal content
  window.addEventListener('click', (e) => {
      modals.forEach(modal => {
          if (e.target === modal) {
              closeModal(modal);
          }
      });
  });

 
  
});





const slides = document.querySelector('.carousel-slides');
let currentIndex = 0;

function autoScroll() {
const totalSlides = document.querySelectorAll('.image-banner1,.image-banner2,.image-banner3,.image-banner4').length;
currentIndex = (currentIndex + 1) % totalSlides; // Cycle through slides
slides.style.transform = `translateX(-${currentIndex * 100}%)`; // Move to the next slide
}

// Automatically scroll every 2 seconds
setInterval(autoScroll, 4000);








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
      
      