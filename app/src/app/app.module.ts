import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateW2GGamePage } from '../pages/create-w2ggame/create-w2ggame';
import { EntryPointSelectorComponent, QuestionComponent, QuestionSetComponent } from '../components';

import { AngularFireModule } from 'angularfire2';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';

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
    HomePage,
    CreateW2GGamePage,
    QuestionComponent, 
    QuestionSetComponent,
    EntryPointSelectorComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { backButtonIcon: 'close'}),
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuYOP7nhPCkvHPlwO6dmH8nQ4MXip_6mM'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateW2GGamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
  ]
})
export class AppModule {}
