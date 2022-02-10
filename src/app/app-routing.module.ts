import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
    path: 'imper',
    loadChildren: () => import('./imper/imper.module').then( m => m.ImperPageModule)
  },
  {
    path: 'elec',
    loadChildren: () => import('./elec/elec.module').then( m => m.ElecPageModule)
  },
  {
    path: 'terminacion',
    loadChildren: () => import('./terminacion/terminacion.module').then( m => m.TerminacionPageModule)
  },
  {
    path: 'vf',
    loadChildren: () => import('./vf/vf.module').then( m => m.VfPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
