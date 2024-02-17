import { Component, OnInit } from '@angular/core';
import { ApiService2 } from '../../services/api.service2';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']  // Asegúrate de usar 'styleUrls' en lugar de 'styleUrl'
})
export class PartidoComponent implements OnInit {
  todosLosDatos: any[] = [];
  datos: any[] = [];

  constructor(private apiService: ApiService2) {}

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.apiService.getData2().subscribe((data: any[]) => {
      this.todosLosDatos = data;
      this.datos = this.todosLosDatos; // Mostrar todos los datos inicialmente
    });
  }

  filtrarPorEstadio(estadio: string): void {
    // Filtra los datos según el estadio seleccionado
    this.datos = this.todosLosDatos.filter(dato => dato.nombreEstadio === estadio);
  }
}


