import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';


@Component({
  selector: 'item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsComponent {
  id: string;

  constructor(private navParams: NavParams) {
    this.id = navParams.get('id');
  }

}
