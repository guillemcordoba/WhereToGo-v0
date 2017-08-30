import { Location } from './../../shared/model/w2ggame.model';
import { W2GState } from './../../shared/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';
// Ionic dependencies
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// Page dependencies
import { CreateW2GGamePage } from '../create-w2ggame/create-w2ggame';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AngularFireDatabase],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class HomePage implements OnInit {
  currentLat: number;
  currentLng: number;
  entryPoints: Array<Location>;

  constructor(private store: Store<W2GState>) {
  }

  public ngOnInit() {

    this.store.select(s => s.currentLocation).subscribe((nextLocation: Location) => {
      console.log("HURRAYY")
      if (nextLocation) {
        this.currentLat = nextLocation.latitude;
        this.currentLng = nextLocation.longitude;
      }
    });

    // Setup entry points markers
    this.store.select('entryPoints').subscribe(
        (nextEntryPoints: Array<Location>) => this.entryPoints = nextEntryPoints);
    
  }

  createNewW2GGame() {
    this.store.dispatch( {type: 'CREATE_NEW_GAME', payload: { initialLocation: {
      latitude: this.currentLat,
      longitude: this.currentLng
    } } });
  }

}
