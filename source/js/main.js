import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initLoader} from './modules/init-loader';
import {animateDinoTape} from './modules/dino-tape';
import {initIntroSlideClick} from './modules/tablet-main-intro';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();

try {
  initLoader();
} catch (error) {
  animateDinoTape();
}

initIntroSlideClick();
