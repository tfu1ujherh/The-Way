



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









