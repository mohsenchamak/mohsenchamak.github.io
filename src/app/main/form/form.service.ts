import { OptionsModel, FormModel } from './form-models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  getComboData(codingId: string): Observable<OptionsModel> {
    return this.http.get<OptionsModel>(environment.data.getCodingList, {
      params: { codingId: codingId },
    });
  }

  searchInOptions(filter: string, codingId: string): Observable<OptionsModel> {
    return this.http.get<OptionsModel>(environment.data.getCodingList, {
      params: { codingId: codingId, search: filter },
    });
  }

  addObject(
    _Date: string,
    _Subject: string,
    _Description: string,
    CUSR28005: string,
    CUSR28006: string,
    RUSR28007: string,
    RUSR28008: string
  ): FormModel {
    return {
      id: '0',
      folderId: 201,
      date: _Date,
      subject: _Subject,
      description: _Description,
      dynamicParams: [
        {
          name: 'CUSR28005',
          value: CUSR28005,
        },
        {
          name: 'CUSR28006',
          value: CUSR28006,
        },
        {
          name: 'RUSR28007',
          value: RUSR28007,
        },
        {
          name: 'RUSR28008',
          value: RUSR28008,
        },
      ],
      workflowSchemeId: 0,
      workflowInboxId: '',
    };
  }

  saveForm(data: FormModel) {
    return this.http.post(environment.addData.formSave, data);
  }
}
