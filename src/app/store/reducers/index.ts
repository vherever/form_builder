import { formFieldReducer, FormFieldState } from './form-field.reducers';
import { ActionReducerMap } from '@ngrx/store';

export const rootReducer = {};

export interface AppState {
  readonly formFieldsData: FormFieldState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  formFieldsData: formFieldReducer
};
