import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions } from '@angular/http';

@Injectable()
export class UserfrontService {

  private _url='http://localhost:8080/userfront'
  constructor(private http:Http) { }

  getBalanceDetaisl(id){
    return this.http.post(this._url,JSON.stringify(id),this.jwt())
                    .map(data=>data.json());

  }

  private jwt() {
        // create authorization header with jwt token
        let currentUser = localStorage.getItem('currentUser');
        if (currentUser ) {
            let headers = new Headers({ 
              'Authorization':  currentUser,
              'Content-Type': 'application/json'
           });
            return new RequestOptions({ headers: headers });
        }
    }
}
