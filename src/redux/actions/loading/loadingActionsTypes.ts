export const LOADING_TOGGLE: string = 'LOADING_TOGGLE ';

export interface ILoadingToggle {
  type: typeof LOADING_TOGGLE;
  payload: boolean;
}

export type ILoadingDispatchTypes = ILoadingToggle;
