// Handles header menu flyover and collapsing logic

document.addEventListener('DOMContentLoaded', function () {
  // Desktop flyout menu
  const nav = document.querySelector('nav');
  const productBtn = nav && nav.querySelector('.relative > button');
  const flyoutMenu = nav && nav.querySelector('.relative > div.absolute');

  if (productBtn && flyoutMenu) {
    let flyoutTimeout;
    productBtn.addEventListener('mouseenter', () => {
      clearTimeout(flyoutTimeout);
      flyoutMenu.style.display = 'block';
      flyoutMenu.classList.add('transition', 'ease-out', 'duration-200', 'opacity-100', 'translate-y-0');
      flyoutMenu.classList.remove('opacity-0', 'translate-y-1');
    });
    productBtn.addEventListener('mouseleave', () => {
      flyoutTimeout = setTimeout(() => {
        flyoutMenu.style.display = 'none';
      }, 150);
    });
    flyoutMenu.addEventListener('mouseenter', () => {
      clearTimeout(flyoutTimeout);
      flyoutMenu.style.display = 'block';
    });
    flyoutMenu.addEventListener('mouseleave', () => {
      flyoutMenu.style.display = 'none';
    });
  }

  // Mobile menu open/close
  const openMenuBtn = document.querySelector('nav .lg\:hidden button');
  const mobileMenu = document.querySelector('header > .lg\:hidden');
  const closeMenuBtn = mobileMenu ? mobileMenu.querySelector('button') : null;

  if (openMenuBtn && mobileMenu && closeMenuBtn) {
    openMenuBtn.addEventListener('click', () => {
      mobileMenu.style.display = 'block';
    });
    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });
    // Hide mobile menu by default
    mobileMenu.style.display = 'none';
  }

  // Mobile submenu collapse/expand
  const mobileProductBtn = document.querySelector('[aria-controls="disclosure-1"]');
  const mobileProductMenu = document.getElementById('disclosure-1');
  if (mobileProductBtn && mobileProductMenu) {
    mobileProductBtn.addEventListener('click', () => {
      const expanded = mobileProductBtn.getAttribute('aria-expanded') === 'true';
      mobileProductBtn.setAttribute('aria-expanded', !expanded);
      mobileProductMenu.style.display = expanded ? 'none' : 'block';
    });
    // Hide submenu by default
    mobileProductMenu.style.display = 'none';
  }
}); 