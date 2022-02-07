import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs/internal/Observable'; 
import {of, Subject} from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    this.observable(); 
    this.subjectObservable();
  } 

  observable(){
   const onservable$ = new Observable<Number>(
     (observer) => {
       observer.next(1); 
       observer.next(2); 
       observer.next(3); 
       observer.next(4); 
       observer.complete();
     }
   ) 
   onservable$.subscribe({
     next: (response) => {console.log("Observer1", response)},
     error: (error) => {console.log("Observer1", error)}, 
     complete: () => {console.log("Obsever 1 is complete.")}
   });
   onservable$.subscribe(
    {
      next: (response) => {console.log("Observer2", response)},
      error: (error) => {console.log("Observer2", error)}, 
      complete: () => {console.log("Obsever2 is complete.")}
    }
   ); 
  } 
  subjectObservable() {
    let observable$ = of(1,2,3,4); 
    const subject = new Subject<number>();  

    subject.subscribe({
      next: (response) => {console.log("Observer1", response)},
      error: (error) => {console.log("Observer1", error)}, 
      complete: () => {console.log("Obsever 1 is complete.")}
    }); 
    subject.subscribe(
      {
        next: (response) => {console.log("Observer2", response)},
        error: (error) => {console.log("Observer2", error)}, 
        complete: () => {console.log("Obsever2 is complete.")}
      }
     ); 
     observable$.subscribe(subject);
  }

}
