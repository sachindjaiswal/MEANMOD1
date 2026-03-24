import { Component } from '@angular/core';
import { FormControl, FormGroup , ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  
  standalone:true,
  imports: [ReactiveFormsModule], 
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  loginForm = new FormGroup({
    firstName : new FormControl(""),
    lastName : new FormControl("")

  })

  handleSubmit(){
    console.log(this.loginForm.value);
    console.log(`Hey ${this.loginForm.value.firstName} your form has been submitted`);
    this.loginForm.reset()
    
    
  }
}
