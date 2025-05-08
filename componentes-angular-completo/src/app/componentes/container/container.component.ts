import { Component } from '@angular/core';
import { CabecalhoComponent } from "../cabecalho/cabecalho.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// import { NgModule } from '@angular/core';


@Component({
  selector: 'app-container',
  imports: [CabecalhoComponent, CommonModule, FormsModule, ],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css',]
})


export class ContainerComponent {
  inputEmail: string = '';
  inputPassword: string = '';
  logarAuto: boolean = false;


  constructor(private router: Router) {
    this.logarAuto = false;
  }

  async ngOnInit() {
    fetch('http://localhost:3000/api/table/user')
      .then(async (response) => {
        const resposta = await response.json();
        this.userData = resposta;
        console.log(this.userData);
        // this.userData = resposta.user_id;
        // console.log(resposta.user_id);
        // for (let i = 0; i < this.userData.length; i++) {
        //   console.log(this.userData[i].user_id);
        //   if (this.userData[i].user_id === this.userData[i].user_id) {
        //     this.email = this.userData[i].user_email;
        //     this.password = this.userData[i].user_password;
        //     console.log(this.email);
        //     console.log(this.password);
            // if (this.email === '
            //   '
            //   && this.password === 'password') {
            //   localStorage.setItem
            //     ('token', 'fake-jwt-token');
            //   this.router.navigate(['/dashboard']);
            // }
            // } else {
            //   alert('Credenciais inválidas');
            // }
        //   }
        // }
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });

  }


  onSubmit() {


    // Simulação de autenticação
    if (this.inputEmail === 'admin@example.com' && this.inputPassword === 'password') {
      // Armazenar o token no localStorage
      localStorage.setItem('token', 'fake-jwt-token');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Credenciais inválidas');
    }
  }

  // logarAuto(logarAuto: boolean = false) {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     this.router.navigate(['/login']);
  //   }
  // }

  logarAutoChange() {
    if (this.logarAuto) {
      localStorage.setItem('token', 'fake-jwt-token');
      this.router.navigate(['/dashboard']);
    } else {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }

  userData!: any;
}
