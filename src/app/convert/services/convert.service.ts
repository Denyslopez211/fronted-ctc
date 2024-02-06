import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ConvertService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  constructor() {}

  createConvert(quantity: number, date: string): Observable<any> {
    const url = `${this.baseUrl}/convert/create`;
    const body = { quantity, date };
    return this.http.post<any>(url, body);
  }
}
