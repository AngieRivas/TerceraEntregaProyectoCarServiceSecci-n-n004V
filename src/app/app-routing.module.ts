import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {IngresadoGuard} from './services/bandera.guard'; 

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inscribirse',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'Agregar-servicio',
    loadChildren: () => import('./pages/Agregar-servicio/action-sheet.module').then( m => m.ActionSheetPageModule),
    canActivate:[IngresadoGuard]
  },

  {
    path: 'quienes',
    loadChildren: () => import('./pages/quienes/quienes.module').then( m => m.QuienesPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'agendar',
    loadChildren: () => import('./pages/agendar/agendar.module').then( m => m.AgendarPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'inscribirse',
    loadChildren: () => import('./pages/inscribirse/inscribirse.module').then( m => m.InscribirsePageModule)
  },
  {
    path: 'modalpopup',
    loadChildren: () => import('./pages/modalpopup/modalpopup.module').then( m => m.ModalpopupPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'cerrarsesion',
    loadChildren: () => import('./pages/cerrarsesion/cerrarsesion.module').then( m => m.CerrarsesionPageModule),
    canActivate:[IngresadoGuard]
  },

  {
    path: 'listaragendamiento',
    loadChildren: () => import('./pages/listaragendamiento/listaragendamiento.module').then( m => m.ListaragendamientoPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[IngresadoGuard]
  },




  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
