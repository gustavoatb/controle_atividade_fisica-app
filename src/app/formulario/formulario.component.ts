import { Component, OnInit } from '@angular/core';

export interface Pessoa {
  tipo: string;
  distancia: string;
  tempo: string;
  peso: number;
  altura: number;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  pessoas: Pessoa[] = [];
  novaPessoa: Pessoa = { tipo: '', distancia: '', tempo: '', peso: 0, altura: 0 };
  imcResultado: number | null = null;

  ngOnInit() {
    const storedPessoas = localStorage.getItem('pessoas');
    if (storedPessoas) {
      this.pessoas = JSON.parse(storedPessoas);
    }
  }

  adicionarPessoa() {
    if (this.novaPessoa.tipo.trim() !== '' && this.novaPessoa.distancia.trim() !== '' && this.novaPessoa.tempo.trim() !== '') {
      this.pessoas.push({ ...this.novaPessoa });
      this.novaPessoa = { tipo: '', distancia: '', tempo: '', peso: 0, altura: 0 };
      this.atualizarLocalStorage();
    }
  }

  limparCampos() {
    this.novaPessoa = { tipo: '', distancia: '', tempo: '', peso: 0, altura: 0 };
  }

  limparLista() {
    this.pessoas = [];
    this.atualizarLocalStorage();
  }

  calcularIMC() {
    if (this.novaPessoa.peso > 0 && this.novaPessoa.altura > 0) {
      const alturaMetros = this.novaPessoa.altura / 100;
      this.imcResultado = this.novaPessoa.peso / (alturaMetros * alturaMetros);
    } else {
      this.imcResultado = null;
    }
  }

  private atualizarLocalStorage() {
    localStorage.setItem('pessoas', JSON.stringify(this.pessoas));
  }
}
