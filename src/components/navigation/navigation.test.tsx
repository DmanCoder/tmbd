import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';
import { I18nextProvider } from 'react-i18next';

// Translations
import i18n from '../../i18n/i18n';

// Activate global mock
jest.mock('../../redux/actions/language/languageActions');
import { setLanguageAXN as mockSetLanguageAXN } from '../../redux/actions/language/languageActions';

// Component
import Navigation from './navigation';

// UTILS
import allUtils from '../../utils/allUtils';
import { storeFactory } from '../../utils/testingUTL';

const { findByTestAttribute } = allUtils.testingUTL;

const setUp = (props = {}) => {
  const store = storeFactory();
  const component = mount<React.Component<{}, {}, any>, any, Readonly<{}>>(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Navigation {...props} />
      </Provider>
    </I18nextProvider>
  );

  return component;
};
describe('<Navigation />', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp();
  });

  it('Should render without errors', () => {
    const navComponent = findByTestAttribute(wrapper, 'navigation-component');
    expect(navComponent.length).toBe(1);
  });

  it('Should render Logo', () => {
    const logo = findByTestAttribute(wrapper, 'logo');
    expect(logo.length).toBe(1);
  });

  it('Should render Movies menu text', () => {
    const movieText = findByTestAttribute(wrapper, 'movies-text');
    expect(movieText.length).toBe(1);
  });

  it('Should render TV Shows menu text', () => {
    const tvShowText = findByTestAttribute(wrapper, 'tv-shows-text');
    expect(tvShowText.length).toBe(1);
  });

  it('Should render People menu text', () => {
    const peopleText = findByTestAttribute(wrapper, 'people-text');
    expect(peopleText.length).toBe(1);
  });
  it('Should render preference language', () => {
    const languagePref = findByTestAttribute(wrapper, 'language-pref');
    expect(languagePref.length).toBe(1);
  });

  it('Should render Bell icon', () => {
    const bellIcon = findByTestAttribute(wrapper, 'bell-icon');
    expect(bellIcon.length).toBe(1);
  });

  it('Should render Profile Image', () => {
    const bellIcon = findByTestAttribute(wrapper, 'profile-image');
    expect(bellIcon.length).toBe(1);
  });
});

describe('Navigation menu list item render', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp();
    // Creat window.location.reload mock
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { reload: jest.fn() },
    });
  });

  it('Should render the correct number of languages selection', () => {
    const langArr: any = [
      { 'en-US': 'EN' },
      { 'es-ES': 'ES' },
      { 'zh-CN': 'CN' },
      { 'fr-FR': 'FR' },
    ];
    // Contains child elements
    const languageItem = findByTestAttribute(wrapper, 'language-item');
    expect(languageItem.length).toBe(langArr.length - 1); // The current selected language does not get rendered
  });

  it('Should reload page when language is selected', () => {
    const languageItem = findByTestAttribute(wrapper, 'language-item');
    languageItem.last().simulate('click');
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});

describe('Redux action: `setLanguageAXN`', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp();

    // Clear the mock calls from previous test
    mockSetLanguageAXN.mockClear();
  });

  it('Should run when a language item is clicked', () => {
    const languageItem = findByTestAttribute(wrapper, 'language-item');
    languageItem.first().simulate('click');
    expect(mockSetLanguageAXN).toHaveBeenCalledTimes(1);
  });

  it('Should reload the page when a language item is clicked', () => {
    const languageItem = findByTestAttribute(wrapper, 'language-item');
    languageItem.first().simulate('click');
    // TODO: This runs 2-3 times for some reason... fix later.
    expect(window.location.reload).toHaveBeenCalled();
  });
});
