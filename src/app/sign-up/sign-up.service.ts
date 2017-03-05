import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {User} from '../model/user';

@Injectable()
export class SignUpService {

  private _url = "http://localhost:8080/signup";
  constructor(private http:Http) { }

  signUp(user:User){
    let headers1 = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this._url,JSON.stringify(user),{headers:headers1})
                    .map(data=>data.json());
  }

  signupValidation(email:string){
    let headers1 = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this._url+"/"+email,{headers:headers1});
  }

  signupUSernameValidation(username:string){
    let headers1 = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this._url+"/username/"+username,{headers:headers1});
  }

  private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 
              'Authorization':  currentUser.token,
              'Content-Type': 'application/json'
           });
            return new RequestOptions({ headers: headers });
        }
    }

}
