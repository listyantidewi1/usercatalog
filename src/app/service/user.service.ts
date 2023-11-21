import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Response } from '../interface/response.interface';
import { User } from '../interface/user.interface';
// import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl: string = 'https://retoolapi.dev/yZjtsj/customers';
  // private readonly apiUrl: string = 'https://randomuser.me/api';

  constructor(private http: HttpClient) {}

  //fetch all users
  getUsers(page: number = 1, limit: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?_page=${page}&_limit=${limit}`);
    // .pipe(map((response) => this.processResponse(response)));
  }
  // getUsers(size: number = 10): Observable<any> {
  //   return this.http.get<any>(`$(this.apiUrl)/?results=${size}`);
  // }

  //fetch one user using idCustomer
  getUser(idCustomer: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?id=${idCustomer}`);
    // .pipe(map((response) => this.processResponse(response)));
  }
  // getUser(uuid: number = 1): Observable<any> {
  //   return this.http.get<any>(`$(this.apiUrl)/?uuid=${uuid}`);
  // }

  // private processResponse(response: Response): Response {
  //   return {
  //     // results: response.results.map(
  //     //   (user: any) =>
  //     //     <User>{
  //     //       id: user.id,
  //     //       customer_name: user.customer_name,
  //     //       address: user.address,
  //     //       email: user.email,
  //     //       phone_number: user.phone_number,
  //     //     }
  //     // ),
  //     
  //   };
  // }
}
