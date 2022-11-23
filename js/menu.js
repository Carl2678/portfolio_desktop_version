 const menuIconMobile = document.querySelector('.hamburger');
 const menu = document.querySelector('.menu_navigation');
 const menuLinks = document.querySelectorAll('.menu_navigation_lien');

const isActiveClassExisted = (element) => element.classList.contains('active');

const refreshIcon = () => {
  if (isActiveClassExisted(menu)) {
    menuIconMobile.setAttribute('src','images/hamburguer-close.png');
  } else {
    menuIconMobile.setAttribute('src','images/hamburguer.png');
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


