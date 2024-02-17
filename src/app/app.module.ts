import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  // Asegúrate de tener estas importaciones
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechaComponent } from './components/fecha/fecha.component';
import { HomeComponent } from './components/home/home.component';

import { PartidoComponent } from './components/partido/partido.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { ApiService1 } from './services/api.service1'; // Adjust the path accordingly
import { ApiService2 } from './services/api.service2'; // Adjust the path accordingly


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Puedes ajustar la ruta inicial
  { path: 'home', component: HomeComponent },
  { path: 'fecha', component: FechaComponent },
  { path: 'partido', component: PartidoComponent },
  { path: 'programacion', component: ProgramacionComponent },

  // Agrega más rutas según tu estructura
];

@NgModule({
  declarations: [
    AppComponent,
    FechaComponent,
    PartidoComponent,
    HeaderComponent,
    ProgramacionComponent,
   HomeComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SlickCarouselModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ApiService1,
    ApiService2, // Include ApiService in the providers array
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  exports: [RouterModule],
  
  bootstrap: [AppComponent],
})
export class AppModule {}