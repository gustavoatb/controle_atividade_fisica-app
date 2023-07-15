import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent {
items: any;
mostrarElemento: any;

show: boolean = false;

  showAlert() {
    this.show = true;
  }

  closeAlert() {
    this.show = false;
  }

}
