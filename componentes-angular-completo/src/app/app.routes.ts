import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./componentes/home/home.component').then(c => c.HomeComponent)
    },

    {
        path: 'login',
        loadComponent: () => import('./componentes/login/login.component').then(c => c.LoginComponent)
    },

    {
        path: 'dashboard',
        loadComponent: () => import('./componentes/dashboard/dashboard.component').then(c => c.DashboardComponent)
    },




];


