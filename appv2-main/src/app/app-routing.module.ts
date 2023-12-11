import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule), canActivate:[NoAuthGuard]
  },
  {
    path: 'sidemenu',
    loadChildren: () => import('./pages/sidemenu/sidemenu.module').then( m => m.SidemenuPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/sidemenu/userslist/userslist.module').then( m => m.UserslistPageModule),
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./pages/sidemenu/profile/profile.module').then( m => m.ProfilePageModule),
  },
  {
    path: 'arq',
    loadChildren: () => import('./pages/sidemenu/arq/arq.module').then( m => m.ArqPageModule)
  }, 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
