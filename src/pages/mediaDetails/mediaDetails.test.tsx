import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';

// Component
import PageNotFound from './mediaDetails';

// UTILS
import allUtils from '../../utils/allUtils';

const { findByTestAttribute, storeFactory } = allUtils.testingUTL;

const setUp = (props = {}) => {
  const store = storeFactory();
  const component = mount<React.Component<{}, {}, any>, any, Readonly<{}>>(
    <Provider store={store}>
      <PageNotFound {...props} />
    </Provider>
  );

  return component;
};

describe('<PageNotFound />', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp();
  });

  it('Should render without errors', () => {
    const homeComponent = findByTestAttribute(
      wrapper,
      'page-not-found-component'
    );
    expect(homeComponent.length).toBe(1);
  });
});
