import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../../core/service/user/user.service";



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
             ) {
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
      this.userService.signIn(this.signInForm.value)
        .subscribe((res: any) => {
          // const user = (res.userId, res.firstName, res.email);
          // console.log(res);
          // sessionStorage.setItem('user', JSON.stringify(user));
          sessionStorage.setItem('token', JSON.stringify(res.token));
          sessionStorage.setItem('userId', res.userId);
          sessionStorage.setItem('firstName', res.firstName);
          sessionStorage.setItem('lastName', res.lastName);
          sessionStorage.setItem('email', res.email);
          // console.log(sessionStorage.user);
          this.router.navigate(['/start']);
          resolve(true);
        }, (error: any) => {
          console.log(error.error);
          if (error.error.message === 'Login failed!, Invalid Credentials') {
          } else {
          }
          resolve(false);
        });
    });
  }
}
