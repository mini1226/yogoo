import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ClasificationComponent} from "./clasification/clasification.component";

const routes: Routes = [
  {path:'', pathMatch:'full', component: ClasificationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'classify', component: ClasificationComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
