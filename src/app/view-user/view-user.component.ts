import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUser } from 'src/interfaces/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  user!: IUser;
  constructor(private userServ: UsersService, private activatedRoute: ActivatedRoute){

  }
  
  id!: number;

  ngOnInit(){
    // this.id = 
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']
    })

    this.user = this.userServ.getUserById(this.id);
  }

}
