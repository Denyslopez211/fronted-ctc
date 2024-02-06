import { Component, OnInit, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DateAdapter } from '@angular/material/core';

import { ConvertService } from '../services/convert.service';
import { AuthService } from '../../auth/services/auth.service';
import { HistoryUser } from '../interfaces/history-user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css'],
})
export class ConvertPageComponent {
  private convertService = inject(ConvertService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private modal = inject(ToastrService);
  private authService = inject(AuthService);
  public user = computed(() => this.authService.currentUser());

  public originAmount: string = '';
  public dateConvert: string = '';
  public valueUF: string = '';
  public valueCLP: string = '';

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  public convertForm: FormGroup = this.fb.group({
    dateConvert: ['', [Validators.required]],
    amountConvert: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(50)],
    ],
  });

  create() {
    const { dateConvert, amountConvert } = this.convertForm.value;
    this.convertService.createConvert(amountConvert, dateConvert).subscribe({
      next: (data: any) => {
        this.modal.success('Success', 'Registro exitoso');
        this.originAmount = data.originAmount;
        this.dateConvert = data.dateConvert;
        this.valueUF = data.valueUF;
        this.valueCLP = data.valueCLP;
      },
      error: (message) => {
        this.modal.error('Error', message);
      },
    });
  }
  goToHistories() {
    this.router.navigateByUrl('/history');
  }
}
