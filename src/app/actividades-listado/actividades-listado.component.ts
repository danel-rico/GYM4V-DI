import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actividades-listado',
  imports: [CommonModule],
  templateUrl: './actividades-listado.component.html',
  styleUrl: './actividades-listado.component.scss'
})
export class ActividadesListadoComponent {
  
  actividades = [
    {
      fecha: new Date(2014, 7, 10, 0, 0), // 10/08/2014 00:00
      lugar: 'Aula02',
      monitor: 'Miguel Goyena',
      tipo: 'BodyPump'
    },
    {
      fecha: new Date(2022, 8, 12, 0, 0), // 12/09/2022 00:00
      lugar: 'Aula01',
      monitor: 'Miguel Goyena',
      tipo: 'Pilates'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
