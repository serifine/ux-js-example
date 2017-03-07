import { AureliaUX } from 'aurelia-ux';
import { inject } from 'aurelia-dependency-injection';

@inject(AureliaUX)
export class App {
  constructor(ux) {
    this.ux = ux;

    ux.design.primary = '#704794';
    ux.design.accent = '#e62787';

    this.message = 'Hello World!';
  }

  changeColors() {
    this.ux.design.accent = '#00b8ff';
  }
}
