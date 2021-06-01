// Utilities
import allUtils from '../../../utils/allUtils';
import { modalSetTrailerAXN, modalToggleAXN } from './modalActions';

const { storeFactory } = allUtils.testingUTL;

describe('`loadingToggleAXN`', () => {
  let store: any;

  beforeEach(() => {
    store = storeFactory();
  });

  it('Should update `modalRXS.isOpen` correctly if passed `true`', () => {
    const isOpen = true;

    store.dispatch(modalToggleAXN(isOpen));
    const newState = store.getState().modalRXS;

    expect(newState.isOpen).toBe(isOpen);
  });

  it('Should update `modalRXS.isOpen` correctly if passed `false`', () => {
    const isOpen = false;

    store.dispatch(modalToggleAXN(isOpen));
    const newState = store.getState().modalRXS;

    expect(newState.isOpen).toBe(isOpen);
  });

  it('Should update `modalRXS.trailers` correctly', () => {
    const trailers = {
      id: 60735,
      results: [
        {
          id: '552d7e27c3a368750100138b',
          iso_639_1: 'en',
          iso_3166_1: 'US',
          key: 'Mx7xTF8fKz4',
          name: 'THE FLASH 2014 T.V. SERIES INTRO',
          site: 'YouTube',
          size: 360,
          type: 'Opening Credits',
        },
      ],
    };

    store.dispatch(modalSetTrailerAXN(trailers));
    const newState = store.getState().modalRXS;

    expect(newState.trailers).toBe(trailers);
  });
});
