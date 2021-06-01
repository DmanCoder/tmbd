export const MODAL_TOGGLE: string = 'MODAL_TOGGLE ';
export const MODAL_SET_TRAILERS: string = 'MODAL_SET_TRAILERS ';

export interface IModalToggle {
  type: typeof MODAL_TOGGLE;
  payload: boolean;
}
export interface IModalSetTrailers {
  type: typeof MODAL_SET_TRAILERS;
  payload: boolean;
}

export type IModalDispatchTypes = IModalToggle | IModalSetTrailers;
