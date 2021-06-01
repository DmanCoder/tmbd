import React from 'react';
import { Provider } from 'react-redux';
import { shallow, ShallowWrapper } from 'enzyme';

// Component
import Rating from './rating';

// UTILS
import allUtils from '../../utils/allUtils';

// Testing utilities
const { findByTestAttribute, storeFactory } = allUtils.testingUTL;

const defaultProps = { score: 3.5 };

const setUp = (props = {}) => {
  return shallow(<Rating {...props} />);
};

describe('<Rating />', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp({ defaultProps });
  });

  it('Should render without errors', () => {
    const ratingComponent = findByTestAttribute(wrapper, 'rating-component');
    expect(ratingComponent.length).toBe(1);
  });
});
