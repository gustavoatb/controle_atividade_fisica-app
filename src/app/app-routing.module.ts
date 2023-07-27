import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'lista-pessoas', component: ListaPessoasComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
  { path: '**', redirectTo: '/formulario' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

