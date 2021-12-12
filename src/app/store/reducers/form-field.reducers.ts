import { FormFieldAction, FormFieldActionTypes } from '../actions/form-field.actions';

export interface FormFieldState {
  data: any[];
  loading: boolean;
  error: Error;
  updated: boolean;
}

const initialState: FormFieldState = {
  data: [],
  loading: false,
  error: undefined,
  updated: false,
};

export function formFieldReducer(state: FormFieldState = initialState, action: FormFieldAction) {
  switch (action.type) {
    /**
     * Load all form fields
     */
    case FormFieldActionTypes.LOAD_ALL_FORM_FIELDS:
      return {
        ...state,
        loading: true
      };
    case FormFieldActionTypes.LOAD_ALL_FORM_FIELDS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case FormFieldActionTypes.LOAD_ALL_FORM_FIELDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    /**
     * Load Form Field by id
     */
    case FormFieldActionTypes.LOAD_FORM_FIELD_BY_ID:
      return {
        ...state,
        loading: true,
        updated: false,
      };
    case FormFieldActionTypes.LOAD_FORM_FIELD_BY_ID_SUCCESS:
      return {
        ...state,
        data: [action.payload, ...state.data],
        loading: false,
        updated: true,
      }
    case FormFieldActionTypes.LOAD_FORM_FIELD_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updated: false,
      };
    /**
     * Create Form Field
     */
    case FormFieldActionTypes.CREATE_FORM_FIELD_BY_ID:
      return {
        ...state,
        loading: true,
        updated: false,
      };
    case FormFieldActionTypes.CREATE_FORM_FIELD_BY_ID_SUCCESS:
      return {
        ...state,
        data: [action.payload, ...state.data],
        loading: false,
        updated: true,
      };
    case FormFieldActionTypes.CREATE_FORM_FIELD_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updated: false,
      };
    /**
     * Update Form Field by id
     */
    case FormFieldActionTypes.UPDATE_FORM_FIELD_BY_ID:
      return {
        ...state,
        loading: true,
        updated: false,
      };
    case FormFieldActionTypes.UPDATE_FORM_FIELD_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.map((o) => {
          if (o.uuid === action.payload.uuid) {
            o = { ...o, ...action.payload };
          }
          return o;
        }),
        updated: true,
      };
    case FormFieldActionTypes.UPDATE_FORM_FIELD_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updated: false,
      };
    /**
     * Remove Form Field by id
     */
    case FormFieldActionTypes.REMOVE_FORM_FIELD_BY_ID:
      return {
        ...state,
        loading: true,
        updated: false,
      };
    case FormFieldActionTypes.REMOVE_FORM_FIELD_BY_ID_SUCCESS:
      return {
        ...state,
        data: state.data.filter((item) => item.uuid !== action.id),
        loading: false,
        updated: true,
      };
    case FormFieldActionTypes.REMOVE_FORM_FIELD_BY_ID_FAILURE:
      return {
        ...state,
        error: action.payload,
        updated: false,
        loading: false,
      };
    default:
      return state;
  }
}
