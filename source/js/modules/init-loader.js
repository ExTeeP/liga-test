import {animateDinoTape} from './dino-tape';

const header = document.querySelector('.header');
const introLeft = document.querySelector('.main-intro__left');
const introRight = document.querySelector('.main-intro__right');
const loader = document.querySelector('.loader');
const loaderButton = document.querySelector('.loader__button');
const breakpointTablet = window.matchMedia('(max-width: 1023px)');

const contentToAnimate = [header, introLeft, introRight];
const ANIMATION_DELAY = 600;
const ANIMATION_EDN = 2600;

const hideContent = () => {
  document.documentElement.style.overflow = 'hidden';

  contentToAnimate.forEach((it) => {
    it.style.display = 'none';
  });
};

const renderContent = () => {
  document.documentElement.style.overflow = '';

  contentToAnimate.forEach((it) => {
    it.style.display = '';
  });
};

const initLoader = () => {
  if (loader) {
    loader.focus();
    loader.classList.add('loader--active');
    hideContent();
    breakpointCheckerAndListener();
  } else {
    animateDinoTape();
  }
};

const removeLoader = () => {
  loader.classList.add('loader--hidden');
  renderContent();
  document.removeEventListener('click', onDocumentLoaderClick);
  loaderButton.removeEventListener('click', onDocumentLoaderClick);
  document.removeEventListener('keydown', onDocumentLoaderEnterPress);

  setTimeout(() => {
    loader.remove();
  }, ANIMATION_DELAY);
};

const onDocumentLoaderClick = (evt) => {
  evt.preventDefault();
  removeLoader();
  animateDinoTape();
};

const onDocumentLoaderEnterPress = (evt) => {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    removeLoader();
    animateDinoTape();
  }
};

const breakpointCheckerAndListener = () => {
  if (breakpointTablet.matches) {
    loaderButton.textContent = 'Кликните на экран';

    setTimeout(() => {
      document.addEventListener('click', onDocumentLoaderClick);
    }, ANIMATION_EDN);

  } else {
    loaderButton.textContent = 'Нажмите на Enter';

    setTimeout(() => {
      document.addEventListener('keydown', onDocumentLoaderEnterPress);
    }, ANIMATION_EDN);
  }

  setTimeout(() => {
    loaderButton.addEventListener('click', onDocumentLoaderClick);
  }, ANIMATION_EDN);
};

window.addEventListener('resize', breakpointCheckerAndListener);

export {initLoader};
