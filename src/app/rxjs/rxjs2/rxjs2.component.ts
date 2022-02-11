import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fromEvent, interval, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-rxjs2',
  templateUrl: './rxjs2.component.html',
  styleUrls: ['./rxjs2.component.css']
})
export class Rxjs2Component implements OnInit, AfterViewInit{  
  @Output() Senduser: any = new EventEmitter(); 
  @Input() receive: any;


  rxjs1message ="Message form rxjs 1";  

  user = {
    id: 1, 
    name: "Nkaka"
  }


  timeconsoleSubcriber!: Subscription;
  timeBrowserSubscriber!: Subscription; 
  timerNumbers: number[] = [];

  constructor() { } 

  ngAfterViewInit(): void {
    // fromEvent(document.getElementById('me')!, 'click'). subscribe(
    //   {
    //     next: (resp: any) => {
    //       console.log(resp)
    //     }
    //   }
    // )
  }
  ngOnInit(): void {  

  this.Senduser.emit(this.user);
  //   const newObservable = new Observable<number>(
  //     (observer) => { 
  //       let i= 0; 
  //       let interval = setInterval(() => {
  //         console.log("interval executing")
  //         observer.next(i)
  //         i++; 
  //       }, 2000); 

  //       return () => {
  //         console.log("Called on unsubscribe.")
  //         clearInterval(interval);
  //       }
  //     }
  //   )
  //  this.timeconsoleSubcriber = newObservable.subscribe({
  //     next: (data) => {
  //     console.log(new Date().toLocaleTimeString()+ ' '+ data); 
  //     }
  //   }); 
  //   this.timeBrowserSubscriber = newObservable.subscribe({
  //     next: (data) => {
  //     this.timerNumbers.push(data);
  //     }
  //   }); 
  //   this.timeconsoleSubcriber.add(this.timeBrowserSubscriber);
  // } 


  // somThin() {
  // this.timeconsoleSubcriber.unsubscribe();
  // console.log("Observable cancelled")
  // } 

  // resumeSub() {
  //   this.ngOnInit();
  // } 
  }
  
}
