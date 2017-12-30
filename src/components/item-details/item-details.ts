import { Component, OnInit } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { Item } from '../../providers/item/item-model';
import { ItemProvider } from '../../providers/item/item';
import { PortfolioProvider } from '../../providers/portfolio/portfolio';
import { AlertProvider } from '../../providers/alert/alert';

@Component({
  selector: 'item-details',
  templateUrl: 'item-details.html',
  styleUrls: ['/src/components/item-details/item-details.css']
})
export class ItemDetailsComponent implements OnInit {
  id: number;
  item: Item;
  added = false;

  constructor(
        private navParams: NavParams,
        private itemService: ItemProvider,
        private portfolioService: PortfolioProvider,
        private alertService: AlertProvider) {
    this.id = +navParams.get('id');
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    this.itemService.getItem(this.id)
      .subscribe(item => {
        this.item = item;
        console.log(this.item);
      });
  }

  add() {
    this.portfolioService.addToPortfolio(this.id).subscribe(() => this.alertService.success('You have successfully added this item to your portfolio'));
    this.added = true;
  }
}
