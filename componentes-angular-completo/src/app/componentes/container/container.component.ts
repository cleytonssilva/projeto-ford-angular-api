import { Component } from '@angular/core';
import { CabecalhoComponent } from "../cabecalho/cabecalho.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';


@Component({
  selector: 'app-container',
  imports: [CabecalhoComponent, CommonModule, FormsModule],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css',]
})
export class ContainerComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {

    // Simulação de autenticação
    if (this.email === 'admin@example.com' && this.password === 'password') {
      localStorage.setItem('token', 'fake-jwt-token');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Credenciais inválidas');
    }
  }
}
