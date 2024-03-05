import { Component } from '@angular/core';
import {ClassifyService} from "../../../../../core/service/classify/classify.service";
import {Router} from "@angular/router";
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
  ) { }

  async guidePose(type:string, pose_id:any): Promise<boolean> {
    return new Promise(async resolve => {
      // await this.spinner.show();
      const name = {
        pose: type
      }
      this.guideService.guide(name).subscribe({
        next:(res)=>{
          resolve(true);
        },
        error:() => {
          resolve(false);
        }
      });

      // await this.spinner.show();
      const track = {
        user_id: sessionStorage.getItem('userId'),
        pose_id: pose_id
      }
      this.guideService.track(track).subscribe({
        next:(res)=>{
          resolve(true);
        },
        error:() => {
          resolve(false);
        }
      });
    });
  }

  //
  // async guideTreePose(): Promise<boolean> {
  //   return new Promise(async resolve => {
  //     await this.spinner.show();
  //     const name = {
  //       pose: 'TreePose'
  //     }
  //     this.guideService.guide(name).subscribe({
  //       next:(res)=>{
  //         resolve(true);
  //         this.spinner.hide();
  //       },
  //       error:() => {
  //         resolve(false);
  //         this.spinner.hide();
  //       }
  //     });
  //   });
  // }
  //
  //
  //
  //
  // async guideWarriorIIPose(): Promise<boolean> {
  //   return new Promise(async resolve => {
  //     await this.spinner.show();
  //     const name = {
  //       pose: 'WarriorIIPose'
  //     }
  //     this.guideService.guide(name).subscribe({
  //       next:(res)=>{
  //         resolve(true);
  //         this.spinner.hide();
  //       },
  //       error:() => {
  //         resolve(false);
  //         this.spinner.hide();
  //       }
  //     });
  //   });
  // }
  //
  //
  //
  //
  // async guideDogPose(): Promise<boolean> {
  //   return new Promise(async resolve => {
  //     await this.spinner.show();
  //     const name = {
  //       pose: 'DogPose'
  //     }
  //     this.guideService.guide(name).subscribe({
  //       next:(res)=>{
  //         resolve(true);
  //         this.spinner.hide();
  //       },
  //       error:() => {
  //         resolve(false);
  //         this.spinner.hide();
  //       }
  //     });
  //   });
  // }
  //
  //
  //
  //
  // async guideWarriorPose(): Promise<boolean> {
  //   return new Promise(async resolve => {
  //     await this.spinner.show();
  //     const name = {
  //       pose: 'WarriorPose'
  //     }
  //     this.guideService.guide(name).subscribe({
  //       next:(res)=>{
  //         resolve(true);
  //         this.spinner.hide();
  //       },
  //       error:() => {
  //         resolve(false);
  //         this.spinner.hide();
  //       }
  //     });
  //   });
  // }
  //
  //
  //
  // async guideTrianglePose(): Promise<boolean> {
  //   return new Promise(async resolve => {
  //     await this.spinner.show();
  //     const name = {
  //       pose: 'TrianglePose'
  //     }
  //     this.guideService.guide(name).subscribe({
  //       next:(res)=>{
  //         resolve(true);
  //         this.spinner.hide();
  //       },
  //       error:() => {
  //         resolve(false);
  //         this.spinner.hide();
  //       }
  //     });
  //   });
  // }


  getbackhome() {
    this.router.navigate(['start/home'])
  }
}
