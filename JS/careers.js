// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButtons = document.querySelectorAll('.toggle-btn');
    
//     toggleButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const courseInfo = button.nextElementSibling;

//             if (courseInfo.classList.contains('active')) {
//                 courseInfo.classList.remove('active');
//                 button.textContent = 'Read More'; // Change text to "Read More"
//             } else {
//                 // Optionally, close other course-info sections if needed
//                 document.querySelectorAll('.course-info.active').forEach(info => {
//                     info.classList.remove('active');
//                     info.previousElementSibling.textContent = 'Read More'; // Reset other buttons' text
//                 });
//                 courseInfo.classList.add('active');
//                 button.textContent = 'Read Less'; // Change text to "Read Less"
//             }
//         });
//     });
// });









// const slides = document.querySelector('.carousel-slides');
// const totalSlides = document.querySelectorAll('.image-banner1, .image-banner2, .image-banner3, .image-banner4').length;
// let currentIndex = 0;

// function showSlide(index) {
//   slides.style.transform = `translateX(-${index * 100}%)`; // Move to the specified slide
// }

// // Function to go to the previous slide
// function prevSlide() {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Decrement index
//   showSlide(currentIndex);
// }

// // Function to go to the next slide
// function nextSlide() {
//   currentIndex = (currentIndex + 1) % totalSlides; // Increment index
//   showSlide(currentIndex);
// }

// // Event listeners for buttons
// document.querySelector('.prev-button').addEventListener('click', prevSlide);
// document.querySelector('.next-button').addEventListener('click', nextSlide);

// // Initial display
// showSlide(currentIndex);







const slides = document.querySelector('.carousel-slides');
let currentIndex = 0;

function autoScroll() {
  const totalSlides = document.querySelectorAll('.image-banner1,.image-banner2,.image-banner3,.image-banner4').length;
  currentIndex = (currentIndex + 1) % totalSlides; // Cycle through slides
  slides.style.transform = `translateX(-${currentIndex * 100}%)`; // Move to the next slide
}

// Automatically scroll every 2 seconds
setInterval(autoScroll, 4000);

