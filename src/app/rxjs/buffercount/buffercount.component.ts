import { Component, OnInit } from '@angular/core'; 
import {map} from 'rxjs'
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-buffercount',
  templateUrl: './buffercount.component.html',
  styleUrls: ['./buffercount.component.css']
})
export class BuffercountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  

  // ajax is a creation operator like of from etc
   ajax.getJSON('https://jsonplaceholder.typicode.com/posts')
     .pipe(map((response: any) => {
       const data=[];
       for (let resp of response){
        data.push(resp.title);
       } 
       return  data;
     }))
     .subscribe((data) => {
       console.log(data);
     }); 

     ajax({
       url: 'https://jsonplaceholder.typicode.com/posts', 
       method: 'POST', 
       headers: {
         'content-type': 'application/json',
         'nkaka': 'Nkaka Eric'
       }, 
       body: {
         'title': 'I am seeing you now'
       }
     }). subscribe({
       next: (data) => {console.log(data)}
     })
  }
}
