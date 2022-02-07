import { Component, OnInit } from '@angular/core'; 
import {interval, of,switchMap, filter, map, take} from 'rxjs'
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    of(1, 2, 3)
      .pipe(
       map((value) => {
          return of(value * 10);
        }),
      )
      .subscribe((data) => {
      data.subscribe((response) => {
        console.log(response);
      })
      });  

 of(1,2,3,5)
    .pipe(
      filter((id) => id > 0),
      switchMap((id) => {
        return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
          map((response) => {
            return response.response;
          })
        );
      }), 
      take(5)
    )
    .subscribe((data) => {
      console.log(data);
    });
  }

}
