import { Component, OnInit, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { HistoryService } from '../services/history.service';
import { AuthService } from '../../auth/services/auth.service';
import { HistoryConvert } from '../interfaces/history-convert.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent implements OnInit {
  private historyService = inject(HistoryService);
  private router = inject(Router);
  private modal = inject(ToastrService);
  private authService = inject(AuthService);

  public histories: HistoryConvert[] = [];

  public displayedColumns: string[] = [
    'username',
    'rol',
    'originAmount',
    'dateConvert',
    'valueUF',
    'valueCLP',
    'date',
  ];

  ngOnInit(): void {
    this.getHistories();
  }

  getHistories() {
    this.historyService.getHistories().subscribe({
      next: (data) => (this.histories = data),
      error: (message) => {
        this.modal.error('Error', message);
        this.authService.logout();
      },
    });
  }

  goToCalculate() {
    this.router.navigateByUrl('/convert');
  }
}
