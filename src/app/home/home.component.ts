import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  nome: string | undefined;

  constructor(private localStorage: LocalStorageService) { }

  salvarNome() {
    this.localStorage.set('nome', this.nome);
}

}


