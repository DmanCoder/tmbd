import allUtils from './allUtils';

describe('`isEmpty`', () => {
  it('Should return false if item is NOT empty', () => {
    expect(allUtils.isEmptyUTL('This is not empty')).toBe(false);
    expect(allUtils.isEmptyUTL(['3', 4])).toBe(false);
    expect(allUtils.isEmptyUTL({ testing: 'this is not empty' })).toBe(false);
  });

  it('Should return true if item is empty', () => {
    expect(allUtils.isEmptyUTL('')).toBe(true);
    expect(allUtils.isEmptyUTL([])).toBe(true);
    expect(allUtils.isEmptyUTL({})).toBe(true);
    expect(allUtils.isEmptyUTL(null)).toBe(true);
    expect(allUtils.isEmptyUTL(undefined)).toBe(true);
  });
});
