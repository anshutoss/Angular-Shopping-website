import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {RegisterService} from "./register.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted!:boolean;
  errorMsg:string=""
  
  constructor(private formBuilder: FormBuilder,private route:Router,private http:RegisterService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phoneNo: ['', [Validators.required, Validators.minLength(10)]],
      emailID: ['',  [Validators.required,   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') ]],
      password: ['',[ Validators.required, Validators.minLength(8) ]],
    
    });
  }
  register()
{
  this.http.register(this.registerForm.value).subscribe({
    next:data=>this.route.navigate(["/login"]),
    error:err=>this.errorMsg=err.status
  })
}
}
