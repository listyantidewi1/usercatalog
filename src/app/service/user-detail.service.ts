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
    // .pipe(map((response) => this.processResponse(response)));
  }
}

// data.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserDetailService {
//   private apiUrl = 'https://retoolapi.dev/yZjtsj/customers'; // Replace with your API endpoint

//   constructor(private http: HttpClient) { }

//   getUser(id: number): Observable<any> {
//     const url = `${this.apiUrl}/?id=${id}`;
//     return this.http.get<any>(url);
//   }
// }
