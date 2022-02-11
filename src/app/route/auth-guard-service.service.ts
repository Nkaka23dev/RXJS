import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate, CanActivateChild{

  constructor(private authservice: AuthServiceService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {  

    // const isLoggedIn = this.authservice.isloggedIn; 

    // if(isLoggedIn) {
    //   return true
    // } 
    // else {
    //   return this.router.navigate(['/']) 
    // }  
   
    return this.authservice.isAuthenticated().then((data) => {
     if(data) {
       return true;
     } 
     else {
       return this.router.navigate(['/'])
     }
    })

  } 
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> { 
  return this.canActivate(route,state);
  }
}
 