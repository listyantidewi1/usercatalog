import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  private readonly apiUrl: string = 'https://retoolapi.dev/yZjtsj/customers';

  constructor(private http: HttpClient) {}
  //fetch one user using idCustomer
  getUser(idCustomer: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?id=${idCustomer}`);
  }
}

