import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Item } from '../../providers/item/item-model';
import { ItemProvider } from '../../providers/item/item';

import { ItemDetailsPage } from '../../pages/item-details/item-details';

@Component({
  selector: 'items',
  templateUrl: 'items.html',
  styleUrls: ['/src/components/items/items.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(
          private itemService: ItemProvider,
          public navCtrl: NavController
  ) { }


  //Load item list from database on page load.
  ngOnInit() {
    this.getItems();
  }

  //Use the item service to query the list. Then save them to local variable.
  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => {
          this.items = items;
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
