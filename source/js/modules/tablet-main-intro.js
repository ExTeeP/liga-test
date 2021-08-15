const mainIntro = document.querySelector('.main-intro');
const mainIntroRight = mainIntro.querySelector('.main-intro__right');
const mainIntroLeft = mainIntro.querySelector('.main-intro__left');
const breakpointTablet = window.matchMedia('(max-width: 1023px)');

const initIntroSlideClick = () => {
  if (mainIntro && breakpointTablet.matches) {
    mainIntroLeft.addEventListener('click', () => {
      mainIntroRight.classList.add('fade-in-left');
      mainIntroRight.classList.remove('fade-out-left');
    });

    mainIntroRight.addEventListener('click', () => {
      mainIntroRight.classList.remove('fade-in-left');
      mainIntroRight.classList.add('fade-out-left');
    });
  } else {
    mainIntroRight.classList.remove('fade-in-left');
    mainIntroRight.classList.remove('fade-out-left');
  }
};

window.addEventListener('resize', initIntroSlideClick);

export {initIntroSlideClick};
