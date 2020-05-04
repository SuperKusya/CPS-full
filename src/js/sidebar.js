document.addEventListener('DOMContentLoaded', function () {
    var btnsSidebar = document.querySelectorAll('.header__toggle'),
        sidebar = document.querySelector('.sidebar'),
        mask = document.querySelector('.mask');

      for(var i = 0; i < btnsSidebar.length; i++) {
        btnsSidebar[i].addEventListener('click', function () {
          sidebar.classList.toggle('sidebar--show');
          mask.classList.toggle('mask--visible');
        
        });
      }

      mask.addEventListener('click', function() {
        sidebar.classList.remove('sidebar--show');
        mask.classList.remove('mask--visible');
      });
    
});