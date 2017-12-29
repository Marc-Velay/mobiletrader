import { Injectable } from '@angular/core';
//import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

//import { User } from '../user/user-model';
//import { MessageProvider } from '../message/message';

const loginURL = 'http://86.64.78.32:30000/api/get-token/';

@Injectable()
export class AuthenticationProvider {

  constructor(
    private http: HttpClient,
    //private messageService: MessageProvider
  ) {
    console.log('Hello AuthenticationProvider Provider');
  }

  login(username: string, password: string) {
        const body = { username: username, password: password };
        //return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
        return this.http.post(loginURL, body)
            .map((user: string) => {
                // login successful if there's a jwt token in the response
                let userData = JSON.parse(JSON.stringify(user));
                if (userData) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    userData.username = username;
                    userData.password = password;
                    localStorage.setItem('currentUser', JSON.stringify(userData));
                }
                console.log('hello');
                console.log(JSON.parse(localStorage.getItem('currentUser')));

                return userData;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
