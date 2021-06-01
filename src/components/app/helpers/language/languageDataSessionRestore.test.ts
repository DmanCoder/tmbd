jest.mock('../../../../redux/actions/language/languageActions');
import { setLanguageAXN as mockSetLanguageAXN } from '../../../../redux/actions/language/languageActions';

// Language data restore
import languageDataSessionRestore from './languageDataSessionRestore';

describe('`languageDataSessionRestore`', () => {
  beforeEach(() => {
    // Clear the mock calls from previous test
    window.sessionStorage.clear();
    mockSetLanguageAXN.mockClear();
  });
  afterEach(() => {});

  it('Should call `setLanguageAXN` if `selectedLanguage` exists in `window.sessionStorage`', () => {
    // TODO: Author - DmanCoder: I had trouble creating a `mockSessionStorage` but a user on stackoverflow says its completely valid to just use window.sessionStorage (Link below)
    // https://stackoverflow.com/questions/51566816/what-is-the-best-way-to-mock-window-sessionstorage-in-jest

    window.sessionStorage.setItem('selectedLanguage', 'zh-CN');
    languageDataSessionRestore();
    expect(mockSetLanguageAXN).toHaveBeenCalledTimes(1);
  });

  it('Should NOT call `setLanguageAXN` if `selectedLanguage` DOES NOT exists in `window.sessionStorage`', () => {
    languageDataSessionRestore();
    expect(mockSetLanguageAXN).toHaveBeenCalledTimes(0);
  });
});
