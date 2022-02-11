import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from 'src/materials/materials.module';
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
import { UsersComponent } from './route/users/users.component';
import { CategoryComponent } from './route/category/category.component';
import { UserComponent } from './route/user/user.component';
import { EditUserComponent } from './route/edit-user/edit-user.component';
import { PageNotFoundComponent } from './route/page-not-found/page-not-found.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MTableComponent } from './learnMat/m-table/m-table.component';

@NgModule({
  declarations: [
    AppComponent,
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
    UsersComponent,
    CategoryComponent,
    UserComponent,
    EditUserComponent,
    PageNotFoundComponent,
    DataTableComponent,
    MTableComponent,
 

  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule, 
    BrowserAnimationsModule,  
    MaterialsModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }