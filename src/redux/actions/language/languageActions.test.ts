import { setLanguageAXN } from './languageActions';

// Utilities
import allUtils from '../../../utils/allUtils';

const { storeFactory } = allUtils.testingUTL;

describe('`setLanguageAXN`', () => {
  let store: any;

  beforeEach(() => {
    store = storeFactory();
  });

  it('Should update `languageRXS` correctly', () => {
    const selectedLanguage = 'zh-CN';

    store.dispatch(setLanguageAXN(selectedLanguage));
    const newState = store.getState().languageRXS;

    expect(newState).toEqual(selectedLanguage);
  });
});
