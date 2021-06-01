import { SET_LANGUAGE } from '../languageActionsType';

module.exports = {
  ...jest.requireActual('../languageActions'),
  __esModule: true,
  setLanguageAXN: jest.fn().mockReturnValue({
    type: SET_LANGUAGE,
    payload: 'zh-CN',
  }),
};
