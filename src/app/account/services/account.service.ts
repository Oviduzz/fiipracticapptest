import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  urlRequest = 'https://fiipractic-project.firebaseio.com/users.json';
  putUrl = 'https://fiipractic-project.firebaseio.com/users/1.json';
  constructor(private http: HttpClient) {
  }

  getAccount(): Observable<any> {
   return this.http.get(this.urlRequest);
  }
  updateAccount(account): Observable<any> {
    console.log(account);
    return this.http.put(this.putUrl, account);
  }

}
