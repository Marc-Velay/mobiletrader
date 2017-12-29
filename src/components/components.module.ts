import { NgModule } from '@angular/core';
import { MessagesComponent } from './messages/messages';
import { AlertComponent } from './alert/alert';
@NgModule({
	declarations: [MessagesComponent,
    AlertComponent],
	imports: [],
	exports: [MessagesComponent,
    AlertComponent]
})
export class ComponentsModule {}
