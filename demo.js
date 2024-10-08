
document.addEventListener('DOMContentLoaded', function() {

    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

  
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetModal = button.getAttribute('data-target');
            const modal = document.getElementById(targetModal);
            modal.style.display = 'flex';
            document.body.classList.add('body-no-scroll');  
        });
    });
   
   
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetModal = button.getAttribute('data-close');
            const modal = document.getElementById(targetModal);
            modal.style.display = 'none';
            document.body.classList.remove('body-no-scroll');  
        });
    });

  
    window.onclick = function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = 'none';
                document.body.classList.remove('body-no-scroll'); 
            }
        });
    };

});
