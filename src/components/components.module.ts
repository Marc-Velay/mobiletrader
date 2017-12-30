import { NgModule } from '@angular/core';
import { MessagesComponent } from './messages/messages';
import { AlertComponent } from './alert/alert';
import { LoginComponent } from './login/login';
import { ItemsComponent } from './items/items';
import { ItemDetailsComponent } from './item-details/item-details';
import { DashboardComponent } from './dashboard/dashboard';
import { PortfolioComponent } from './portfolio/portfolio';
@NgModule({
	declarations: [MessagesComponent,
    AlertComponent,
    LoginComponent,
    ItemsComponent,
    ItemDetailsComponent,
    DashboardComponent,
    PortfolioComponent],
	imports: [],
	exports: [MessagesComponent,
    AlertComponent,
    LoginComponent,
    ItemsComponent,
    ItemDetailsComponent,
    DashboardComponent,
    PortfolioComponent]
})
export class ComponentsModule {}
