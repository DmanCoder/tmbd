import handleSetColor from './handleSetColor';

describe('`handleSetColor`', () => {
  const green: string = '#21d07a';
  const yellow: string = '#d2d531';
  const red: string = '#db2360';

  it('Should return the RED hex color depending on score', () => {
    const score = 20;
    const dColor: string = handleSetColor(score);
    expect(dColor).toBe(red);
  });

  it('Should return the YELLOW hex color depending on score', () => {
    const score = 50;
    const dColor: string = handleSetColor(score);
    expect(dColor).toBe(yellow);
  });

  it('Should return the GREEN hex color depending on score', () => {
    const score = 85;
    const dColor: string = handleSetColor(score);
    expect(dColor).toBe(green);
  });
});
