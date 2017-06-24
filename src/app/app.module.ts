import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';

// Configuration for angular firebase, taken from the firebase console
export const firebaseConfig = {
    apiKey: "AIzaSyAqLixpYaVk_L5kT2iNPbFnXROAN4C8jZA",
    authDomain: "wheretogo-v0.firebaseapp.com",
    databaseURL: "https://wheretogo-v0.firebaseio.com",
    projectId: "wheretogo-v0",
    storageBucket: "wheretogo-v0.appspot.com",
    messagingSenderId: "113543433873"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
