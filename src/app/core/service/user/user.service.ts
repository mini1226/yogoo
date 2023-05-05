import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  signup(register: any): Observable<any> {
    return this.http.post(environment.baseUrl + 'register', register);
  }

  signIn(user: any): Observable<any> {
    return this.http.post(environment.baseUrl + 'login', user);
  }
}
