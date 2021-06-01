import { GET_TRENDING_TODAY, GET_TRENDING_WEEK } from '../trendingActionsTypes';

module.exports = {
  ...jest.requireActual('../trendingActions'),
  __esModule: true,
  getTrendingAXN: jest.fn().mockReturnValue({
    type: 'mock',
  }),
};
