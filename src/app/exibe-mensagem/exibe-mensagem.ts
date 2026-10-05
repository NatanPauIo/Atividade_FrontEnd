import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-exibe-mensagem',
  styleUrl: './exibe-mensagem.scss',
  templateUrl: './exibe-mensagem.html',
})
export class ExibeMensagem {
  mensagem: string
  constructor() {
    this.mensagem = ''
  } 

  alterarMensagem(nome: string) {
    this.mensagem = `Seja bem-vindo, ${nome}!`;
  }

  limparMensagem() {
    this.mensagem = '';
  }


}
