import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoekenPage } from './zoeken';

@NgModule({
  declarations: [
    ZoekenPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoekenPage),
  ],
})
export class ZoekenPageModule {}
