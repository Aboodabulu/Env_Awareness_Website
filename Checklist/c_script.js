// JavaScript
function changeContent(sectionId) {
  // Remove 'active' class from all menu items
  document.querySelectorAll('.menu-item').forEach(function (item) {
      item.classList.remove('active');
  });
  
  // Add 'active' class to the clicked menu item
  document.querySelector(`.menu-item[onclick="changeContent('${sectionId}')"]`).classList.add('active');
  
  // Hide all content sections
  document.querySelectorAll('.content-section').forEach(function (section) {
      section.style.display = 'none';
  });

  // Show the active content section
  document.getElementById(sectionId).style.display = 'block';
}

// Initialize with the 'instructions' section active
changeContent('instructions');
