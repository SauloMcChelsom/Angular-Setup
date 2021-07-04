import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./page/user/_home/_home.module').then(m => m.HomeModule) 
  },
  {
    path: 'about',
    loadChildren: () => import('./page/user/about/about.module').then(m => m.AboutModule) 
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoute {}
