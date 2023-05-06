import { Component } from '@angular/core';
import {ClassifyService} from "../../../../../core/service/classify/classify.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {GuideService} from "../../../../../core/service/guide/guide.service";

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent {

  constructor(
    private guideService: GuideService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { }

  async guideTpose(): Promise<boolean> {
    return new Promise(async resolve => {
      await this.spinner.show();
      const name = {
        name: 'TPose'
      }
      console.log(name)
      this.guideService.guide(name).subscribe({
        next:(res)=>{
          resolve(true);
          this.spinner.hide();
        },
        error:() => {
          resolve(false);
          this.spinner.hide();
        }
      });
    });
  }


  async guideTreePose(): Promise<boolean> {
    return new Promise(async resolve => {
      await this.spinner.show();
      const name = {
        name: 'TreePose'
      }
      this.guideService.guide(name).subscribe({
        next:(res)=>{
          resolve(true);
          this.spinner.hide();
        },
        error:() => {
          resolve(false);
          this.spinner.hide();
        }
      });
    });
  }




  async guideWarriorIIPose(): Promise<boolean> {
    return new Promise(async resolve => {
      await this.spinner.show();
      const name = {
        name: 'WarriorIIPose'
      }
      this.guideService.guide(name).subscribe({
        next:(res)=>{
          resolve(true);
          this.spinner.hide();
        },
        error:() => {
          resolve(false);
          this.spinner.hide();
        }
      });
    });
  }




  async guideDogPose(): Promise<boolean> {
    return new Promise(async resolve => {
      await this.spinner.show();
      const name = {
        name: 'DogPose'
      }
      this.guideService.guide(name).subscribe({
        next:(res)=>{
          resolve(true);
          this.spinner.hide();
        },
        error:() => {
          resolve(false);
          this.spinner.hide();
        }
      });
    });
  }




  async guideWarriorPose(): Promise<boolean> {
    return new Promise(async resolve => {
      await this.spinner.show();
      const name = {
        name: 'WarriorPose'
      }
      this.guideService.guide(name).subscribe({
        next:(res)=>{
          resolve(true);
          this.spinner.hide();
        },
        error:() => {
          resolve(false);
          this.spinner.hide();
        }
      });
    });
  }



  async guideTrianglePose(): Promise<boolean> {
    return new Promise(async resolve => {
      await this.spinner.show();
      const name = {
        name: 'TrianglePose'
      }
      this.guideService.guide(name).subscribe({
        next:(res)=>{
          resolve(true);
          this.spinner.hide();
        },
        error:() => {
          resolve(false);
          this.spinner.hide();
        }
      });
    });
  }


  getbackhome() {
    this.router.navigate(['start/home'])
  }
}
