import { Injectable } from '@angular/core'  ;
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class SignInService {

  token: string;
  private _url = "http://localhost:8080/login";


  constructor(private http: Http) { }

  signInService(userCredentials) {
    
    let headers1 = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(this._url, JSON.stringify(userCredentials),{headers:headers1})
                    .map(data=>data.json());
  }


  getDetails(){
    return this.http.get("http://localhost:8080/users",this.jwt())
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
