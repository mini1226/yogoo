import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../../core/service/user/user.service";
import {AlertService} from "ngx-alerts";
import {NgxSpinnerService} from "ngx-spinner";



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService,
              private spinner: NgxSpinnerService) {
  }


  get email(): any {
    return this.signInForm.get('email');
  }

  get password(): any {
    return this.signInForm.get('password');
  }

  ngOnInit(): void {
  }

  signIn( ): Promise<boolean> {
    return new Promise(resolve => {
      this.spinner.show();
      this.userService.signIn(this.signInForm.value)
        .subscribe((res: any) => {
          // const user = (res.userId, res.firstName, res.email);
          // console.log(user);
          // sessionStorage.setItem('user', JSON.stringify(user));
          sessionStorage.setItem('token', JSON.stringify(res.token));
          // console.log(sessionStorage.user);
          this.alertService.success('User Logged In successfully');
          this.router.navigate(['/start']);
          this.spinner.hide();
          resolve(true);
        }, (error: any) => {
          console.log(error.error);
          if (error.error.message === 'Login failed!, Invalid Credentials') {
            this.alertService.danger('Login failed!, Invalid Credentials');
          } else {
            this.alertService.danger('Login failed!, Invalid Credentials');
          }
          resolve(false);
          this.spinner.hide();
        });
    });
  }
}
