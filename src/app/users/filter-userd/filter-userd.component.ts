import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'filter-userd',
  templateUrl: './filter-userd.component.html',
  styleUrls: ['./filter-userd.component.css']
})
export class FilterUserdComponent implements OnInit {
  
  @Input() data!: String
  constructor() { }

  ngOnInit(): void {
  }

}
