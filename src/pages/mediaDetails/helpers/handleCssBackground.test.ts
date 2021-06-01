import isEmptyUTL from '../../../utils/isEmptyUTL';
import handleCssBackground from './handleCssBackground';

describe('`handleCssBackground`', () => {
  it('Should return linearGradient string', () => {
    const backdrop = 'jMWkd0fuwbG39eJpzycJzPWMCww.jpg';
    const linearGradient = handleCssBackground(backdrop);
    expect(isEmptyUTL(linearGradient)).toBe(false);
  });
  it('Should return empty linearGradient string', () => {
    const backdrop = '';
    const linearGradient = handleCssBackground(backdrop);
    expect(isEmptyUTL(linearGradient)).toBe(true);
  });
});
