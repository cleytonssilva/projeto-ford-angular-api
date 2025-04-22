// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DatabaseService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost:3000/api/tables'; // URL da API backend

  constructor(private http: HttpClient) {}

  getTables(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
