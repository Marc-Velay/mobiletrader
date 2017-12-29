import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { HistoricalDisplayPage } from '../pages/historical-display/historical-display';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ItemsPage } from '../pages/items/items';
import { PortfolioPage } from '../pages/portfolio/portfolio';


import { RestProvider } from '../providers/rest/rest';
import { UserProvider } from '../providers/user/user';
import { ItemProvider } from '../providers/item/item';
import { MessageProvider } from '../providers/message/message';
import { PortfolioProvider } from '../providers/portfolio/portfolio';
import { GraphDataProvider } from '../providers/graph-data/graph-data';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { AuthGuardProvider } from '../providers/auth-guard/auth-guard';
import { AlertProvider } from '../providers/alert/alert';

//import { AppRoutingModule }     from './app-routing.module';

import { AlertComponent } from '../components/alert/alert'
import { LoginComponent } from '../components/login/login'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    HistoricalDisplayPage,
    ItemDetailsPage,
    ItemsPage,
    PortfolioPage,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    HistoricalDisplayPage,
    ItemDetailsPage,
    ItemsPage,
    PortfolioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    UserProvider,
    ItemProvider,
    MessageProvider,
    PortfolioProvider,
    GraphDataProvider,
    AuthenticationProvider,
    AuthGuardProvider,
    AlertProvider,
  ]
})
export class AppModule {}
