import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  // {path: '', pathMatch: 'full', loadChildren: () => import('../main/main.module').then(m => m.MainModule)},
  {path:'', pathMatch:'full', component: MainComponent},
  {path: 'start', component: MainComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
