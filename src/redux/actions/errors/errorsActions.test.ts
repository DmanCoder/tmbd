import { errorsFeedbackAXN } from './errorsActions';

// Utilities
import allUtils from '../../../utils/allUtils';

const { storeFactory } = allUtils.testingUTL;

describe('`errorsFeedbackAXN`', () => {
  let store: any;

  beforeEach(() => {
    store = storeFactory();
  });

  it('Should update `errorsRXS` correctly', () => {
    const errors = {
      page: '`page` is required',
    };

    store.dispatch(errorsFeedbackAXN(errors));
    const newState = store.getState().errorsRXS;

    expect(allUtils.isEmptyUTL(newState)).toBe(false);
  });
});
