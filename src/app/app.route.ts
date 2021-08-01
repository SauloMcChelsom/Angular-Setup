import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./page/user/_home/_home.module').then(m => m.HomeModule) 
  },
  {
    path: 'angular-material-ui',
    loadChildren: () => import('./component/angular-material-ui-component/angular-material-ui.module').then(m => m.AngularMaterialUIModule) 
  },
  {
    path: 'loading',
    loadChildren: () => import('./component/loading/loading.module').then(m => m.LoadingModule) 
  },
  {
    path: 'forbidden',
    loadChildren: () => import('./component/erros/forbidden/forbidden.module').then(m => m.ForbiddenModule) 
  },
  {
    path: 'unauthorized',
    loadChildren: () => import('./component/erros/unauthorized/unauthorized.module').then(m => m.UnauthorizedModule) 
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./component/erros/notfound/notfound.module').then(m => m.PageNotFoundModule) 
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
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
