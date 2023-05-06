import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ClasificationComponent} from "./clasification/clasification.component";
import {GuideComponent} from "./guide/guide.component";
import {MultiPersonComponent} from "./multi-person/multi-person.component";

const routes: Routes = [
  {path:'', pathMatch:'full', component: ClasificationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'classify', component: ClasificationComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'multi', component: MultiPersonComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
