import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaTreinosComponent } from './lista-treinos/lista-treinos.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'lista-treinos', component: ListaTreinosComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
  { path: '**', redirectTo: '/formulario' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

