import { Component, OnInit } from '@angular/core';   

export interface PERIODIC_ELEMENTS {
  position: number, 
  name: string, 
  weight: number, 
  symbol: string, 
}

const EXAMPLE_DATA: PERIODIC_ELEMENTS[] =[
  {position: 1, name: 'Hydrogen', weight: 1.344, symbol: 'H'}, 
  {position: 2, name: 'Hellium', weight: 2.344, symbol: 'He'},
  {position: 3, name: 'Berrylium', weight: 3.344, symbol: 'B'}, 
  {position: 4, name: 'Boron', weight: 4.344, symbol: 'Be'},
  {position: 5, name: 'Carbon', weight: 5.344, symbol: 'C'},
  {position: 6, name: 'Nitrogen', weight: 6.344, symbol: 'N'},
  {position: 7, name: 'florine', weight: 7.344, symbol: 'f'},
]

@Component({
  selector: 'app-m-table',
  templateUrl: './m-table.component.html',
  styleUrls: ['./m-table.component.css']
})
export class MTableComponent{ 
  title = 'Displaying data '; 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = EXAMPLE_DATA;
}
