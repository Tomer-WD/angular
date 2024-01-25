import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  constructor(public authService: AuthService,
              private alertify: AlertifyService,
              private router: Router){}

  onLogin(loginForm: NgForm){
    console.log(loginForm.value)
    const token = this.authService.authUser(loginForm.value)
    if(token) {
      localStorage.setItem('token', token.userName);
      this.alertify.success('Login Successful')
      this.router.navigate(['/']);
    } else {
      this.alertify.error('User id or password is wrong')
    }
  }
}
