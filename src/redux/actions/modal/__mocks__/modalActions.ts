import { MODAL_TOGGLE, MODAL_SET_TRAILERS } from '../modalActionsTypes';

module.exports = {
  ...jest.requireActual('../modalActions'),
  __esModule: true,
  modalToggleAXN: jest.fn().mockReturnValue({
    type: MODAL_TOGGLE,
    payload: true,
  }),
  modalSetTrailerAXN: jest.fn().mockReturnValue({
    type: MODAL_SET_TRAILERS,
    payload: {
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
  }),
};
