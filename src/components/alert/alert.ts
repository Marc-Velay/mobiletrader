import { Component } from '@angular/core';

import { AlertProvider } from '../../providers/alert/alert';

@Component({
  selector: 'alert',
  templateUrl: 'alert.html'
})
export class AlertComponent {

  message: any;

  constructor(private alertService: AlertProvider) {
    console.log('Hello AlertComponent Component');
  }

  ngOnInit() {
      this.alertService.getMessage().subscribe(message => { this.message = message; });
  }
}
