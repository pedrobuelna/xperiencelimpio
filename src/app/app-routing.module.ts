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
  {
    path: 'habitaciones',
    loadChildren: () => import('./habitaciones/habitaciones.module').then( m => m.HabitacionesPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'parking',
    loadChildren: () => import('./parking/parking.module').then( m => m.ParkingPageModule)
  },
  {
    path: 'listadoroomservice',
    loadChildren: () => import('./listadoroomservice/listadoroomservice.module').then( m => m.ListadoroomservicePageModule)
  },
  {
    path: 'menuconcierge',
    loadChildren: () => import('./menuconcierge/menuconcierge.module').then( m => m.MenuconciergePageModule)
  },
  {
    path: 'menusereia',
    loadChildren: () => import('./menusereia/menusereia.module').then( m => m.MenusereiaPageModule)
  },
  {
    path: 'menuquickfit',
    loadChildren: () => import('./menuquickfit/menuquickfit.module').then( m => m.MenuquickfitPageModule)
  },
  {
    path: 'iniciologueado',
    loadChildren: () => import('./iniciologueado/iniciologueado.module').then( m => m.IniciologueadoPageModule)
  },
  {
    path: 'menulogueado',
    loadChildren: () => import('./menulogueado/menulogueado.module').then( m => m.MenulogueadoPageModule)
  },
  {
    path: 'valetparking',
    loadChildren: () => import('./valetparking/valetparking.module').then( m => m.ValetparkingPageModule)
  },
  {
    path: 'terminostxt',
    loadChildren: () => import('./terminostxt/terminostxt.module').then( m => m.TerminostxtPageModule)
  },
  {
    path: 'mensajegerente',
    loadChildren: () => import('./mensajegerente/mensajegerente.module').then( m => m.MensajegerentePageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'nomolestar',
    loadChildren: () => import('./nomolestar/nomolestar.module').then( m => m.NomolestarPageModule)
  },
  {
    path: 'mensajerecepcion',
    loadChildren: () => import('./mensajerecepcion/mensajerecepcion.module').then( m => m.MensajerecepcionPageModule)
  },
  {
    path: 'landingsereia',
    loadChildren: () => import('./landingsereia/landingsereia.module').then( m => m.LandingsereiaPageModule)
  },
  {
    path: 'landingquickfit',
    loadChildren: () => import('./landingquickfit/landingquickfit.module').then( m => m.LandingquickfitPageModule)
  },
  {
    path: 'avisoprivacidad',
    loadChildren: () => import('./avisoprivacidad/avisoprivacidad.module').then( m => m.AvisoprivacidadPageModule)
  },
  {
    path: 'reservacion',
    loadChildren: () => import('./reservacion/reservacion.module').then( m => m.ReservacionPageModule)
  },
  {
    path: 'datosreservacion',
    loadChildren: () => import('./datosreservacion/datosreservacion.module').then( m => m.DatosreservacionPageModule)
  },
  {
    path: 'itinerario',
    loadChildren: () => import('./itinerario/itinerario.module').then( m => m.ItinerarioPageModule)
  },
  {
    path: 'politicascancelacion',
    loadChildren: () => import('./politicascancelacion/politicascancelacion.module').then( m => m.PoliticascancelacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
