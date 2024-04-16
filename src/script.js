const menuBtn = document.querySelector('.main__btn');
const menu = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('header--visible');
  menuBtn.classList.toggle('main__btn--open');
  document.body.classList.toggle('page__body--locked')
})