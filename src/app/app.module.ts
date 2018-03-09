import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// ** Firebase **
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

var config = {
  apiKey: "AIzaSyDezIM2Jt9z91Nez9iNTZOm8mI6A6QYiTc",
  authDomain: "bakeit-8f1f0.firebaseapp.com",
  databaseURL: "https://bakeit-8f1f0.firebaseio.com",
  projectId: "bakeit-8f1f0",
  storageBucket: "bakeit-8f1f0.appspot.com",
  messagingSenderId: "886438639175"
};
// ** Firebase **


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // ** Firebase **
    AngularFireModule,
    AngularFireDatabaseModule, 
    AngularFireAuthModule, 
    AngularFireModule.initializeApp(config)
    // ** Firebase **
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
    AuthServiceProvider
  ]
})
export class AppModule {}
