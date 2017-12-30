import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

//import { MessageProvider } from '../message/message';
import { Portfolio } from './portfolio-model'



@Injectable()
export class PortfolioProvider {
  portfolio: Portfolio;
  private portfolioUrl = 'http://86.64.78.32:30000/api/portfolio';  // URL to web api

  constructor(
    private http: Http,
    //private messageService: MessageProvider
  ) {
    console.log('Hello PortfolioProvider Provider');
  }

  //We get the portfolio associated with the logged in user.
  getPortfolio(userID: number) {
    const url = `${this.portfolioUrl}/get/${userID}/`;  //ie http://86.64.78.32:30000/api/portfolio/get/1/ for user pk 1
    return this.http.get(url, this.jwt()).map((response: Response) => response.json()); //return the response to the requesting function. Error is handled on caller.
  }

  //For the moment, this function only updates the name, sending the new one in a json.
  updatePortfolio(portfolio: Portfolio) {
    const url = `${this.portfolioUrl}/update/${portfolio.id}/`;
    const body = {"name": portfolio.name};
    return this.http.put(url, body, this.jwt()).map((response: Response) => response.json());
  }

  //Add item to the portfolio using portfolio ID and item ID.
  addToPortfolio(itemID: number): any {
    const url = `${this.portfolioUrl}/item/link/${itemID}/`;
    //If the user hasnt visited the page 'portfolio' yet, he doesnt have the portfolio ID,
    //We need to query it before updating its item list.
    console.log('made it to here');
    if(!localStorage.getItem('portfolio')) {
      this.getPortfolio(JSON.parse(localStorage.getItem('currentUser')).id)
      .subscribe(portfolio => {
          //When we receive the portfolio, we get its ID and update it with the new item.
          this.portfolio = portfolio;
          localStorage.setItem('portfolio', JSON.stringify(portfolio));
          const body = { "id": this.portfolio.id };
          return this.http.post(url, body, this.jwt()).map((response: Response) => response.json());
      });
    } else { // In case the user already has a loaded portfolio.
      this.portfolio = JSON.parse(localStorage.getItem('portfolio'));
      const body = { "id": this.portfolio.id };
      return this.http.post(url, body, this.jwt()).map((response: Response) => response.json());
    }
    console.log('in service');
  }


  //Remove an item from a portfolio using portfolio ID and item ID
  removeFromPortfolio(itemID: number) {
    const url = `${this.portfolioUrl}/item/remove/${itemID}/`;
    //If the user hasnt visited the page 'portfolio' yet, he doesnt have the portfolio ID,
    //We need to query it before updating its item list.
    if(!localStorage.getItem('portfolio')) {
      this.getPortfolio(JSON.parse(localStorage.getItem('currentUser')))
      .subscribe(portfolio => {
          this.portfolio = portfolio;
          localStorage.setItem('portfolio', JSON.stringify(portfolio));
          const body = { "id": this.portfolio.id };
          return this.http.post(url, body, this.jwt()).map((response: Response) => response.json());
      });
    } else { // In case the user already has a loaded portfolio.
      this.portfolio = JSON.parse(localStorage.getItem('portfolio'));
      const body = { "id": this.portfolio.id };
      return this.http.post(url, body, this.jwt()).map((response: Response) => response.json());
    }
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
