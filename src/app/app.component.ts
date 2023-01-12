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
    {nombre: 'Tomas Gonzalez', estado: 'Promocionado', raza: 'blanco'},
    {nombre: 'Lucas Perez', estado: 'Regular', raza: 'negro'},
    {nombre: 'Juan García', estado: 'Regular', raza: 'chino'},
  ]

  // ngIf
  mostrar = true;

  toggle(): void{
    this.mostrar = !this.mostrar;
  }
}



