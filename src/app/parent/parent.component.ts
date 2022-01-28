import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit{   
@ViewChild(ChildComponent) message!: ChildComponent; 
 userDetails: any;
 messageDisplay!:string; 
 giveBack = "I am parent who sent data to you!";

 constructor(private changeDetRef: ChangeDetectorRef) {   
  }  
  ngAfterViewInit(): void {

    this.messageDisplay=this.message.childFirstData; 
    console.log(this.messageDisplay);
    this.changeDetRef.detectChanges();
  }

  ngOnInit(): void { 

  }  

  getChildData(event: any){
  this.userDetails = event;
  }

} 

