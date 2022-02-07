import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {  
  @Output() messageToParent = new EventEmitter(); 
  @Input() parentMessage: any;

  KidMessage = "Here displayed in parent."
  
  user = {
    name: "Nkaka", 
    id: 6464,
    location: "Kigali"
  }
  constructor() { }

  ngOnInit(): void {  

  this.messageToParent.emit(this.user);    
 
  }

}
