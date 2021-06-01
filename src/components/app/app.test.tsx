import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';

// Activate global mock to make sure `getTrendingAXN` does not make a network call
jest.mock('../../redux/actions/trending/trendingActions');
import { getTrendingAXN as mockGetTrendingAXN } from '../../redux/actions/trending/trendingActions';

// Component
import App from './app';

// UTILS
import allUtils from '../../utils/allUtils';

const { findByTestAttribute, storeFactory } = allUtils.testingUTL;

const setUp = (props = {}) => {
  const store = storeFactory();
  const component = mount<React.Component<{}, {}, any>, any, Readonly<{}>>(
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );

  return component;
};

describe('<App />', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp();
  });

  it('Should render without errors', () => {
    const appComponent = findByTestAttribute(wrapper, 'app-component');
    expect(appComponent.length).toBe(1);
  });
});

describe('Redux actions: `getTrendingAXN`', () => {
  // Runs before every single test
  beforeEach(() => {
    // Clear the mock calls from previous test
    mockGetTrendingAXN.mockClear();
  });

  it('Should run on component mount', () => {
    const wrapper = setUp();
    expect(mockGetTrendingAXN).toHaveBeenCalledTimes(1);
  });

  it('Should not run on component update', () => {
    const wrapper = setUp();
    mockGetTrendingAXN.mockClear();
    wrapper.update();
    expect(mockGetTrendingAXN).toHaveBeenCalledTimes(0);
  });
});

describe('Session data restore', () => {
  it('Should run `languageSessionDataRestore`', () => {
    //   utilHandlers.languageSessionDataRestore = jest.fn();
    //   utilHandlers.languageSessionDataRestore();
    //   expect(utilHandlers.languageSessionDataRestore).toHaveBeenCalled();
  });
});
