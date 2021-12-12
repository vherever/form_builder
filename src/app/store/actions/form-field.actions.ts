import { Action } from '@ngrx/store';

export enum FormFieldActionTypes {
  LOAD_ALL_FORM_FIELDS = '[FORM FIELDS ALL] Load ALL Form Fields',
  LOAD_ALL_FORM_FIELDS_SUCCESS = '[FORM FIELDS ALL] Load ALL Form Fields Success',
  LOAD_ALL_FORM_FIELDS_FAILURE = '[FORM FIELDS ALL] Load ALL Form Fields Failure',

  LOAD_FORM_FIELD_BY_ID = '[FORM FIELD] Load Form Field by id',
  LOAD_FORM_FIELD_BY_ID_SUCCESS = '[FORM FIELD] Load Form Field by id Success',
  LOAD_FORM_FIELD_BY_ID_FAILURE = '[FORM FIELD] Load Form Field by id Failure',

  CREATE_FORM_FIELD_BY_ID = '[FORM FIELD] Create Form Field by id',
  CREATE_FORM_FIELD_BY_ID_SUCCESS = '[FORM FIELD] Create Form Field by id Success',
  CREATE_FORM_FIELD_BY_ID_FAILURE = '[FORM FIELD] Create Form Field by id Failure',

  UPDATE_FORM_FIELD_BY_ID = '[FORM FIELD] Update Form Field by id',
  UPDATE_FORM_FIELD_BY_ID_SUCCESS = '[FORM FIELD] Update Form Field by id Success',
  UPDATE_FORM_FIELD_BY_ID_FAILURE = '[FORM FIELD] Update Form Field by id Failure',

  REMOVE_FORM_FIELD_BY_ID = '[FORM FIELD] Remove Form Field by id',
  REMOVE_FORM_FIELD_BY_ID_SUCCESS = '[FORM FIELD] Remove Form Field by id Success',
  REMOVE_FORM_FIELD_BY_ID_FAILURE = '[FORM FIELD] Remove Form Field by id Failure',
}

/**
 * Load All Form Fields Actions
 */
export class LoadAllFormFieldsAction implements Action {
  readonly type = FormFieldActionTypes.LOAD_ALL_FORM_FIELDS;

  constructor(public payload: any) {
  }
}

export class LoadAllFormFieldsSuccessAction implements Action {
  readonly type = FormFieldActionTypes.LOAD_ALL_FORM_FIELDS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoadAllFormFieldsFailureAction implements Action {
  readonly type = FormFieldActionTypes.LOAD_ALL_FORM_FIELDS_FAILURE;

  constructor(public payload: any) {
  }
}

/**
 * Load Form Field by id Actions
 */
export class LoadFormFieldByIdAction implements Action {
  readonly type = FormFieldActionTypes.LOAD_FORM_FIELD_BY_ID;

  constructor(public payload: any) {
  }
}

export class LoadFormFieldByIdSuccessAction implements Action {
  readonly type = FormFieldActionTypes.LOAD_FORM_FIELD_BY_ID_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoadFormFieldByIdFailureAction implements Action {
  readonly type = FormFieldActionTypes.LOAD_FORM_FIELD_BY_ID_FAILURE;

  constructor(public payload: any) {
  }
}

/**
 * Create Form Field Actions
 */
export class CreateFormFieldByIdAction implements Action {
  readonly type = FormFieldActionTypes.CREATE_FORM_FIELD_BY_ID;

  constructor(public payload: any) {
  }
}

export class CreateFormFieldByIdSuccessAction implements Action {
  readonly type = FormFieldActionTypes.CREATE_FORM_FIELD_BY_ID_SUCCESS;

  constructor(public payload: any) {
  }
}

export class CreateFormFieldByIdFailureAction implements Action {
  readonly type = FormFieldActionTypes.CREATE_FORM_FIELD_BY_ID_FAILURE;

  constructor(public payload: any) {
  }
}

/**
 * Update Form Field by id Actions
 */
export class UpdateFormFieldByIdAction implements Action {
  readonly type = FormFieldActionTypes.UPDATE_FORM_FIELD_BY_ID;
}

export class UpdateFormFieldByIdSuccessAction implements Action {
  readonly type = FormFieldActionTypes.UPDATE_FORM_FIELD_BY_ID_SUCCESS;

  constructor(public id: string, public payload: any) {
  }
}

export class UpdateFormFieldByIdFailureAction implements Action {
  readonly type = FormFieldActionTypes.UPDATE_FORM_FIELD_BY_ID_FAILURE;

  constructor(public payload: any) {
  }
}

/**
 * Remove Form Field by id Actions
 */
export class RemoveFormFieldByIdAction implements Action {
  readonly type = FormFieldActionTypes.REMOVE_FORM_FIELD_BY_ID;
}

export class RemoveFormFieldByIdSuccessAction implements Action {
  readonly type = FormFieldActionTypes.REMOVE_FORM_FIELD_BY_ID_SUCCESS;

  constructor(public id: string, public payload: any) {
  }
}

export class RemoveFormFieldByIdFailureAction implements Action {
  readonly type = FormFieldActionTypes.REMOVE_FORM_FIELD_BY_ID_FAILURE;

  constructor(public payload: any) {
  }
}

export type FormFieldAction =
  LoadAllFormFieldsAction | LoadAllFormFieldsSuccessAction | LoadAllFormFieldsFailureAction |
  LoadFormFieldByIdAction | LoadFormFieldByIdSuccessAction | LoadFormFieldByIdFailureAction |
  CreateFormFieldByIdAction | CreateFormFieldByIdSuccessAction | CreateFormFieldByIdFailureAction |
  UpdateFormFieldByIdAction | UpdateFormFieldByIdSuccessAction | UpdateFormFieldByIdFailureAction |
  RemoveFormFieldByIdAction | RemoveFormFieldByIdSuccessAction | RemoveFormFieldByIdFailureAction;
