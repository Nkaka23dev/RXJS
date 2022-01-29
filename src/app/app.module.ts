import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from 'src/materials/materials.module';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { FilterUserdComponent } from './users/filter-userd/filter-userd.component';
import { Rxjs1Component } from './rxjs/rxjs1/rxjs1.component';
import { Rxjs2Component } from './rxjs/rxjs2/rxjs2.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ParentComponent,
    ChildComponent,
    RxjsLearningComponent,
    ListUsersComponent,
    FilterUserdComponent,
    Rxjs1Component,
    Rxjs2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    MaterialsModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
