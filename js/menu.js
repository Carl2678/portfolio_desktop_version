 const menuIconMobile = document.querySelector('.navbar__hamb');
 const menu = document.querySelector('.navbar__menu');
 const menuLinks = document.querySelectorAll('.navbar__menu__link');

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


