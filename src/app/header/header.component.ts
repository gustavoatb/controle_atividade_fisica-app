import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  titulo: string = 'Controle de Atividade Física';

  onButtonClickHome(){
    alert('Você será redirecionado para a página de Cadastro de Atividades');
  }

  onButtonClickContato(){
    alert('Você será redirecionado para a página de Contato');
  }

}
