import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GerechtenPage } from './gerechten';

@NgModule({
  declarations: [
    GerechtenPage,
  ],
  imports: [
    IonicPageModule.forChild(GerechtenPage),
  ],
})
export class GerechtenPageModule {}
