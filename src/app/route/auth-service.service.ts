import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements OnInit{ 

  isloggedIn = false;

  constructor() { } 

  ngOnInit(): void {
    
  } 
 login() {
   this.isloggedIn =true; 
 } 
 logout () {
   this.isloggedIn = false;
 }
 isAuthenticated () {
   return new Promise<any>((resolve, reject) => {
     setTimeout(() => {
       resolve(this.isloggedIn);
     }, 1000)
   })
 }
}
