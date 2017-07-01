import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// Ionic dependencies
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// Page dependencies
import { CreateW2GGamePage } from '../create-w2ggame/create-w2ggame';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AngularFireDatabase]
})
export class HomePage {
  currentLat: number;
  currentLng: number;
  entryPoints: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public geolocation : Geolocation, 
    private db : AngularFireDatabase) {

    // Setup location watcher
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      
      if (data["code"] != null) {
        // Error
        console.error(data["message"]);
      } else {
        this.currentLat = data.coords.latitude;
        this.currentLng = data.coords.longitude;
      }
    });

    // Setup entry points markers
    this.entryPoints = db.list('/entryPoints');
    
  }

  createNewW2GGame() {
    this.navCtrl.push(CreateW2GGamePage);
  }

}
