import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/guard/auth.guard";

const routes: Routes = [
  {path:'', redirectTo: 'sign-in', pathMatch: "full"},
  {path:'sign-in', loadChildren: () => import('./features/layout/auth/auth.module').then(m => m.AuthModule)},
  {path:'start', loadChildren: () => import('./features/layout/main/main.module').then(m => m.MainModule) , canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


