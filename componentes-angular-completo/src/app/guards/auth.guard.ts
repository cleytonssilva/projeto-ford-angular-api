import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = sessionStorage.getItem('token');
    if (token) {
      // Token existe, acesso permitido
      return true;
    } else {
      // Token não existe, redireciona para login
      this.router.navigate(['/login']);
      return false;
    }
  }
}

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

