import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ClasificationComponent } from './clasification/clasification.component';
import {HomeComponent} from "./home.component";
import { GuideComponent } from './guide/guide.component';
import { MultiPersonComponent } from './multi-person/multi-person.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent,
    ClasificationComponent,
    GuideComponent,
    MultiPersonComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
