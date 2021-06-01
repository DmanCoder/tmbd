import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';

// Activate global mock to make sure `getPopularTvShowsAXN` does not make a network call
jest.mock('../../redux/actions/popular/popularActions');
import { getPopularTvShowsAXN as mockGetPopularTvShowsAXN } from '../../redux/actions/popular/popularActions';

// Activate global mock to make sure `getSearchQueryAXN` does not make a network call
jest.mock('../../redux/actions/multiSearch/multiSearchActions');
import { getMultiSearchQueryAXN as mockGetMultiSearchQueryAXN } from '../../redux/actions/multiSearch/multiSearchActions';

// Component
import Banner from './banner';

// Utils
import allUtils from '../../utils/allUtils';

// Testing utilities
const { findByTestAttribute, storeFactory } = allUtils.testingUTL;

const setUp = (props = {}) => {
  const store = storeFactory();
  const component = mount<React.Component<{}, {}, any>, any, Readonly<{}>>(
    <Provider store={store}>
      <Banner {...props} />
    </Provider>
  );

  return component;
};

describe('<Banner />', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp();
  });

  it('Should render without errors', () => {
    const appComponent = findByTestAttribute(wrapper, 'banner-component');
    expect(appComponent.length).toBe(1);
  });

  it('Should render title', () => {
    const title = findByTestAttribute(wrapper, 'title');
    expect(title.length).toBe(1);
  });

  it('Should render sub-title', () => {
    const subTitle = findByTestAttribute(wrapper, 'sub-title');
    expect(subTitle.length).toBe(1);
  });

  it('Should render search input', () => {
    const searchInput = findByTestAttribute(wrapper, 'search-input');
    expect(searchInput.length).toBe(1);
  });

  it('Should render search button', () => {
    const searchBtn = findByTestAttribute(wrapper, 'search-btn');
    expect(searchBtn.length).toBe(1);
  });
});

describe('Redux action: `getPopularTvShowsAXN`', () => {
  // Runs before every single test
  beforeEach(() => {
    // Clear the mock calls from previous test
    mockGetPopularTvShowsAXN.mockClear();
  });

  it('Should run on component mount', () => {
    const wrapper = setUp();
    expect(mockGetPopularTvShowsAXN).toHaveBeenCalledTimes(1);
  });

  it('Should not run on component update', () => {
    const wrapper = setUp();
    mockGetPopularTvShowsAXN.mockClear();

    wrapper.update();

    expect(mockGetPopularTvShowsAXN).toHaveBeenCalledTimes(0);
  });
});

describe('State control search input field', () => {
  const mockSetQuery: jest.Mock<any, any> = jest.fn();
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  beforeEach(() => {
    mockSetQuery.mockClear();
    React.useState = () => ['', mockSetQuery];
    wrapper = setUp();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should update state with value of entered input upon change', () => {
    const searchInput = findByTestAttribute(wrapper, 'search-input');
    const mockEvent = { target: { value: 'Godzilla vs. Kong' } };

    searchInput.simulate('change', mockEvent);

    expect(mockSetQuery).toHaveBeenCalledWith('Godzilla vs. Kong');
  });

  it('Should execute `getMultiSearchQueryAXN` if `query` is not empty', () => {
    const query = 'Godzilla vs. Kong';
    React.useState = jest.fn().mockReturnValue([query, mockSetQuery]);

    const wrapper = setUp();
    const searchBtn = findByTestAttribute(wrapper, 'search-btn');

    searchBtn.simulate('click');
    expect(mockGetMultiSearchQueryAXN).toHaveBeenCalledTimes(1);
  });

  it('Should not execute `getMultiSearchQueryAXN` if `query` is empty', () => {
    const searchBtn = findByTestAttribute(wrapper, 'search-btn');
    searchBtn.simulate('click');
    expect(mockGetMultiSearchQueryAXN).toHaveBeenCalledTimes(0);
  });
});
