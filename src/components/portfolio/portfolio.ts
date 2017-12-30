import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Item } from '../../providers/item/item-model';
import { User } from '../../providers/user/user-model';
import { Portfolio } from '../../providers/portfolio/portfolio-model';
import { PortfolioProvider } from '../../providers/portfolio/portfolio';
import { AlertProvider } from '../../providers/alert/alert';

import { ItemDetailsPage } from '../../pages/item-details/item-details';


@Component({
  selector: 'portfolio',
  templateUrl: 'portfolio.html',
  styleUrls: ['/src/components/portfolio/portfolio.css']
})
export class PortfolioComponent implements OnInit {
  currentUser: User;
  portfolio: Portfolio;

  constructor(
    private portfolioService: PortfolioProvider,
    private alertService: AlertProvider,
    public navCtrl: NavController
  ) { }
  //Load the portfolio for the current user upon initialising page
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getPortfolio(this.currentUser.id);
  }

  //Load the portfolio using user ID, then store it so we dont query again
  getPortfolio(userId: number) {
    this.portfolioService.getPortfolio(userId)
      .subscribe(portfolio => {
          this.portfolio = portfolio;
          localStorage.setItem('portfolio', JSON.stringify(portfolio));
          console.log(portfolio);
      });
  }
  //Save the new name of the portfolio, then display success message.
  save() {
    this.portfolioService.updatePortfolio(this.portfolio)
      .subscribe(() => this.alertService.success('You have successfully updated the portfolio name'));
  }

  //Remove an item from the portfolio, then redisplay the portfolio item list
  delete(item:Item) {
    this.portfolioService.removeFromPortfolio(item.id)
      .subscribe(() => {
        this.alertService.success('You have successfully deleted this item from your portfolio');
        this.getPortfolio(this.currentUser.id);
        this.portfolio = JSON.parse(localStorage.getItem('portfolio'));
      });
  }

  openPage(itemID:any){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(ItemDetailsPage, {
      id: itemID
    });
  }
}
