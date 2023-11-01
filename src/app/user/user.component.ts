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
  
  /**
   * 
   * @param event Clicking Edit User Button
   * @description Event Handler for Edit User Button
   */
  editUser(event: MouseEvent){
    let id:string = (event.target as HTMLInputElement).id

    let userIdx: number = parseInt(id.substring(5))
    this.router.navigate(['/user/edit/'+ userIdx])
  }

  /**
   * 
   * @param event Clicking View User Button
   * @description Event Handler for View User Button
   */
  viewUser(event: MouseEvent){
    let id:string = (event.target as HTMLInputElement).id

    let userIdx: number = parseInt(id.substring(5))
    this.router.navigate(['/user/'+ userIdx])
  }

  /**
   * @description Routes to the Create User Component
   */
  addUser():void{
    this.router.navigate(['/user/create'])
  }

}
