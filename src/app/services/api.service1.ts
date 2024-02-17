 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService1 {
  constructor(private http: HttpClient) {}

  getData1(): Observable<any> {
    const url = 'http://186.4.251.123:8083/deportivo/api/deportivo/calendario/fechas/0/1';
    return this.http.get<any>(url);
  }
}