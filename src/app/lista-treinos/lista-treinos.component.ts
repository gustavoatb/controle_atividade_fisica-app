import { Component, OnInit } from '@angular/core';
import { Treino } from '../formulario/formulario.component';

@Component({
  selector: 'app-lista-treinos',
  templateUrl: './lista-treinos.component.html',
  styleUrls: ['./lista-treinos.component.css']
})
export class ListaTreinosComponent implements OnInit {
  treinos: Treino[] = [];

  ngOnInit() {
    const storedTreinos = localStorage.getItem('treinos');
    if (storedTreinos) {
      this.treinos = JSON.parse(storedTreinos);
    }
  }
}

