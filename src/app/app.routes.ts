import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';
import { ComentariosComponent } from './comentarioshijo/comentarios.component';
import { ListaComentariosComponent } from './lista-comentarios/lista-comentarios.component';

export const routes: Routes = [
    {path:'', title:'Inicio', component:InicioComponent},
    {path:'quienes-somos', title:'Quienes somos', component:QuienesSomosComponent},
    {path:'donde-estamos', title:'Donde Estamos', component:DondeEstamosComponent},
    {path:'lista-comentarios', title:'Lista Comentarios', component:ListaComentariosComponent}
];

