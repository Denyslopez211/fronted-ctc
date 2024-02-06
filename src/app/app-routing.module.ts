import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateGuard, PublicGuard } from './auth/guards';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [PublicGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'convert',
    canActivate: [PrivateGuard],
    loadChildren: () =>
      import('./convert/convert.module').then((m) => m.ConvertModule),
  },
  {
    path: 'history',
    canActivate: [PrivateGuard],
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryModule),
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
