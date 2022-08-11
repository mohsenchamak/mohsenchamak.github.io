import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {GridModel} from "./grid-model";

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private http: HttpClient) { }

  getList(): Observable<GridModel> {
   return  this.http.get<GridModel>(environment.data.getGridData,{params:{folderId: '000000000201'}});
  }
}
