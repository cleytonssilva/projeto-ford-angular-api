import { Component } from '@angular/core';
import { CabecalhoComponent } from "../cabecalho/cabecalho.component";

@Component({
  selector: 'app-container',
  imports: [CabecalhoComponent],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css',]
})
export class ContainerComponent {
  nome = 'Angular Componentes';
  // title = 'componentes-angular-completo';

}
