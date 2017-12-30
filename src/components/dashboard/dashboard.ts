import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Item } from '../../providers/item/item-model';
import { ItemProvider } from '../../providers/item/item';

import { ItemDetailsPage } from '../../pages/item-details/item-details';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.html',
  styleUrls: ['/src/components/dashboard/dashboard.css']
})
export class DashboardComponent implements OnInit {
  items: Item[] = [];
  topItems: Item[] = [];

  constructor(
        private itemService: ItemProvider,
        public navCtrl: NavController
  ) { }

  //Load items on page load
  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => {
          this.items = items;
          this.topItems = items.slice(0, 5); //Keep the first 5 items as the "top" items
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
