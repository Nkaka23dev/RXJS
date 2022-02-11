import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Rxjs2Component } from '../rxjs2/rxjs2.component';

@Component({
  selector: 'app-rxjs1',
  templateUrl: './rxjs1.component.html',
  styleUrls: ['./rxjs1.component.css']
})
export class Rxjs1Component implements OnInit, AfterViewInit{ 
  @ViewChild(Rxjs2Component) childmessage!: Rxjs2Component;  

  message1: any; 
  parentMessage = "hello child, i heard that you are called rxjs1!"

  constructor() { } 

  ngAfterViewInit(): void {
   this.message1 = this.childmessage.rxjs1message
  } 
  newUser: any;

  agent! : any; 

  ngOnInit(): void { 
  //   this.agent = new Observable((observer) => { 
  //     try {
  //     for (let i = 0; i<=5; i++){ 
  //       setTimeout(() => {
  //         observer.next(i);
  //       }, 3000)
  //     }
  //   }
  //    catch (e) {
  //    observer.error(e);
  //    } 
  //   //  observer.complete(); 
  //   }); 
  // let observer= {
  //   next: (response: any) => {
  //     console.log(response);
  //   },
  //   error: (err: any) => {
  //     console.log(err);
  //   },
  //  //  complete: () => {s
  //  //    console.log('Done!');
  //  //  },
  // }
  //  this.agent.subscribe(observer); 

  } 
  getUser(event: any) {
   this.newUser = event;
  }

}
