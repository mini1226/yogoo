import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ClasificationComponent } from './clasification/clasification.component';
import {HomeComponent} from "./home.component";


@NgModule({
  declarations: [
    HomeComponent,
    ClasificationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
