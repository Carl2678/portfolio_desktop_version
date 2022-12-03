const menuBtn = document.querySelector('.hamburger');
const headerNavMobile = document.querySelector('.header-navigation-mobile');
const cancelCross = document.querySelector('.close-croix');
const linkSection = document.getElementsByClassName('menumobile');

menuBtn.addEventListener('click', () => {
  headerNavMobile.classList.remove('hidden');
});

cancelCross.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
});

linkSection[0].addEventListener('click', () => {
  headerNavMobile.classList.toggle('hidden');
});

linkSection[1].addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
});

linkSection[2].addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
});