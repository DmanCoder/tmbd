import { ShallowWrapper, ReactWrapper } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../redux/reducers/rootReducer';
import { middleware } from '../redux/store/store';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState?: any) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
};

// /**
//  * Return node(s) with the given data-test attribute.
//  * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
//  * @param {string} val - Value of data-test attribute for search.
//  * @returns {ShallowWrapper}
//  */
export const findByTestAttribute = (
  wrapper: ShallowWrapper<any, Readonly<{}>> | ReactWrapper<any, Readonly<{}>>,
  attr: string
) => {
  const component = wrapper.find(`[data-test='${attr}']`);
  return component;
};

const testingUTL = { findByTestAttribute, storeFactory };

export default testingUTL;
