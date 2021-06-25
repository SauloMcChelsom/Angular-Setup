import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/user/_home/_home.module').then(m => m.HomeModule) 
  },
  {
    path: 'home',
    loadChildren: () => import('./page/user/_home/_home.module').then(m => m.HomeModule) 
  },
  {
    path: 'about',
    loadChildren: () => import('./page/user/about/about.module').then(m => m.AboutModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoute {}
