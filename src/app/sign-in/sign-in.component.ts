import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SignInService } from './sign-in.service';
import { Headers, Response } from '@angular/http'
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  sub;

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5)]);

  password = new FormControl('', [
    Validators.required
  ]);

  //rememberme = new FormControl('');

  signinForm: FormGroup;
  constructor(private fb: FormBuilder,
    private signInService: SignInService,
    private router: Router) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      username: this.username,
      password: this.password,
    });
  }

  signIn() {
    this.signInService.signInService(this.signinForm.value)
      .subscribe((data) => {
        let token = data.token;
        
        if (data.invlalidCredentials){
          this.signinForm.setErrors({
            invalidCredentials:data.invlalidCredentials
          })
        }else{
         this.signinForm.setErrors({
            invalidCredentials:data.invlalidCredentials
          })
         if (token) {
            localStorage.setItem('currentUser', token);
            this.router.navigate(['home',data.userId]);
            this.signInService.getDetails()
                              .subscribe(data=>{
                                console.log(data);
                              })
        }
        
        console.log(data);
      }


    console.log(this.signinForm.value);
  });
  }

  routeTo() {
    console.log('success');
    this.router.navigate(['signup']);
  }

}
