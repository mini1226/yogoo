import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../core/service/user/user.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {AlertService} from "ngx-alerts";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private alertService: AlertService
  ) { }


  get firstName(): any {
    return this.signUpForm.get('firstName');
  }

  get lastName(): any {
    return this.signUpForm.get('lastName');
  }

  get email(): any {
    return this.signUpForm.get('email');
  }

  get password(): any {
    return this.signUpForm.get('password');
  }


  ngOnInit(): void {
  }

  async signUp(): Promise<any> {
    // console.log(this.signUpForm.value);
    this.spinner.show();
    this.signUpForm.markAllAsTouched();
    if (this.signUpForm.valid) {
      this.userService.signup(this.signUpForm.value).subscribe((res: any) => {
        console.log(res);
        this.alertService.success('User registered successfully');
        this.signUpForm.reset();
        this.router.navigate(['/sign-in/sign-in']);
        this.spinner.hide();
      });
    } else {
      this.alertService.warning('User register failed !');
      this.spinner.hide();
    }
  }



}
