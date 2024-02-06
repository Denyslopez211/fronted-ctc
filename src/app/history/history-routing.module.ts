import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryLayoutComponent } from './layouts/history-layout.component';
import { HistoryPageComponent } from './pages/history-page.component';
import { PrivateGuard } from '../auth/guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [PrivateGuard],
    component: HistoryLayoutComponent,
    children: [
      { path: 'all', component: HistoryPageComponent },
      { path: '**', redirectTo: 'all' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
