import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidemenuPage } from './sidemenu.page';

const routes: Routes = [
  {
    path: '',
    component: SidemenuPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./userslist/userslist.module').then( m => m.UserslistPageModule),
      },
      {
        path: 'arq',
        loadChildren: () => import('./arq/arq.module').then( m => m.ArqPageModule)
      },
    ]
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidemenuPageRoutingModule { }
