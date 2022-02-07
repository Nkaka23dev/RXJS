import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import {RouterModule, Routes} from '@angular/router';

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
import { Rxjs3Component } from './rxjs/rxjs3/rxjs3.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { BufferComponent } from './rxjs/buffer/buffer.component';
import { BuffercountComponent } from './rxjs/buffercount/buffercount.component';
import { SwitchMapComponent } from './rxjs/switch-map/switch-map.component';
import { SubjectsComponent } from './rxjs/subjects/subjects.component';
import { Subject2Component } from './rxjs/subject2/subject2.component';
import { HomeComponent } from './route/home/home.component';
import { CategoryComponent } from './route/category/category.component';
import { UsersComponent } from './route/users/users.component';
import { UserComponent } from './route/user/user.component';   

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  { path: 'category', component: CategoryComponent },
];

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
    Rxjs2Component,
    Rxjs3Component,
    Parent2Component,
    Child2Component,
    BufferComponent,
    BuffercountComponent,
    SwitchMapComponent,
    SubjectsComponent,
    Subject2Component,
    HomeComponent,
    CategoryComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,  
    MaterialsModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
