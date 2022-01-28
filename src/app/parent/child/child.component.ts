import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit { 
  @Input() reveiveData : any; 
  @Output() ChildDataPhaseTwo = new EventEmitter<any>()  

  users= {
    name: "Nkaka Eric", 
    age: 23, 
    city: 'Kigali'
  }
 
  childFirstData = "I am a child data displayed in parent."

  constructor() {    

  }
  ngOnInit(): void { 
   
    this.ChildDataPhaseTwo.emit(this.users)
  
  }

}
