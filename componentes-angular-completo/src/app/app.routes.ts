import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Aplicando o AuthGuard

    // {
    //     path: 'home',
    //     loadComponent: () => import('./componentes/home/home.component').then(c => c.HomeComponent)
    // },

    // {
    //     path: 'login',
    //     loadComponent: () => import('./componentes/login/login.component').then(c => c.LoginComponent),

    // },

    // {
    //     path: 'dashboard',
    //     loadComponent: () => import('./componentes/dashboard/dashboard.component').then(c => c.DashboardComponent),

    //     canActivate: [AuthGuard]
    // },

    // {
    //     path: '',
    //     loadComponent: () => import('./componentes/home/home.component').then(c => c.HomeComponent),

    // },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





