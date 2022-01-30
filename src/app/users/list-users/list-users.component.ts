import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit { 

  parentData = "Hello can you see this from parent."; 

  receiveData: any;
 
  constructor() { }

  ngOnInit(): void {

  } 

  GetFromChild(event: any) {
  this.receiveData = event;
  }

}
