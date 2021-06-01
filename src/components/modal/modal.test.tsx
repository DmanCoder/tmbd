import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';

// Activate global mock to make sure `getTrendingAXN` does not make a network call
jest.mock('../../redux/actions/modal/modalActions');
import { modalToggleAXN } from '../../redux/actions/modal/modalActions';

// Component
import Modal from './modal';

// Utilities
import allUtils from '../../utils/allUtils';

// Helpers
import helpers from './helpers';

const { findByTestAttribute, storeFactory } = allUtils.testingUTL;

const setUp = (props = {}) => {
  const store = storeFactory();
  const component = mount<React.Component<{}, {}, any>, any, Readonly<{}>>(
    <Provider store={store}>
      <Modal {...props} />
    </Provider>
  );

  return component;
};

describe('<App />', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp();
    helpers.onToggleModal = jest.fn();
  });
  afterEach(() => {
    wrapper = setUp();
    jest.clearAllMocks();
  });

  it('Should render without errors', () => {
    const modalComponent = findByTestAttribute(wrapper, 'modal-component');
    expect(modalComponent.length).toBe(1);
  });
});

describe('Modal Helpers', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  beforeEach(() => {
    wrapper = setUp();
  });

  afterEach(() => {
    wrapper = setUp();
    jest.clearAllMocks();
  });

  it('Should run `onToggleModal` when `modalRXS.isOpen` is changed', () => {
    const modalComponent = findByTestAttribute(wrapper, 'modal-component');
    modalComponent.simulate('click');

    expect(helpers.onToggleModal).toHaveBeenCalledTimes(2);
  });
});

describe('Redux actions', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  beforeEach(() => {
    wrapper = setUp();
  });

  afterEach(() => {
    wrapper = setUp();
    jest.clearAllMocks();
  });

  it('Should run `modalToggleAXN` onClick', () => {
    const modalComponent = findByTestAttribute(wrapper, 'modal-component');
    modalComponent.simulate('click');

    expect(modalToggleAXN).toHaveBeenCalledTimes(1);
  });
});
