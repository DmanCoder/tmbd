import moxios from 'moxios';

// Axios instance
import { dbAPI } from '../../../api/init';

// Utilities
import allUtils from '../../../utils/allUtils';

// Multi Search Actions
import { getTrendingAXN } from '../trending/trendingActions';

// Mock Store
const { storeFactory } = allUtils.testingUTL;

// Moxios helpers to fake success and error
const mockSuccess = (data: any) => ({
  status: 200,
  response: {
    ...data,
  },
});

const mockErrors = (data: any) => ({
  status: 500,
  response: {
    ...data,
  },
});

describe('`getTrendingAXN`', () => {
  let store: any;

  beforeEach(() => {
    store = storeFactory();

    /* 
      Passed `dbAPI` (axios instance) to moxios.install so that moxios
      uses the configured settings and makes sure any calls that is made with the instances
      Gets routed to moxios
     */
    moxios.install(dbAPI);
  });

  afterEach(() => {
    moxios.uninstall(dbAPI);
  });

  it('Should update `trendingRXS.week` correctly on successful API request', () => {
    // Expected response from successful API call
    const expectedRes = {
      dates: { maximum: '2021-05-03', minimum: '2021-04-16' },
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
          genre_ids: [14, 28, 12, 878, 53],
          id: 460465,
          media_type: 'movie',
          original_language: 'en',
          original_title: 'Mortal Kombat',
          overview:
            "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
          popularity: 7612.95,
          poster_path: '/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg',
          release_date: '2021-04-07',
          title: 'Mortal Kombat',
          video: false,
          vote_average: 7.9,
          vote_count: 1882,
        },
      ],
      total_pages: 11,
      total_results: 205,
    };

    // Response from moxios once the call is
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(expectedRes)); // mocked response
    });

    return store.dispatch(getTrendingAXN('week')).then(() => {
      const newState = store.getState();
      expect(newState.trendingRXS.week).toStrictEqual(expectedRes.results);
    });
  });

  it('Should update `trendingRXS.today` correctly on successful API request', () => {
    // Expected response from successful API call
    const expectedRes = {
      dates: { maximum: '2021-05-03', minimum: '2021-04-16' },
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
          genre_ids: [14, 28, 12, 878, 53],
          id: 460465,
          media_type: 'movie',
          original_language: 'en',
          original_title: 'Mortal Kombat',
          overview:
            "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
          popularity: 7612.95,
          poster_path: '/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg',
          release_date: '2021-04-07',
          title: 'Mortal Kombat',
          video: false,
          vote_average: 7.9,
          vote_count: 1882,
        },
      ],
      total_pages: 11,
      total_results: 205,
    };

    // Response from moxios once the call is
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(expectedRes)); // mocked response
    });

    return store.dispatch(getTrendingAXN('today')).then(() => {
      const newState = store.getState();
      expect(newState.trendingRXS.today).toStrictEqual(expectedRes.results);
    });
  });

  it('Should update `errorsRXS` on an unsuccessful API request', () => {
    const errorResp = {
      errors: {
        language:
          '`language` is empty or has not been passed in as a query param',
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockErrors(errorResp)); // mocked response
    });

    return store.dispatch(getTrendingAXN('today')).then(() => {
      const newState = store.getState();
      expect(!allUtils.isEmptyUTL(newState.errorsRXS)).toBe(
        !allUtils.isEmptyUTL(errorResp.errors)
      );
    });
  });
});
