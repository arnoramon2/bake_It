import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LoginPage } from '../pages/login/login';
import { ZoekenPage } from '../pages/zoeken/zoeken';
import { ResultsPage } from '../pages/results/results';
import { FavorietenPage } from '../pages/favorieten/favorieten';
import { GerechtenPage } from '../pages/gerechten/gerechten';
import { AccounttabsPage } from '../pages/accounttabs/accounttabs';
import { TestPage } from '../pages/test/test';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = TestPage;

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

  home() {
    this.nav.setRoot(HomePage);
  }

  zoek() {
    this.nav.setRoot(ZoekenPage);
  }

  gerechten() {
    this.nav.setRoot(GerechtenPage);
  }

  account() {
    this.nav.setRoot(AccounttabsPage);
  }

  logout() {
    //TODO: service logout
    this.authService.logout();
    //navigate to loginpage
    this.nav.setRoot(LoginPage);
  }

  test() {
    this.nav.setRoot(TestPage);
  }


}


