import { NgModule } from '@angular/core';
import { MessagesComponent } from './messages/messages';
import { AlertComponent } from './alert/alert';
import { LoginComponent } from './login/login';
@NgModule({
	declarations: [MessagesComponent,
    AlertComponent,
    LoginComponent],
	imports: [],
	exports: [MessagesComponent,
    AlertComponent,
    LoginComponent]
})
export class ComponentsModule {}
