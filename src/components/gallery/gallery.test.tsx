import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';

// Component
import Gallery from './gallery';

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
  },
];

const setUp = (props = {}) => {
  const store = storeFactory();
  const component = mount<React.Component<{}, {}, any>, any, Readonly<{}>>(
    <Provider store={store}>
      <Gallery {...props} />
    </Provider>
  );

  return component;
};

describe('<Gallery />', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp({ db });
  });

  it('Should render without errors', () => {
    const galleryComponent = findByTestAttribute(wrapper, 'gallery-component');
    expect(galleryComponent.length).toBe(1);
  });

  it('Should render title', () => {
    const title = findByTestAttribute(wrapper, 'title');
    expect(title.length).toBe(1);
  });

  it.skip('Should render tab option', () => {
    // TODO: Implement tab selection e.g, streaming, on tv, for rent, in theaters
    const title = findByTestAttribute(wrapper, 'title');
    expect(title.length).toBe(1);
  });

  it('Should render thumbnail', () => {
    const thumbnail = findByTestAttribute(wrapper, 'thumbnail');
    expect(thumbnail.length).toBe(1);
  });

  it('Should render the correct number of thumbnails', () => {
    const thumbnails = findByTestAttribute(wrapper, 'thumbnail');
    expect(thumbnails.length).toBe(db.length);
  });

  it('Should render the correct number of thumbnail ratings', () => {
    const ratingComponent = findByTestAttribute(wrapper, 'thumbnail');
    expect(ratingComponent.length).toBe(db.length);
  });

  it('Should render thumbnail image', () => {
    const thumbnailIMG = findByTestAttribute(wrapper, 'thumbnail-img');
    expect(thumbnailIMG.length).toBe(1);
  });

  it('Should render thumbnail title ', () => {
    const thumbnailTitle = findByTestAttribute(wrapper, 'thumbnail-title');
    expect(thumbnailTitle.length).toBe(1);
  });
});
