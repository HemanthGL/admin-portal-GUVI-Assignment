import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private router: Router){}

  /**
   * 
   * @returns Validator Function for Registration form
   * @description Custom Validator Fn for Validating password, confirm password form controls
   */
  passwordConfirm(): ValidatorFn {
    return (ctrl: AbstractControl): ValidationErrors | null => {
      let pwd = ctrl.get('password');
      let confirmPwd = ctrl.get('confirmPwd')

      return pwd && confirmPwd && pwd.value !== confirmPwd.value ? { confirm: true } : null;
    }
  }

  registerF!: FormGroup;

  ngOnInit(){
    
    this.registerF = this.fb.group({
      userName: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)]],
      password: ['', 
      [
        Validators.required,
        Validators.minLength(8)
      ]],
      confirmPwd: ['', [
        Validators.required,
      ]], 
    }, {
      validators: this.passwordConfirm()
    })

  }

  /**
   * 
   * @param event Mouse click event on Submit button
   * @description redirects to users page on succesfuly submission of Form
   */
  onSubmit(event: MouseEvent){
    this.router.navigate(['/users'])
  }
}
