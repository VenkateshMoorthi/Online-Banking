import { Component, OnInit,ViewChild } from '@angular/core';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {ShowHideInput } from './show-hide-input';
import { Router} from '@angular/router';
import {SignUpService} from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  show=false;
  firstname = new FormControl('');
  lastname =new FormControl('');
  phone= new FormControl('');
  email= new FormControl('');
  username= new FormControl('');
  password= new FormControl('');
  signupForm:FormGroup;
  
  @ViewChild(ShowHideInput) input:ShowHideInput;
  constructor(private fb:FormBuilder,private router:Router,private signupservice:SignUpService) { 
  }

  ngOnInit() {
    this.signupForm=this.fb.group({
      firstname:this.firstname,
      lastname:this.lastname,
      phone:this.phone,
      email:this.email,
      username:this.username,
      password:this.password
    });
  }

  showPassword(){
    this.show=!this.show;

    if(this.show)
      this.input.changeType('text');
    else
      this.input.changeType('password');  

  }

  signUp(){
    
   this.signupservice.signUp(this.signupForm.value).subscribe(x=>{
     this.username.setErrors({
       UsernameExists: x.username
     });
     this.email.setErrors({
       EmailExists:x.email
     });
     if(x.email == false && x.username == false){
       this.router.navigate(['signin']);
       console.log("route");
     }
    },err=>{console.log(err)});
    console.log(this.signupForm.value);
  }

  cancel(){
    this.router.navigate(['signin']);
  }

}
