import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl: string = 'https://retoolapi.dev/yZjtsj/customers';

  constructor(private http: HttpClient) {}

  //fetch all users
  getUsers(page: number = 1, limit: number = 10): Observable<any> {
    return this.http.get<any>(`$(this.apiUrl)?_page=${page}&_limit=${limit}`);
  }

  //fetch one user using idCustomer
  getUser(idCustomer: number = 1): Observable<any> {
    return this.http.get<any>(`$(this.apiUrl)?id=${idCustomer}`);
  }
}
