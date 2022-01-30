import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'filter-userd',
  templateUrl: './filter-userd.component.html',
  styleUrls: ['./filter-userd.component.css']
})
export class FilterUserdComponent implements OnInit {
  @Input() DataParent: any; 
  @Output() getDataFromChild: any = new EventEmitter();

  posts ={
    title : "Hello first post", 
    date: "June 2022", 
    author: "Nkaka Eric", 
    content: "This is a warm welcome post to you all my people."
  } 
   
  constructor() { }

  ngOnInit(): void {
    this.getDataFromChild.emit(this.posts);
  }

}
