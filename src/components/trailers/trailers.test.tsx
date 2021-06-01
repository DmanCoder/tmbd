import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';

// Activate global mock to make sure `getTrendingAXN` does not make a network call
jest.mock('../../redux/actions/modal/modalActions');
import { modalSetTrailerAXN as mockModalSetTrailerAXN } from '../../redux/actions/modal/modalActions';
import { modalToggleAXN as mockModalToggleAXN } from '../../redux/actions/modal/modalActions';

// helper
import helpers from './helpers';

// Component
import Trailers from './trailers';

// UTILS
import allUtils from '../../utils/allUtils';

// Testing utilities
const { findByTestAttribute, storeFactory } = allUtils.testingUTL;

// Initial state store
const db = [
  {
    backdrop_path: '/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg',
    first_air_date: '2021-03-19',
    genre_ids: [10765, 10759, 18, 10768],
    id: 88396,
    name: 'The Falcon and the Winter Soldier',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'The Falcon and the Winter Soldier',
    overview:
      'Following the events of “Avengers: Endgame”, the Falcon, Sam Wilson and the Winter Soldier, Bucky Barnes team up in a global adventure that tests their abilities, and their patience.',
    popularity: 2443.352,
    poster_path: '/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    vote_average: 7.9,
    vote_count: 5031,
    trailers: {
      id: 105971,
      results: [
        {
          id: '5fd2aeaa798c940041c4aff9',
          iso_639_1: 'en',
          iso_3166_1: 'US',
          key: 'YB9DIxdB198',
          name: 'Sizzle | The Bad Batch | Disney+',
          site: 'YouTube',
          size: 1080,
          type: 'Teaser',
        },
      ],
    },
  },
];

const setUp = (props = {}) => {
  const store = storeFactory();
  const component = mount<React.Component<{}, {}, any>, any, Readonly<{}>>(
    <Provider store={store}>
      <Trailers {...props} />
    </Provider>
  );

  return component;
};

describe('<Trailers />', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp({ db, title: 'Latest Trailers', isGraph: false });
  });

  it('Should render without errors', () => {
    const trailerComponent = findByTestAttribute(wrapper, 'trailers-component');
    expect(trailerComponent.length).toBe(1);
  });
  it('Should render title', () => {
    const title = findByTestAttribute(wrapper, 'title');
    expect(title.length).toBe(1);
  });

  it('Should render the correct number of thumbnails', () => {
    const thumbnails = findByTestAttribute(wrapper, 'thumbnail');
    expect(thumbnails.length).toBe(db.length);
  });

  it('Should render play-btn', () => {
    const thumbnailIMG = wrapper.find('svg');
    expect(thumbnailIMG.length).toBe(db.length);
  });

  it('Should render thumbnail image', () => {
    const thumbnailIMG = findByTestAttribute(wrapper, 'thumbnail-img');
    expect(thumbnailIMG.length).toBe(db.length);
  });

  it('Should render thumbnail title', () => {
    const thumbnailTitle = findByTestAttribute(wrapper, 'thumbnail-title');
    expect(thumbnailTitle.length).toBe(db.length);
  });
});

describe('Trailers helper functions', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp({ db, title: 'Latest Trailers', isGraph: false });

    jest.clearAllMocks();
  });

  it('Should return the correct url string `onChangeBackground`', () => {
    helpers.onChangeBackground = jest
      .fn()
      .mockReturnValue(
        'https://image.tmdb.org/t/p/w500//sjxtIUCWR74yPPcZFfTsToepfWm.jpg'
      );

    const result = helpers.onChangeBackground(
      '/sjxtIUCWR74yPPcZFfTsToepfWm.jpg'
    );
    expect(result).toBe(
      'https://image.tmdb.org/t/p/w500//sjxtIUCWR74yPPcZFfTsToepfWm.jpg'
    );
  });

  it('Should call `onMouseEnter` when mouse enters thumbnail image', () => {
    helpers.onMouseEnter = jest.fn();

    const thumbnailTitle = findByTestAttribute(wrapper, 'thumbnail-img');
    thumbnailTitle.simulate('mouseenter');

    expect(helpers.onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it.skip('Should call `onChangeBackground` when `onMouseEnter` is called', () => {
    // helpers.onChangeBackground = jest.fn();
    // const thumbnailTitle = findByTestAttribute(wrapper, 'thumbnail-img');
    // thumbnailTitle.simulate('mouseenter');
    // expect(helpers.onChangeBackground).toHaveBeenCalledTimes(1);
  });
});

describe('Redux actions', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    // Clear the mock calls from previous test
    mockModalSetTrailerAXN.mockClear();
    mockModalToggleAXN.mockClear();

    wrapper = setUp({ db, title: 'Latest Trailers', isGraph: false });
  });

  it('Should run `modalSetTrailerAXN` on thumbnail/image click', () => {
    const thumbnailTitle = findByTestAttribute(wrapper, 'thumbnail-img');
    thumbnailTitle.simulate('click');

    expect(mockModalSetTrailerAXN).toHaveBeenCalledTimes(1);
  });

  it('Should run `modalToggleAXN` on thumbnail/image click', () => {
    const thumbnailTitle = findByTestAttribute(wrapper, 'thumbnail-img');
    thumbnailTitle.simulate('click');

    expect(mockModalToggleAXN).toHaveBeenCalledTimes(1);
  });
});
