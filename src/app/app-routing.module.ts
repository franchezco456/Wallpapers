import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectLoggedInTo ,redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const isloggedIn = () => redirectLoggedInTo(['/home']);
const isNotLoggedIn = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard], data: { authGuardPipe: isNotLoggedIn }
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthGuard], data: { authGuardPipe: isloggedIn }
  },
  {
    path: 'updater',
    loadChildren: () => import('./pages/updater/updater.module').then( m => m.UpdaterPageModule),
    canActivate: [AuthGuard], data: { authGuardPipe: isNotLoggedIn }
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
