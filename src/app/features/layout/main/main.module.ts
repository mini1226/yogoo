import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {HomeComponent} from "./home/home.component";
import {MultiPersonComponent} from "./home/multi-person/multi-person.component";
import {GuideComponent} from "./home/guide/guide.component";
import {ClasificationComponent} from "./home/clasification/clasification.component";
import { TrackComponent } from './home/track/track.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MultiPersonComponent,
    GuideComponent,
    ClasificationComponent,
    TrackComponent
  ],
    imports: [
        CommonModule,
        MainRoutingModule,
        ReactiveFormsModule
    ]
})
export class MainModule {
}
