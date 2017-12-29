import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { HistoricalDisplayPage } from '../pages/historical-display/historical-display';
import { ItemsPage } from '../pages/items/items';
import { PortfolioPage } from '../pages/portfolio/portfolio';

@Component({
  templateUrl: 'app.html',
  styleUrls: ['/src/app/app.css']
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Dashboard', component: DashboardPage },
      { title: 'List of all items', component: ItemsPage },
      { title: 'Portfolio', component: PortfolioPage },
      { title: 'HistoricalDisplayPage', component: HistoricalDisplayPage },
      { title: 'logout', component: LoginPage }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
