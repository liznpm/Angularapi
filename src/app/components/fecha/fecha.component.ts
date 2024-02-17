import { Component, OnInit } from '@angular/core';
import { ApiService1 } from '../../services/api.service1';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {
  datos: any[] = [];

  constructor(private apiService: ApiService1) {}

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    // Llamada a tu servicio para obtener datos
    this.apiService.getData1().subscribe((data: any[]) => {
      this.datos = data;
    });
  }
}
