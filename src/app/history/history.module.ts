import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryLayoutComponent } from './layouts/history-layout.component';
import { HistoryPageComponent } from './pages/history-page.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ComponentModule } from '../components/component.module';

@NgModule({
  declarations: [HistoryLayoutComponent, HistoryPageComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    ComponentModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
  ],
})
export class HistoryModule {}
