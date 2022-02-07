import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, filter, interval, map, mergeMap, Observable, of, Subject, subscribeOn, Subscription} from 'rxjs';  


@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component implements OnInit { 
  timeConsoleSubScribe!: Subscription; 
  timerData: number[] = []; 
  timeBrowserSubscribe!: Subscription; 

  constructor() { } 

  ngOnInit(): void { 
  // let subject$ = new Subject<number>();  

  //  subject$.subscribe((result) => {
  //    console.log("Results 1 ", result); 
  //  })
  //  subject$.next(1); 

  //  subject$.subscribe((result) => {
  //    console.log("Results 2 ", result)
  //  }) 

  //  subject$.next(2); 

  // let BehaviorSubject$ = new BehaviorSubject<any>(0); 
   
  // BehaviorSubject$.subscribe((data) => {
  //   console.log("Result1 ", data)
  // }) 
  // BehaviorSubject$.next(1); 

  // BehaviorSubject$.subscribe((data) => {
  //   console.log("Result2 ", data)
  // }) 
  // BehaviorSubject$.next(2);  
   
  let subject$ = new BehaviorSubject<number>(0);
  
  subject$.subscribe((data: any) => {
    console.log("Observer1", data); 
  })  

  subject$.next(2);
  subject$.next(4);

  subject$.subscribe((data: any) => {
    console.log("Observer 2 printed ", data); 
  })  

  subject$.next(34);
  
  }

}
