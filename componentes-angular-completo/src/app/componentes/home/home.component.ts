import { Component } from '@angular/core';
import { ScrollNavBarComponent } from '../scroll-nav-bar/scroll-nav-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import{ OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [ScrollNavBarComponent,CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})
export class HomeComponent {

}



