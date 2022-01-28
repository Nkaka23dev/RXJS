import { AfterViewInit, Component, OnInit } from '@angular/core'; 
import { from, Observable } from 'rxjs';

@Component({
  selector: 'rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {
  agent : any;
  myData : any; 

  user = [
    {id:12, name:'Nkaka', city:'Kigali'},
    {id:16, name:'Bigirimana', city:'Gisenyi'},
    {id:34, name:'Ngaboyamahoro', city:'Kanombe'}, 
  ] 
  promiseData = new Promise((resolve, reject) => {
   setInterval(() => { 
    resolve("promise called")
   }, 6000);
  })
  UserObservable$ = from(this.user);
  promiseObservable$ = from(this.promiseData)

  constructor() {} 

  ngOnInit(): void { 
    
  this.agent = new Observable<any>((observer) => {
    try {
      setInterval(() => {
        observer.next('Nkaka How are you');
      }, 2000);
      setInterval(() => {
        observer.next('Hey!!!');
      }, 3000);

      setInterval(() => {
        observer.next('Nyou');
      }, 6000);
    } catch (e) {
      observer.error(e);
    }
  });

  this.  promiseObservable$.subscribe({
    next: (response: any) => {
      console.log(response), (this.myData = response);
    },
    error: (err: any) => {
      console.log(err);
    },
    complete: () => {
      console.log('Done');
    },
  });
  
     
    //  all about observable
    // this.agents = new Observable(
    //   function (observer) {
    //    try {
    //     setInterval(() => {
    //       observer.next("My first data emitted");
    //     }, 1000);
    //     setInterval(() => {
    //       observer.next("Second Data emitted");
    //     }, 5000);
    //     setInterval(() => {
    //       observer.next("Nkaka how are you doing today");
    //     }, 6000);
    //    }
    //    catch (error) {
    //    observer.error(error)
    //    }
    //   }
    // )
    // this.agents.subscribe((response) => {
    //   this.data = response;
    // })
    // Operators
  }
}
