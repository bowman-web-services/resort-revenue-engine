document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.main-nav a');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      document.querySelector('.main-nav').classList.remove('active');
    });
  });
});
