export const SET_LANGUAGE: string = 'SET_LANGUAGE ';

export interface ISetLanguage {
  type: typeof SET_LANGUAGE;
  payload: string;
}

export type ISetLanguageDispatchTypes = ISetLanguage;
