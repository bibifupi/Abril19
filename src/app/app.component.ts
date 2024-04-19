import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ComentariosComponent } from './comentarioshijo/comentarios.component';
import { ListaComentariosComponent } from './lista-comentarios/lista-comentarios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,InicioComponent,DondeEstamosComponent,QuienesSomosComponent,ComentariosComponent,ListaComentariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril19';
}
