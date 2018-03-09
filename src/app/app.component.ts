import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LoginPage } from '../pages/login/login';
import { ZoekenPage } from '../pages/zoeken/zoeken';
import { ResultsPage } from '../pages/results/results';
import { FavorietenPage } from '../pages/favorieten/favorieten';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = FavorietenPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    // ** Provider **
    public authService: AuthServiceProvider
    // ** Provider **
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

