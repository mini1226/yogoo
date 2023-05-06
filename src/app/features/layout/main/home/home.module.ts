import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ClasificationComponent } from './clasification/clasification.component';
import {HomeComponent} from "./home.component";
import { ModalviewComponent } from './modalview/modalview.component';
import { GuideComponent } from './guide/guide.component';
import {MatDialogModule} from "@angular/material/dialog";
import { MultiPersonComponent } from './multi-person/multi-person.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent,
    ClasificationComponent,
    ModalviewComponent,
    GuideComponent,
    MultiPersonComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
