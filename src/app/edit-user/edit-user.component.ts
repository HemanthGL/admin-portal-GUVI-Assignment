import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/interfaces/user';
import { PHOTO_URL } from 'src/constants/constants';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  constructor(private userServ: UsersService, private activRoute: ActivatedRoute, private router: Router){
    this.activRoute.params.subscribe((params) => {
      this.id = params['id']
    })
  }

  userEdit!: IUser;

  id!: number;

  userForm: FormGroup = new FormGroup({
    firstName : new FormControl(),
    lastName: new FormControl(),
    contact: new FormControl(),
    emailId: new FormControl(),
    address: new FormControl()
  });

  ngOnInit(){
    this.userEdit = this.userServ.getUserById(this.id)

    this.userForm.patchValue({
      firstName: this.userEdit.firstName,
      lastName: this.userEdit.secondName,
      contact: this.userEdit.contactNo,
      emailId: this.userEdit.emailId,
      address: this.userEdit.billingAddress
    })
  }

  onSubmit(){
    console.log(typeof(this.userForm.value))
    let status = this.userServ.editUser(this.id, this.userForm.value)
    if (status == -1){
      alert('No Changes in details or No such User Registered')
    }
    else{
      this.router.navigate(['/users'])
    }
  }

}
