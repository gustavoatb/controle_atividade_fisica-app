import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsefulService {

  constructor() { }
}

function fazerRequisicaoAPI(url: RequestInfo | URL) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

fazerRequisicaoAPI('http://localhost:3000/posts/1')
  .then(data => {
    console.log('Dados recebidos:', data);
  })
  .catch(error => {
    console.error('Erro na requisição:', error);
  });

