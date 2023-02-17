import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'annonces',
    loadChildren: () => import('./annonces/annonces.module').then( m => m.AnnoncesPageModule)
  },
  {
    path: 'annonce-details/:id',
    loadChildren: () => import('./annonce-details/annonce-details.module').then( m => m.AnnonceDetailsPageModule)
  },
  {
    path: 'add-annonce',
    loadChildren: () => import('./add-annonce/add-annonce.module').then( m => m.AddAnnoncePageModule)
  },  {
    path: 'mes-annonces',
    loadChildren: () => import('./mes-annonces/mes-annonces.module').then( m => m.MesAnnoncesPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
