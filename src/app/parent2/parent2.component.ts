import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit, AfterViewInit{
@ViewChild(Child2Component) childData!: Child2Component; 

  getKidMessage!: any; 
  messageReceived!: any; 
  parentMessage ="Receive this message from parent";

  constructor(private changeDetRef: ChangeDetectorRef) { } 
  
  ngOnInit(): void { 
  
  }

  ngAfterViewInit(): void {
    this.getKidMessage = this.childData.KidMessage; 
    console.log(this.getKidMessage); 
    this.changeDetRef.detectChanges();
  } 

  getChildMessage(event: any) {
  this.messageReceived =event.name;
  }


}
