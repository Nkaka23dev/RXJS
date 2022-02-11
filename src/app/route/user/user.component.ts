import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {  

  users!:{id: string, name: string}

  constructor(private activatedRouter: ActivatedRoute, private router: Router)
   { }

  ngOnInit(): void {    
  
    // this.users = {
    //   id: this.activatedRouter.snapshot.params['id'], 
    //   name: this.activatedRouter.snapshot.params['name'] }

    this.activatedRouter.params.subscribe((data) => {
      this.users = {
        id: data['id'], 
        name: data['name']
      }
    })
    }
    editUser() {
       this.router.navigate(['users',this.users.id, this.users.name, 'edit'], {queryParamsHandling: 'preserve'})
    }
  }

