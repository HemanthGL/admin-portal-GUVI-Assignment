import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoundOffsets } from '@popperjs/core/lib/modifiers/computeStyles';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private fb: FormBuilder){}

  fg! : FormGroup

  ngOnInit(){
    this.fg = this.fb.group({
      userName: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
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
