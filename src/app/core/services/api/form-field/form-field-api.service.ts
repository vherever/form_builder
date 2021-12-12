import { Injectable } from '@angular/core';
import { map, Observable, of, range } from 'rxjs';
import { FormFieldModel } from './form-field.model';
import { FormFieldSchema } from '../../../schemas/form-field-schema';

@Injectable()
export class FormFieldApiService {
  getAllFormFields(): Observable<FormFieldModel[]> {
    return range(1, 10).pipe(map(v => {
      return [
        new FormFieldSchema({
          uuid: `uuid_${ v }`,
          title: `title_${ v }`,
          description: `description_${ v }`,
          controlType: `input`,
        }),
      ]
    }))
  }

  getFormFieldById(_id: string): Observable<FormFieldModel> {
    return of(
      new FormFieldSchema({
        uuid: `uuid_0`,
        title: `title_0`,
        description: `description_0`,
        controlType: `input`,
      }),
    );
  }

  createFormField(reqData: any): Observable<FormFieldModel> {
    return of(
      new FormFieldSchema(reqData),
    );
  }

  updateFormFieldById(id: string, reqData: any): Observable<FormFieldModel> {
    return of(
      new FormFieldSchema(reqData),
    );
  }

  removeFormFieldById(id: string): Observable<null> {
    return of(null);
  }
}
