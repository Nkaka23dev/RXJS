import { AfterViewInit, Component, OnInit } from '@angular/core';
import { buffer, fromEvent, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit, AfterViewInit{
   bufferData:number[] = []; 
   showData$!: Observable<Event>;
  constructor() { }

  ngOnInit(): void {
  }  
  ngAfterViewInit() {
    this.showData$ = fromEvent(document.getElementById('showButton')!, 'click');
   }

  startInterval(){ 
    interval(1000).pipe(buffer(this.showData$)).subscribe({
      next: (response: any) => {
       this.bufferData.push(...response);
       console.log(response);
      }
    })

  }

}
