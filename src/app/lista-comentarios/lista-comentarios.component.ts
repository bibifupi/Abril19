import { Component } from '@angular/core';
import { ComentariosComponent } from '../comentarioshijo/comentarios.component';

@Component({
  selector: 'app-lista-comentarios',
  standalone: true,
  imports: [ComentariosComponent],
  templateUrl: './lista-comentarios.component.html',
  styleUrl: './lista-comentarios.component.css'
})
export class ListaComentariosComponent {
  comentarios: string[] = [];

  recibirComentario(comentario: string) {
    this.comentarios.push(comentario);
  }
    
}
