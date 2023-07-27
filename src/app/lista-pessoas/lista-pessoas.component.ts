import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../formulario/formulario.component';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {
  pessoas: Pessoa[] = [];

  ngOnInit() {
    const storedPessoas = localStorage.getItem('pessoas');
    if (storedPessoas) {
      this.pessoas = JSON.parse(storedPessoas);
    }
  }
}

