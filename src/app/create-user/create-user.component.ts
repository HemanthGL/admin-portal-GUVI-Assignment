import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { IUser } from 'src/interfaces/user';
import { PHOTO_URL } from 'src/constants/constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(private userServ: UsersService, private router: Router){

  }
  
  userForm = new FormGroup({
    firstName : new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ]),
    contact: new FormControl(' ',[
      Validators.required
    ]),
    emailId: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required
    ])
  })

  userSub?: IUser

  /**
   * @description On Valid Submission of Create User Form
   */
  onSubmit(){

    this.userSub = {
        id : this.userServ.getUsersLength() + 1,
        firstName : this.userForm.controls.firstName.value!,
        secondName : this.userForm.controls.lastName.value!,
        contactNo : parseInt(this.userForm.controls.contact.value!),
        emailId : this.userForm.controls.emailId.value!,
        billingAddress : this.userForm.controls.address.value!,
        photo: PHOTO_URL,
    }
    this.userServ.addUser(this.userSub)

    this.router.navigate(['/users'])
  }
}
