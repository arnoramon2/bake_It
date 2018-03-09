import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GerechtDetailPage } from './gerecht-detail';

@NgModule({
  declarations: [
    GerechtDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GerechtDetailPage),
  ],
})
export class GerechtDetailPageModule {}
