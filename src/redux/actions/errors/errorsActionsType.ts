export const ERROR_FEEDBACK: string = 'ERROR_FEEDBACK';

export interface IErrorFeedback {
  type: typeof ERROR_FEEDBACK;
  payload: {};
}

export type IErrorFeedbackDispatchTypes = IErrorFeedback;
