import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { FormFieldApiService } from '../../core/services/api/form-field/form-field-api.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import {
  FormFieldActionTypes,
  LoadAllFormFieldsAction, LoadAllFormFieldsFailureAction,
  LoadAllFormFieldsSuccessAction,
} from '../actions/form-field.actions';

@Injectable()
export class FormFieldEffects {
  constructor(
    private actions$: Actions,
    private formFieldApiService: FormFieldApiService,
  ) {
  }

  loadAllFormFields$ = createEffect(
    () => this.actions$.pipe(
      ofType<LoadAllFormFieldsAction>(FormFieldActionTypes.LOAD_ALL_FORM_FIELDS),
      mergeMap(
        action => this.formFieldApiService.getAllFormFields()
          .pipe(
            map(data => new LoadAllFormFieldsSuccessAction(data)),
            catchError(error => of(new LoadAllFormFieldsFailureAction(error)))
          )
      )
    )
  )
}
