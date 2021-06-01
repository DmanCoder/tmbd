import { imgFilterURL2 } from '../../api/init';
import gsap from '../../animations/gsapConfig';

import allUtils from '../../utils/allUtils';

/**
 * @dec Change trailer background on mouse enter
 * @param {object} trailer - trailers for tv show
 * @param {string} backdropPath - image path
 */
const onMouseEnter = (trailers: any, backdropPath: string) => {
  const background = onChangeBackground(backdropPath);
  const bgTL = gsap.timeline();
  bgTL
    .to(trailers.current, { duration: 0.8, autoAlpha: 0 })
    .to(trailers.current, { duration: 0.8, autoAlpha: 1 }, 'gb')
    .set(
      trailers.current,
      {
        delay: -0.2,
        css: { background },
      },
      'gb'
    );
};

//
/**
 * @dec Sets the appropriate dynamic background;
 * @param {object} trailer - trailers for tv show
 * @param {string} backdropPath - image path
 * @return {string} - returns css url
 */
const onChangeBackground = (backdropPath: string): string => {
  if (!allUtils.isEmptyUTL(backdropPath)) {
    return `url('${imgFilterURL2}/${backdropPath}')`;
  }
  return '';
};

const helpers = {
  onMouseEnter,
  onChangeBackground,
};

export default helpers;
