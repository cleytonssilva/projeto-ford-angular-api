import { Component, OnInit } from '@angular/core';
import { ScrollNavBarComponent } from "../scroll-nav-bar/scroll-nav-bar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [ScrollNavBarComponent, CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',]
})
export class DashboardComponent {
  inputVeiculo: string = '';
  async ngOnInit() {
    fetch('http://localhost:3000/api/table/VEHICLE').then(async (response) => {
      const resposta = await response.json();
      this.respostaveiculo = resposta;
      
      console.log(resposta);
      
      for (let i = 0; i < resposta.length; i++) {
        console.log(this.inputVeiculo)
        console.log(resposta[i].vehicle_model);
        if (resposta[i].vehicle_model === this.inputVeiculo) {
          // console.log(resposta[i].vehicle_model);
          console.log("input-veiculo encontrado");
          break;
        }
        else {
          console.log("input-veiculo não encontrado");
        }
      }
      // this.verificarInput();
      // if (resposta.vehicle_model === this.inputVeiculo) {
      //   console.log("input-veiculo encontrado");
      // }else {
      //   console.log("input-veiculo não encontrado");
      // }
      
      
      // Verifica se o inputVeiculo está presente na resposta
      
    }
    

    ).catch((error) => {
      console.error('Erro ao buscar dados:', error);
    })
    // this.verificarInput();
  }
  respostaveiculo!: any;
  // resposta = this.respostaveiculo;
  verificarInput() {
    if (this.respostaveiculo.vehicle_model === this.inputVeiculo) {
      console.log("input-veiculo encontrado");
    }else {
      console.log("input-veiculo não encontrado");
    }
  }
}



// verificarInput2(){
//   this.inputVeiculo.addEventListener("input", function() {
//   console.log(this.inputVeiculo.value);
// });
// }


// inputVeiculo.addEventListener("input", function() {




// inputVeiculo!: HTMLInputElement;
// input-Veiculo: HTMLInputElement = document.getElementById("input-veiculo") as HTMLElement;

// if (this.inputVeiculo) {
//   inputVeiculo.addEventListener("input", function() {
//   console.log(inputVeiculo.value);
//   });
// }