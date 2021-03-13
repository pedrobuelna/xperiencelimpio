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
    path: 'xperience',
    loadChildren: () => import('./xperience/xperience.module').then( m => m.XperiencePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'iniciarsesioncodigo',
    loadChildren: () => import('./iniciarsesioncodigo/iniciarsesioncodigo.module').then( m => m.IniciarsesioncodigoPageModule)
  },
  {
    path: 'iniciarsesionreservacion',
    loadChildren: () => import('./iniciarsesionreservacion/iniciarsesionreservacion.module').then( m => m.IniciarsesionreservacionPageModule)
  },
  {
    path: 'iniciarsesionencontrarreservacion',
    loadChildren: () => import('./iniciarsesionencontrarreservacion/iniciarsesionencontrarreservacion.module').then( m => m.IniciarsesionencontrarreservacionPageModule)
  },
  {
    path: 'crearperfil',
    loadChildren: () => import('./crearperfil/crearperfil.module').then( m => m.CrearperfilPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./terminos/terminos.module').then( m => m.TerminosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
