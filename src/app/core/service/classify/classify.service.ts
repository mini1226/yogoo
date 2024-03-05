import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClassifyService {


  constructor(private http: HttpClient) { }

  getClassify(): Observable<any> {
    return this.http.get(environment.baseUrl + 'open_camera');
  }

  classify(name: any): Observable<any> {
    return this.http.post(environment.baseUrl + 'classify', name);
  }

  multiClassify(name: any): Observable<any> {
    return this.http.post(environment.baseUrl + 'split_image', name);
  }

}
