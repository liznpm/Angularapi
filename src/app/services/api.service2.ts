 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService2 {
  constructor(private http: HttpClient) {}

  getData2(): Observable<any> {
    const url = 'http://186.4.251.123:8083/deportivo/api/deportivo/programacion/2/0/0/0/0/20231216';
    return this.http.get<any>(url);
  }
}