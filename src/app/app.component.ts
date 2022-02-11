import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './route/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 't-project';  

  constructor(private authService: AuthServiceService) {

  } 

  login() {
    this.authService.login(); 
  }

  logout() {
    this.authService.logout();
  }


}
