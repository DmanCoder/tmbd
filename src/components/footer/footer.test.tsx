import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Component
import Footer from './footer';

// UTILS
import allUtils from '../../utils/allUtils';

const { findByTestAttribute } = allUtils.testingUTL;

const setUp = (props = {}) => {
  const component = shallow<React.Component<{}, {}, any>, any, Readonly<{}>>(
    <Footer {...props} />
  );
  return component;
};

describe('<Footer />', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>>;

  // Runs before every single test
  beforeEach(() => {
    wrapper = setUp();
  });

  it('Should render without errors', () => {
    const footerComponent = findByTestAttribute(wrapper, 'footer-component');
    expect(footerComponent.length).toBe(1);
  });

  it('Should render Logo', () => {
    const logo = findByTestAttribute(wrapper, 'logo');
    expect(logo.length).toBe(1);
  });

  it('Should render links (The Basic)', () => {
    const title = findByTestAttribute(wrapper, 'title-basic');
    const links = findByTestAttribute(wrapper, 'link-basic');
    expect(title.length).toBe(1);
    expect(links.length).toBe(5);
  });

  it('Should render links (Get Involved)', () => {
    const title = findByTestAttribute(wrapper, 'title-involved');
    const links = findByTestAttribute(wrapper, 'link-involved');
    expect(title.length).toBe(1);
    expect(links.length).toBe(4);
  });

  it('Should render links (The Community)', () => {
    const title = findByTestAttribute(wrapper, 'title-community');
    const links = findByTestAttribute(wrapper, 'link-community');
    expect(title.length).toBe(1);
    expect(links.length).toBe(4);
  });
  it('Should render links (Legal)', () => {
    const title = findByTestAttribute(wrapper, 'title-legal');
    const links = findByTestAttribute(wrapper, 'link-legal');
    expect(title.length).toBe(1);
    expect(links.length).toBe(3);
  });
});
