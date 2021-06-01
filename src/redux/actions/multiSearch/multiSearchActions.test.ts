import moxios from 'moxios';

// Axios instance
import { dbAPI } from '../../../api/init';

// Utilities
import allUtils from '../../../utils/allUtils';

// Multi Search Actions
import { getMultiSearchQueryAXN } from '../multiSearch/multiSearchActions';

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

describe('`getMultiSearchQueryAXN`', () => {
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

  it('Should update `searchRXS.query` correctly on successful API request', () => {
    // Expected response from successful API call
    const expectedRes = {
      dates: { maximum: '2021-05-03', minimum: '2021-04-16' },
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/jMWkd0fuwbG39eJpzycJzPWMCww.jpg Face',
          genre_ids: [28, 878],
          id: 399566,
          original_language: 'en',
          original_title: 'Godzilla vs. Kong (This is a test response)',
          overview:
            'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
          popularity: 9975.169,
          poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
          release_date: '2021-03-24',
          title: 'Godzilla vs. Kong',
          video: false,
          vote_average: 8.4,
          vote_count: 3849,
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

    return store
      .dispatch(getMultiSearchQueryAXN('Godzilla vs. Kong'))
      .then(() => {
        const newState = store.getState();
        expect(newState.searchRXS.query).toStrictEqual(expectedRes.results);
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

    return store
      .dispatch(getMultiSearchQueryAXN('Godzilla vs. Kong'))
      .then(() => {
        const newState = store.getState();
        expect(!allUtils.isEmptyUTL(newState.errorsRXS)).toBe(
          !allUtils.isEmptyUTL(errorResp.errors)
        );
      });
  });
});
