import { Injectable } from '@angular/core';
import { IFormUser } from 'src/interfaces/form-user';
import { IUser } from 'src/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<IUser> = [
    {
      id: 1,
      firstName: "Naomi",
      secondName: "Osaka",
      contactNo: 1234567890,
      emailId: "Osaka@gmail.com",
      photo: "https://cdn-icons-png.flaticon.com/512/3176/3176151.png",
      billingAddress: "Apt. 280 247 Racheal Spur, Lake Lita, TN 02827"
    },
    {
      id: 2,
      firstName: "Roger",
      secondName: "Federer",
      contactNo: 7382916327,
      emailId: "rogerfed@gmail.com",
      photo: "https://cdn-icons-png.flaticon.com/512/3176/3176151.png",
      billingAddress: "207 McDermott Brook, Andersonport, MD 77492"
    },
    {
      id: 3,
      firstName: "Michio",
      secondName: "Kaku",
      contactNo: 8172839121,
      emailId: "MichioK@gmail.com",
      photo: "https://cdn-icons-png.flaticon.com/512/3176/3176151.png",
      billingAddress: "Suite 542 996 Evie Square, Port Elzahaven, ID 85359"
    }
  ]
  
  constructor() { }

  /**
   * 
   * @param id : user's Unique ID
   * @returns User : Object of User details
   * @description To get the user with specific UserID
   */
  getUserById(id: number): IUser{
    let data = this.users.find((ele: IUser) => ele.id == id)!
    return data;
    // TODO: Add edge case, user not Found
  }

  /**
   * 
   * @param id unique User ID
   * @returns index of user in UserArray
   */
  findUserIndex(id: number): number{
    let idx = this.users.findIndex((user: IUser) => user.id == id)

    return idx
  }

  /**
   * 
   * @param id : user's Unique ID
   * @param updatedUser : Object with updated details to be edited with.
   */
  editUserById(id: number, updatedUser: IUser): void{
    let idx: number = this.users.findIndex((user: IUser) => user.id == id);

    if (idx == -1){
      // handle case by printing msg on screeen
    } else {
      this.users[idx] = updatedUser;
    }
  }

  /**
   * 
   * @param id : User's Unique ID
   */
  deleteUserById(id: number):void {
    let idx: number = this.users.findIndex((user: IUser) => user.id == id);
    
    if (idx != -1)
      this.users.splice(idx, 1);

  }

  /**
   * 
   * @returns : total number of Users recorded
   */
  getUsersLength():number{
    return this.users.length;
  }

  /**
   * 
   * @param user : new User Object to be added
   */
  addUser(user: IUser){
    this.users.push(user)
  }

  /**
   * 
   * @param userId unique UserID of user
   * @param formData Data from form for User Details
   * @returns status Code after editing record
   */
  editUser(userId: number, formData: IFormUser){

    let userObj:IUser = this.getUserById(userId)
    if (formData.firstName == userObj.firstName && formData.lastName ==  userObj.secondName && formData.address == userObj.billingAddress && parseInt(formData.contact) == userObj.contactNo){
      return -1;
    } else {
      let idx = this.findUserIndex(userId)

      if (idx == -1)
        return -1
      else {
        this.users[idx] = {
          ...this.users[idx],
          firstName : formData.firstName,
          secondName : formData.lastName,
          billingAddress : formData.address,
          emailId : formData.emailId,
          contactNo : parseInt(formData.contact),
        }
        return 1
      }
    }
  }

}
