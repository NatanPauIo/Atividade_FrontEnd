import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExibeMensagem } from './exibe-mensagem/exibe-mensagem';

@Component({
  imports: [RouterOutlet, ExibeMensagem],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('primeiro-app');
}
