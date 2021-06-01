// API
import { imgFilterURL } from '../../../api/init';

// Utilities
import allUtils from '../../../utils/allUtils';

// Sets the appropriate dynamic background;
const handleCssBackground = (backdropPath: string): string => {
  if (!allUtils.isEmptyUTL(backdropPath)) {
    const linearGradient =
      'linear-gradient(to right,rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0)  100%)';
    return `${linearGradient}, url('${imgFilterURL}/${backdropPath}')`;
  }
  return '';
};

export default handleCssBackground;
