function toggleFAQ(faqElement) {
    let answer = faqElement.nextElementSibling;

    if (faqElement.classList.contains("faq-active")) {
        answer.style.maxHeight = null;
        answer.style.opacity = 0;
        faqElement.classList.remove("faq-active");
    } else {
        // Close any other open FAQs
        document.querySelectorAll('.faq-active').forEach(item => {
            item.classList.remove("faq-active");
            item.nextElementSibling.style.maxHeight = null;
            item.nextElementSibling.style.opacity = 0;
        });

        // Expand the clicked FAQ
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = 1;
        faqElement.classList.add("faq-active");
    }
}






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






