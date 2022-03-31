import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'trazo',
    loadChildren: () => import('./trazo/trazo.module').then( m => m.TrazoPageModule)
  },
  {
    path: 'san',
    loadChildren: () => import('./san/san.module').then( m => m.SanPageModule)
  },
  {
    path: 'hid',
    loadChildren: () => import('./hid/hid.module').then( m => m.HidPageModule)
  },
  {
    path: 'cim',
    loadChildren: () => import('./cim/cim.module').then( m => m.CimPageModule)
  },
  {
    path: 'cas',
    loadChildren: () => import('./cas/cas.module').then( m => m.CasPageModule)
  },
  {
    path: 'ent',
    loadChildren: () => import('./ent/ent.module').then( m => m.EntPageModule)
  },
  {
    path: 'az',
    loadChildren: () => import('./az/az.module').then( m => m.AzPageModule)
  },
  {
    path: 'vf',
    loadChildren: () => import('./vf/vf.module').then( m => m.VfPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'enla',
    loadChildren: () => import('./enla/enla.module').then( m => m.EnlaPageModule)
  },
  {
    path: 'prc',
    loadChildren: () => import('./prc/prc.module').then( m => m.PrcPageModule)
  },
  {
    path: 'firma',
    loadChildren: () => import('./firma/firma.module').then( m => m.FirmaPageModule)
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./codigo-qr/codigo-qr.module').then( m => m.CodigoQRPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
