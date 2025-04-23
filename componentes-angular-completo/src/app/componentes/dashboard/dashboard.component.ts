import { Component, OnInit } from '@angular/core';
import { ScrollNavBarComponent } from "../scroll-nav-bar/scroll-nav-bar.component";

@Component({
  selector: 'app-dashboard',
  imports: [ScrollNavBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',]
})
export class DashboardComponent {
  async ngOnInit() {
    fetch('http://localhost:3000/api/table/VEHICLE').then(async (response) => {
    const resposta= await response.json(); 
    this.respostaveiculo = resposta;
    // console.log(resposta);
    // if ("input-veiculo" in resposta(2)) {
    //   console.log(resposta["input-veiculo"]);
    // }
    // else {
    //   console.log("input-veiculo não encontrado");
    // }
    console.log(resposta); 
    }
    
    )
  
  }
  respostaveiculo!: any;
  // inputVeiculo!: HTMLInputElement;
  inputVeiculo: HTMLElement = document.getElementById("input-veiculo") as HTMLElement;
  
  if (this.inputVeiculo) {
    inputVeiculo.addEventListener("input", function() {
      console.log(inputVeiculo.value);
    });
  }
  
}
