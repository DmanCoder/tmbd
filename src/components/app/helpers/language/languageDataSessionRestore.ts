// Redux store
import store from '../../../../redux/store/store';

// i18n
import i18n from '../../../../i18n/i18n';

// Actions
import { setLanguageAXN } from '../../../../redux/actions/language/languageActions';

// Utilities
import allUtils from '../../../../utils/allUtils';

const languageDataSessionRestore = (): void => {
  if (!allUtils.isEmptyUTL(window.sessionStorage.selectedLanguage)) {
    const language: string = window.sessionStorage.selectedLanguage;
    i18n.changeLanguage(language);
    store.dispatch(setLanguageAXN(language));
  }
};

export default languageDataSessionRestore;
