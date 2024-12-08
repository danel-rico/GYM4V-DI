import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { ActividadesListadoComponent } from "./actividades-listado/actividades-listado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, ActividadesListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GymV1';
}
