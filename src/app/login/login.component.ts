import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { LoginserviceService } from './loginservice.service';
import {Router} from '@angular/router'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMsg:string=""  
  constructor(private formBuilder: FormBuilder, private loginservie : LoginserviceService, 
    private router :Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailID: ['', Validators.required],
      password: ['', Validators.required],
      
    });
  }
 userLogin(){
  this.errorMsg=""
  this.loginservie.getLoginUsers(this.loginForm.value)
  .subscribe({
    next:data=>this.router.navigate(["/home"]),
    error:err=>this.errorMsg=err.error.message
  })
 }
}
