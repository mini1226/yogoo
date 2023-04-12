import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'start', pathMatch: "full"},
  {path:'start', loadChildren: () => import('./features/layout/main/main.module').then(m => m.MainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// const routes: Routes = [
//   {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
//   {path: 'sign-in', loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule)},
//   {path: 'main', loadChildren: () => import('./module/page/page.module').then(m => m.PageModule), canActivate: [AuthGuard]},
// ];
