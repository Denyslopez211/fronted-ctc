import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { ConvertRoutingModule } from './convert-routing.module';
import { ConvertLayoutComponent } from './layouts/convert-layout.component';
import { ConvertPageComponent } from './pages/convert-page.component';

import { ComponentModule } from '../components/component.module';

@NgModule({
  declarations: [ConvertLayoutComponent, ConvertPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ConvertRoutingModule,
    ComponentModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
})
export class ConvertModule {}
