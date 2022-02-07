import { Component, OnInit } from '@angular/core';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-rxjs3',
  templateUrl: './rxjs3.component.html',
  styleUrls: ['./rxjs3.component.css']
})
export class Rxjs3Component implements OnInit {

  constructor() { } 

  ngOnInit(): void {  

   const newObservable = interval(1000);
    
    newObservable.pipe(
      (filter((number: any) => {
        return number%2==0;
      }, 
      map((number: any) => {
        return number **2;
      }))
      )
    ).subscribe({
      next: (number: any) => {console.log(number);} 
    })
 
  }

}
