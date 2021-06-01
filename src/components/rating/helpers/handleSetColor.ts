/**
 * Returns dynamic color string (hex format)
 * @param {number} score - tv, movie etc. score
 * @returns {string} - dynamic color string depending on score
 */
const handleSetColor = (score: number): string => {
  // Stroke color
  const green: string = '#21d07a';
  const yellow: string = '#d2d531';
  const red: string = '#db2360';

  if (score <= 33) {
    return red;
  } else if (score >= 33 && score <= 66) {
    return yellow;
  }

  return green;
};
export default handleSetColor;
