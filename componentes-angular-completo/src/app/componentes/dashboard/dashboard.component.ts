import { Component, input, OnInit } from '@angular/core';
import { ScrollNavBarComponent } from '../scroll-nav-bar/scroll-nav-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [ScrollNavBarComponent, CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  inputVeiculo: string = '';
  volumeVendas: number = 0;
  veiculosConectados: number = 0;
  veiculosUpdates: number = 0;
  mostrarImagem: boolean = false;
  inputVeiculoData: string = '';
  veiculoVin: string = '';
  veiculoOdometro: string = '';
  veiculoStatus: string = '';
  veiculoCombustivel: string = '';
  veiculoLatitude: string = '';
  veiculoLongitude: string = '';
  inputVeiculoVin: string = '';
  mostrarDados: boolean = false;

  respostaveiculo: any[] = [];
  respostaveiculoData: any[] = [];



  async ngOnInit() {
    fetch('http://localhost:3000/api/table/VEHICLE')
      .then(async (response) => {
        const resposta = await response.json();
        this.respostaveiculo = resposta;
        this.inputVeiculoData = resposta.vehicle_id;

        // this.inputVeiculoData = resposta.vehicledata_id;

        // console.log(this.respostaveiculo.vehicle_id);
        // console.log(resposta.vehicle_id);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
    fetch('http://localhost:3000/api/table/VEHICLEDATA')
      .then(async (responseData) => {
        const respostaData = await responseData.json();
        this.respostaveiculoData = respostaData;
        this.inputVeiculoData = respostaData.vehicledata_id;

      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  }

  verificarInput = () => {
    const encontrado = this.respostaveiculo.find(
      (veiculo: any) => veiculo.vehicle_model === this.inputVeiculo
      );

      if (encontrado) {
        // Atualiza as variáveis com os valores correspondentes
        this.volumeVendas = encontrado.vehicle_volumetotal;
        this.veiculosConectados = encontrado.vehicle_connected;
        this.veiculosUpdates = encontrado.vehicle_softwareUpdates;

        // Exibe a imagem correspondente
        this.mostrarImagem = true;
    }
  } // Verifica se o VIN corresponde ao modelo do veículo
    // this.verificarInputVin = () => {






  verificarInputVin = () => {
    const vinEncontrado = this.respostaveiculoData.find(
      (veiculo: any) => veiculo.vehicledata_vin === this.inputVeiculoVin
      );

      console.log(vinEncontrado);


      if (vinEncontrado) {
        this.veiculoOdometro = vinEncontrado.vehicledata_odometer;
        console.log(this.veiculoOdometro);

        this.veiculoStatus = vinEncontrado.vehicledata_status;
        this.veiculoCombustivel = vinEncontrado.vehicledata_fuelLevel;
        this.veiculoLatitude = vinEncontrado.vehicledata_lat;
        this.veiculoLongitude = vinEncontrado.vehicledata_long;

        this.mostrarDados = true;
      }
      // Verifica se o VIN corresponde ao modelo do veículo
      else {
        alert('VIN não encontrado');
        this.veiculoOdometro = '';
        this.veiculoStatus = '';
        this.veiculoCombustivel = '';
        this.veiculoLatitude = '';
        this.veiculoLongitude = '';
        this.mostrarDados = false;

      }
    }


    };


//   }
//   vinEncontrado!: any;
//   verificarInputVin!: any;
//   verificarInput!: any;
//   respostaveiculo!: any;
//   respostaveiculoData!: any;
// }



      // for (let i = 0; i < this.respostaveiculo.length; i++) {
      //   Verifica se o modelo do veículo corresponde ao input
      //   if (this.respostaveiculo[i].vehicle_model === this.inputVeiculoVin) {
      //     this.inputVeiculoData = this.respostaveiculo[i].vehicle_id;
      //     console.log(this.inputVeiculoData);

      //     this.veiculoVin = this.respostaveiculoData[i].vehicledata_vin;
      //     function verificarInputVin({
      //       veiculoVin,
      //       inputVeiculoVin,
      //     }: {
      //       veiculoVin: string;
      //       inputVeiculoVin: string;
      //     }) {
      //       return veiculoVin === inputVeiculoVin;
      //     }
      //     if (this.veiculoVin === this.inputVeiculoVin) {

      //       this.veiculoOdometro = this.respostaveiculoData[i].vehicledata_odometer;
      //       this.veiculoStatus = this.respostaveiculoData[i].vehicledata_status;
      //       this.veiculoCombustivel = this.respostaveiculoData[i].vehicledata_fuelLevel;
      //       this.veiculoLatitude = this.respostaveiculoData[i].vehicledata_lat;
      //       this.veiculoLongitude = this.respostaveiculoData[i].vehicledata_long;
      //     } else {
      //       this.veiculoVin = 'VIN não encontrado';
      //     }

      //   }
      // }
