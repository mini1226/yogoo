import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor(private http: HttpClient) { }


  guide(name: any): Observable<any> {
    return this.http.post(environment.baseUrl + 'guide', name);
  }
}
