import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from './enviar-valor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  mostrarComponentes = true;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {}

  emitirValor(valor: string) {
    this.service.emitirValor(valor);
  }

  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}
