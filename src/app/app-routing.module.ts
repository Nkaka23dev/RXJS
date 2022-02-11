import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  

import { HomeComponent } from './route/home/home.component';
import { UsersComponent } from './route/users/users.component';
import { CategoryComponent } from './route/category/category.component';
import { UserComponent } from './route/user/user.component';
import { EditUserComponent } from './route/edit-user/edit-user.component';
import { PageNotFoundComponent } from './route/page-not-found/page-not-found.component';
import { AuthGuardServiceService } from './route/auth-guard-service.service';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  { 
    path: 'users', component: UsersComponent, 
    canActivateChild: [AuthGuardServiceService],
    children: [
    {path: ':id/:name', component: UserComponent},
    {path: ':id/:name/edit', component: EditUserComponent}
  ]},
  {path: 'category', component: CategoryComponent},  
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
