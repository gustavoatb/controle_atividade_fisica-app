import { Component, OnInit } from '@angular/core';

export interface Pessoa {
  nome: string;
  email: string;
  telefone: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  pessoas: Pessoa[] = [];
  novaPessoa: Pessoa = { nome: '', email: '', telefone: '' };

  ngOnInit() {
    const storedPessoas = localStorage.getItem('pessoas');
    if (storedPessoas) {
      this.pessoas = JSON.parse(storedPessoas);
    }
  }

  adicionarPessoa() {
    if (this.novaPessoa.nome.trim() !== '' && this.novaPessoa.email.trim() !== '' && this.novaPessoa.telefone.trim() !== '') {
      this.pessoas.push({ ...this.novaPessoa });
      this.novaPessoa = { nome: '', email: '', telefone: '' };
      this.atualizarLocalStorage();
    }
  }

  limparCampos() {
    this.novaPessoa = { nome: '', email: '', telefone: '' };
  }

  limparLista() {
    this.pessoas = [];
    this.atualizarLocalStorage();
  }

  private atualizarLocalStorage() {
    localStorage.setItem('pessoas', JSON.stringify(this.pessoas));
  }
}
