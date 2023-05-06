import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ClasificationComponent } from './clasification/clasification.component';
import {HomeComponent} from "./home.component";
import { ModalviewComponent } from './modalview/modalview.component';
import { GuideComponent } from './guide/guide.component';


@NgModule({
  declarations: [
    HomeComponent,
    ClasificationComponent,
    ModalviewComponent,
    GuideComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
