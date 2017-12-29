import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AlertProvider } from '../../providers/alert/alert';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

import { DashboardPage } from '../../pages/dashboard/dashboard';
 
@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['/src/components/login/login.css']
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private authenticationService: AuthenticationProvider,
        private alertService: AlertProvider,
        public navCtrl: NavController) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    //Go to return url, which user tried to access without being logged in
                    //this.router.navigate([this.returnUrl]);
                    this.navCtrl.setRoot(DashboardPage);
                },
                error => {
                    this.alertService.error('Login error, retry');
                    this.loading = false;
                });
    }
}
