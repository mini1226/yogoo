import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TrackService} from "../../../../../core/service/track/track.service";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent {

  // updateForm = new FormGroup({
  //   firstName: new FormControl('', [Validators.required]),
  //   lastName: new FormControl('', [Validators.required]),
  //   email: new FormControl(''),
  // });
  //
  //
  // get firstName(): any {
  //   return this.updateForm.get('firstName');
  // }
  //
  // get lastName(): any {
  //   return this.updateForm.get('lastName');
  // }
  //
  // get email(): any {
  //   return this.updateForm.get('email');
  // }


  userId:any;
  currentFirstName:any;
  currentLastName:any;
  currentEmail:any;

  userPosesData: any[] = [];

  constructor(
              private trackService: TrackService
  ) {}

  async ngOnInit(): Promise<any> {
    await this.getUser();
    await this.getHistory();
  }

  getUser() {
    this.userId= sessionStorage.getItem('userId'),
    this.currentFirstName=sessionStorage.getItem('firstName'),
    this.currentLastName=sessionStorage.getItem('lastName'),
    this.currentEmail=sessionStorage.getItem('email')
  }


  async getHistory(): Promise<any> {
    // console.log(this.signUpForm.value);
    const user = {
      'user_id': this.userId
    }
    this.trackService.track(user).subscribe((res: any) => {
      console.log(res);
      this.userPosesData = res;
    });
  }



}
