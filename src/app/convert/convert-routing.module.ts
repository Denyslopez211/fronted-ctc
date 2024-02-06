import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertLayoutComponent } from './layouts/convert-layout.component';
import { ConvertPageComponent } from './pages/convert-page.component';
import { PrivateGuard } from '../auth/guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [PrivateGuard],
    component: ConvertLayoutComponent,
    children: [
      { path: 'calculate', component: ConvertPageComponent },
      { path: '**', redirectTo: 'calculate' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertRoutingModule {}
