export function setupDropdownHover() {
    const dropdowns = document.querySelectorAll('.navbar .dropdown');
  
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', function () {
        const menu = this.querySelector('.dropdown-menu');
        if (window.innerWidth > 991) {
          menu.classList.add('show');
          this.querySelector('a.dropdown-toggle').setAttribute('aria-expanded', 'true');
        }
      });
  
      dropdown.addEventListener('mouseleave', function () {
        const menu = this.querySelector('.dropdown-menu');
        if (window.innerWidth > 991) {
          menu.classList.remove('show');
          this.querySelector('a.dropdown-toggle').setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
  