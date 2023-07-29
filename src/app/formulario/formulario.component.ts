import { Component, OnInit } from '@angular/core';

export interface Treino {
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
  treinos: Treino[] = [];
  novoTreino: Treino = { tipo: '', distancia: '', tempo: '', peso: 0, altura: 0 };
  imcResultado: number | null = null;

  ngOnInit() {
    const storedTreinos = localStorage.getItem('treinos');
    if (storedTreinos) {
      this.treinos = JSON.parse(storedTreinos);
    }
  }

  adicionarTreino() {
    if (this.novoTreino.tipo.trim() !== '' && this.novoTreino.distancia.trim() !== '' && this.novoTreino.tempo.trim() !== '') {
      this.treinos.push({ ...this.novoTreino });
      this.novoTreino = { tipo: '', distancia: '', tempo: '', peso: 0, altura: 0 };
      this.atualizarLocalStorage();
    }
  }

  limparCampos() {
    this.novoTreino = { tipo: '', distancia: '', tempo: '', peso: 0, altura: 0 };
  }

  limparLista() {
    this.treinos = [];
    this.atualizarLocalStorage();
  }

  calcularIMC() {
    if (this.novoTreino.peso > 0 && this.novoTreino.altura > 0) {
      const alturaMetros = this.novoTreino.altura / 100;
      this.imcResultado = this.novoTreino.peso / (alturaMetros * alturaMetros);
    } else {
      this.imcResultado = null;
    }
  }

  isCamposPreenchidos(): boolean {
    return (
      this.novoTreino.tipo.trim() !== '' &&
      this.novoTreino.distancia.trim() !== '' &&
      this.novoTreino.tempo.trim() !== ''
    );
  }

  private atualizarLocalStorage() {
    localStorage.setItem('treinos', JSON.stringify(this.treinos));
  }
}
