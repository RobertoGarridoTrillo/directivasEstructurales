import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivasEstructurales';
  // ngfor
  listaEstudiantes: any[] = [
    {nombre: 'Tomas Gonzalez', estado: 'Promocionado'},
    {nombre: 'Lucas Perez', estado: 'Regular'},
    {nombre: 'Juan García', estado: 'Regular'},
  ]
}
