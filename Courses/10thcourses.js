
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









function toggleContent(subject) {
            // Get the selected content div
            var content = document.getElementById(subject);

            // If the selected content is already visible, hide it and remove 'active' class
            if (content.style.display === 'block') {
                content.style.display = 'none';
                event.target.classList.remove('active');
            } else {
                // Otherwise, hide all contents first
                var contents = document.getElementsByClassName('subject-content');
                for (var i = 0; i < contents.length; i++) {
                    contents[i].style.display = 'none';
                }

                // Remove 'active' class from all list items
                var listItems = document.querySelectorAll('li');
                listItems.forEach(function(item) {
                    item.classList.remove('active');
                });

                // Show the selected content and add 'active' class to the clicked item
                content.style.display = 'block';
                event.target.classList.add('active');
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