import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  registerForm : FormGroup = new FormGroup({
    first_name : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    last_name : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    age : new FormControl(null , [Validators.required , Validators.min(16) , Validators.max(80)]) ,
    email : new FormControl(null , [Validators.required , Validators.email]),
    password : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z]{2,5}$/)]),
  })

  submitRegister(formInfo:FormGroup)
  {
    console.log(formInfo.value);
  }

  ngOnInit(): void {
  }

}
