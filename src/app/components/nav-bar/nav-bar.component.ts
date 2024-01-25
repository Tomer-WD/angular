import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private alertify: AlertifyService,
              private router: Router){}

isLogedIn:boolean;
  loggedin() {
    return localStorage.getItem('token');
  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success('Successful logged out')
    this.router.navigate(['/login']);
  }
}
