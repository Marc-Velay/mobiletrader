import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


//import { Item } from './item-model';
//import { MessageProvider } from '../message/message';


@Injectable()
export class ItemProvider {

  private itemUrl = 'http://86.64.78.32:30000/api/items/';  // URL to web api

  constructor(
    private http: Http,
    //private messageService: MessageProvider
  ) {
    console.log('Hello ItemProvider Provider');
  }

  //Get the list of items the database has.
  //Send a jwt token to make sure the user has access to this information.
  //Erros are handled on caller.
  getItems() {
    return this.http.get(this.itemUrl, this.jwt()).map((response: Response) => response.json());
  }

  //Get a specific item using its ID.
  //Erros are handled on caller.
  getItem(id: number) {
    const url = `${this.itemUrl}${id}/`;
    return this.http.get(url, this.jwt()).map((response: Response) => response.json());
  }

  private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            //let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            let headers = new Headers({ 'Authorization': 'Basic dXNlcjpwaWNrbGVyaWNr' });
            return new RequestOptions({ headers: headers });
        }
    }
}
