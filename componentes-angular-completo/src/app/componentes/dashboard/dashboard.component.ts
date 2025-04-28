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

        // console.log(this.respostaveiculoData);
        // for (let i = 0; i < this.respostaveiculoData.length; i++) {
        //   console.log(this.respostaveiculoData[i].vehicledata_id);

        //   if (this.respostaveiculo.vehicle_id === this.respostaveiculoData[i].vehicledata_id) {
        //     this.inputVeiculoData = this.respostaveiculoData[i].vehicledata_id;
        //     console.log(this.inputVeiculoData);
        //   }

        // }





      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });


    this.verificarInput = () => {


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

        const encontradoData = this.respostaveiculoData.find(
          (veiculoData: any) => veiculoData.vehicledata_id === this.inputVeiculoData
        );

        for (let i = 0; i < this.respostaveiculo.length; i++) {
          // console.log(this.respostaveiculo[i].vehicle_id);

          if (this.respostaveiculo[i].vehicle_model === this.inputVeiculo) {
            this.inputVeiculoData = this.respostaveiculo[i].vehicle_id;
            console.log(this.inputVeiculoData);
            const encontradoData = this.respostaveiculoData[i].vehicledata_id;
            console.log(encontradoData);

          this.veiculoVin = encontradoData.vehicle_vin;
          this.veiculoOdometro = encontradoData.vehicle_odometro;
          this.veiculoStatus = encontradoData.vehicle_status;
          this.veiculoCombustivel = encontradoData.vehicle_combustivel;
          this.veiculoLatitude = encontradoData.vehicle_latitude;
          this.veiculoLongitude = encontradoData.vehicle_longitude;
        }
        }

        // const encontradoData = this.respostaveiculoData.find(
        //   (veiculoData: any) => veiculoData.vehicledata_id === encontrado.vehicle_id
        // );

        // for (let i = 0; i < this.respostaveiculo.length; i++) {


        //   if (this.respostaveiculo[i].vehicle_model === this.inputVeiculo) {
        //     this.inputVeiculoData = this.respostaveiculo[i].vehicle_id;
        //     console.log(this.inputVeiculoData);
        //     const encontradoData = this.respostaveiculoData[i].vehicledata_id;
        //     console.log(encontradoData);}
        // if (encontradoData) {
        //   this.veiculoVin = encontradoData.vehicle_vin;
        //   this.veiculoOdometro = encontradoData.vehicle_odometro;
        //   this.veiculoStatus = encontradoData.vehicle_status;
        //   this.veiculoCombustivel = encontradoData.vehicle_combustivel;
        //   this.veiculoLatitude = encontradoData.vehicle_latitude;
        //   this.veiculoLongitude = encontradoData.vehicle_longitude;

        //   console.log(encontradoData.veiculoVin);
        //   console.log(this.veiculoOdometro);
        //   console.log(this.veiculoStatus);
        //   console.log(this.veiculoCombustivel);
        //   console.log(this.veiculoLatitude);
        //   console.log(this.veiculoLongitude);


        // }


    };





      // this.verificarInput = "";
      // this.inputVeiculo = '';
      // this.mostrarImagem = false;
      // this.volumeVendas = 0;
      // this.veiculosConectados = 0;
      // this.veiculosUpdates = 0;
    };
  verificarInput!: any;
  respostaveiculo!: any;
  respostaveiculoData!: any;

}
