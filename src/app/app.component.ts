import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs'; 
import { ajax } from 'rxjs/ajax';
import {map, mergeMap, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 't-project';
}
