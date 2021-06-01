import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';

// Component
import Home from './home';

// UTILS
import allUtils from '../../utils/allUtils';

const { findByTestAttribute, storeFactory } = allUtils.testingUTL;

const setUp = (props = {}) => {
  const store = storeFactory();
  const component = mount<React.Component<{}, {}, any>, any, Readonly<{}>>(
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  );

  return component;
};

describe('<Home />', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp();
  });

  it('Should render without errors', () => {
    const homeComponent = findByTestAttribute(wrapper, 'home-component');
    expect(homeComponent.length).toBe(1);
  });
});
