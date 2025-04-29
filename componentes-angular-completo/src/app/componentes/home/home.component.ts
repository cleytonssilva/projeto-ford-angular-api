// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-home',
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css',]
// })
// export class HomeComponent {

// }

import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule,FormsModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tables: any[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.loadTables();
  }

  loadTables(): void {
    this.databaseService.getTables().subscribe({
      next: (data) => {
        this.tables = data;
      },
      error: (err) => {
        console.error('Erro ao carregar tabelas:', err);
      }
    });
  }
}
