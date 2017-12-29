import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricalDisplayPage } from './historical-display';

@NgModule({
  declarations: [
    HistoricalDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricalDisplayPage),
  ],
})
export class HistoricalDisplayPageModule {}
