import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "../../../core/guard/auth.guard";
import {ClasificationComponent} from "./home/clasification/clasification.component";
import {GuideComponent} from "./home/guide/guide.component";
import {MultiPersonComponent} from "./home/multi-person/multi-person.component";
import {TrackComponent} from "./home/track/track.component";

const routes: Routes = [
  {path:'', pathMatch:'full', component: MainComponent},
  {path: 'start', component: MainComponent},
  {path: 'home', component: HomeComponent},
  {path: 'classify', component: ClasificationComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'multi', component: MultiPersonComponent},
  {path: 'track', component: TrackComponent},
];


// const routes: Routes = [
//   {
//     path: '', component: MainComponent, canActivate: [AuthGuard], children: [
//       {path: '', pathMatch: 'full', loadChildren: () => import('../main/main.module').then(m => m.MainModule)},
//       {path: 'start', loadChildren: () => import('../main/home/home.module').then(m => m.HomeModule)},
//       // {path: 'create-quiz', loadChildren: () => import('../create-quiz/create-quiz.module').then(m => m.CreateQuizModule)},
//       // {path: 'categories', loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesModule)},
//       // {path: 'account', loadChildren: () => import('../account/account.module').then(m => m.AccountModule)},
//       // {path: 'about', loadChildren: () => import('../about/about.module').then(m => m.AboutModule)}
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
