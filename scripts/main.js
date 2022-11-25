const hamburger = document.querySelector('.hamburger');
 const menu = document.querySelector('.menu_navigation');
 const menuLinks = document.querySelectorAll('.bar_navigation');
 const btnOpenMenu = document.querySelector('.iconemenu');
const btnCloseMenu = document.querySelector('.btn-close');

const isActiveClassExisted = (element) => element.classList.contains('active');

const refreshIcon = () => {
  if (isActiveClassExisted(menu)) {
    hamburger.setAttribute('src','images/hamb-close.png');
  } else {
    hamburger.setAttribute('src','images/iconemenu.png');
  }
};
const openMenu = () => {
  menu.classList.toggle('active');
  refreshIcon();
};

 const closeMenu = () => {
  menu.classList.remove('active');
  refreshIcon();
  
};

hamburger.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});





