import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listData = "Data From List User component to filter user";
  constructor() { }

  ngOnInit(): void {
  }

}
