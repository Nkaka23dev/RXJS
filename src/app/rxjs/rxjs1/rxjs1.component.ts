import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs1',
  templateUrl: './rxjs1.component.html',
  styleUrls: ['./rxjs1.component.css']
})
export class Rxjs1Component implements OnInit {

  constructor() { } 

  agent! : any; 

  ngOnInit(): void {
    this.agent = new Observable((observer) => { 
      try {
      for (let i = 0; i<=5; i++){ 
        setTimeout(() => {
          observer.next(i);
        }, 3000)
      }
    }
     catch (e) {
     observer.error(e);
     } 
    //  observer.complete(); 
    }); 
  let observer= {
    next: (response: any) => {
      console.log(response);
    },
    error: (err: any) => {
      console.log(err);
    },
   //  complete: () => {s
   //    console.log('Done!');
   //  },
  }
   this.agent.subscribe(observer); 
   this.agent.subscribe(observer);

  }

}
