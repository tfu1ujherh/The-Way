document.getElementById('user-icon').addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent click event from bubbling up
  var dropMenu = document.getElementById('drop-menu');
  // Toggle display of dropdown
  if (dropMenu.style.display === 'none' || dropMenu.style.display === '') {
      dropMenu.style.display = 'block';
  } else {
      dropMenu.style.display = 'none';
  }
});

document.addEventListener('click', function(event) {
  var dropMenu = document.getElementById('drop-menu');
  var userIcon = document.getElementById('user-icon');
  // Hide dropdown if clicked outside
  if (!userIcon.contains(event.target) && !dropMenu.contains(event.target)) {
      dropMenu.style.display = 'none';
  }
});
