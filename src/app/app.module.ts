import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule }    from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestProvider } from '../providers/rest/rest';
import { UserProvider } from '../providers/user/user';
import { ItemProvider } from '../providers/item/item';
import { MessageProvider } from '../providers/message/message';
import { PortfolioProvider } from '../providers/portfolio/portfolio';
import { GraphDataProvider } from '../providers/graph-data/graph-data';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { AuthGuardProvider } from '../providers/auth-guard/auth-guard';
import { AlertProvider } from '../providers/alert/alert';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
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
