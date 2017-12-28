import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


import { GraphDataPoint } from './graphData-model';
import { MessageProvider } from '../message/message';
/*
  Generated class for the GraphDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GraphDataProvider {

  private graphDataUrl = 'http://86.64.78.32:30000/api/Forex/2017/';  // URL to web api

  constructor(
    private http: Http,
    private messageService: MessageProvider ) {
    console.log('Hello GraphDataProvider Provider');
  }

  //Query the database for the item's data.
  //TODO: the url should be constructed using the item name instead of Forex. Limited data implied taking a shortcut for the moment.
  //Send jwt token to identify user and make sure he has authorization to query data.
  getGraphData() {
    return this.http.get(this.graphDataUrl, this.jwt()).map((response: Response) => response.json());
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
