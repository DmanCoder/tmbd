import { loadingToggleAXN } from './loadingActions';

// Utilities
import allUtils from '../../../utils/allUtils';

const { storeFactory } = allUtils.testingUTL;

describe('`loadingToggleAXN`', () => {
  let store: any;

  beforeEach(() => {
    store = storeFactory();
  });

  it('Should update `loadingRXS` correctly if passed `true`', () => {
    const isLoading = true;

    store.dispatch(loadingToggleAXN(isLoading));
    const newState = store.getState().loadingRXS;

    expect(newState).toEqual(true);
  });

  it('Should update `loadingRXS` correctly if passed `false`', () => {
    const isLoading = false;

    store.dispatch(loadingToggleAXN(isLoading));
    const newState = store.getState().loadingRXS;

    expect(newState).toEqual(false);
  });
});
