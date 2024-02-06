import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environments';
import { HistoryConvert } from '../interfaces/history-convert.interface';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  constructor() {}

  getHistories(): Observable<HistoryConvert[]> {
    const url = `${this.baseUrl}/convert/all`;

    return this.http.get<HistoryConvert[]>(url);
  }
}
