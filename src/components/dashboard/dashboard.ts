import { Component, OnInit } from '@angular/core';

/**
 * Generated class for the DashboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.html',
  styleUrls: ['/src/components/dashboard/dashboard.css']
})
export class DashboardComponent implements OnInit {

  text: string;

  constructor() {
    console.log('Hello DashboardComponent Component');
    this.text = 'Hello World';
  }
  
  ngOnInit() {

  }

}
