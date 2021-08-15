const dinozavr = document.querySelector('.dinozavr');
const tape = dinozavr.querySelectorAll('.dinozavr__tape');
const breakpointTablet = window.matchMedia('(max-width: 1023px)');

const ANIMATION_DELAY = 1300;

const animateDinoTape = () => {
  if (dinozavr) {
    breakpointChecker();
    tape.forEach((it) => {
      showTape(it);
    });
  }
};

const showTape = (element) => {
  if (element.classList.contains('hidden')) {
    setTimeout(() => {
      element.classList.remove('hidden');
    }, ANIMATION_DELAY);
  }
};

const breakpointChecker = () => {
  if (breakpointTablet.matches) {
    dinozavr.classList.add('dinozavr--white');
  } else {
    dinozavr.classList.remove('dinozavr--white');
  }
};

window.addEventListener('resize', breakpointChecker);

export {animateDinoTape};
