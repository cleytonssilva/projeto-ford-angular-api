import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scroll-nav-bar',
  imports: [],
  templateUrl: './scroll-nav-bar.component.html',
  styleUrls: ['./scroll-nav-bar.component.css']
})
export class ScrollNavBarComponent {
  constructor(private router: Router) {}

  logout() {
    sessionStorage.removeItem('token');
    localStorage.removeItem('logarAuto');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
