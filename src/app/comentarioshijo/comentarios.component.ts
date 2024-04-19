import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {

  @Output() llamadaPadre: EventEmitter<string> = new EventEmitter();
  comentario: string = "";

  enviarPadre() {
    this.llamadaPadre.emit(this.comentario);
  }
}
