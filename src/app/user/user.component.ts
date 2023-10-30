import { Component } from '@angular/core';
import { IUser } from 'src/interfaces/user';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: Array<IUser>;

  constructor(private router: Router, private userService: UsersService){
    this.users = this.userService.users
  }
  
  editUser(event: MouseEvent){
    let id:string = (event.target as HTMLInputElement).id

    let userIdx: number = parseInt(id.substring(5))
    // console.log(prodIdx )
    // console.log('is the event')
    this.router.navigate(['/user/edit/'+ userIdx])
  }
  viewUser(event: MouseEvent){
    let id:string = (event.target as HTMLInputElement).id

    let userIdx: number = parseInt(id.substring(5))
    // console.log(prodIdx )
    // console.log('is the event')
    this.router.navigate(['/user/'+ userIdx])
  }

  addUser():void{
    this.router.navigate(['/user/create'])
  }

}
