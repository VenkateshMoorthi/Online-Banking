import { Injectable } from '@angular/core';
import {Http,RequestOptions,Headers} from '@angular/http';

@Injectable()
export class AccountService {

  constructor(private http:Http) { }

  depositAmount(details){
    return this.http.post('http://localhost:8080/deposit',JSON.stringify(details),this.jwt())
  }

  withdrawAmount(details){
    return this.http.post('http://localhost:8080/withdraw',JSON.stringify(details),this.jwt())
  }

  primaryAccountDetails(details){
    return this.http.post('http://localhost:8080/primaryAccount',JSON.stringify(details),this.jwt())
                    .map(data=>data.json());
  }

  savingsAccountDetails(details){
    return this.http.post('http://localhost:8080/savingsAccount',JSON.stringify(details),this.jwt())
                    .map(data=>data.json());
  }

  transferBetweenAccounts(details){
    return this.http.post('http://localhost:8080/betweenAccounts',JSON.stringify(details),this.jwt());
  }

  addRecipient(details){
    return this.http.post('http://localhost:8080/recipient/save',JSON.stringify(details),this.jwt());
  }

  getRecipients(details){
    return this.http.post('http://localhost:8080/recipient/list',JSON.stringify(details),this.jwt())
                    .map(data=>data.json());
  }

  editRecipient(details){
    return this.http.post('http://localhost:8080/recipient/edit',JSON.stringify(details),this.jwt())
                    .map(data=>data.json());
  }

  deleteRecipient(details){
    return this.http.post('http://localhost:8080/recipient/delete',JSON.stringify(details),this.jwt())
                    .map(data=>data.json());
  }

  someOneElse(details){
    return this.http.post('http://localhost:8080/toSomeoneElse',JSON.stringify(details),this.jwt());
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
