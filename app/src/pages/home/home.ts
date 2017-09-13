import { Observable } from 'rxjs/Observable';
import { Location } from './../../shared/model/w2ggame.model';
import { W2GState } from './../../shared/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
// Ionic dependencies
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// Page dependencies
import { CreateW2GGamePage } from '../create-w2ggame/create-w2ggame';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AngularFireDatabase],
//  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class HomePage implements OnInit {
  currentLocation$: Observable<Location>;
  entryPoints$: Observable<Array<Location>>;

  constructor(private store: Store<W2GState>) {
    this.store.dispatch({type: 'GET_LOCATION', payload: {} });
    this.store.dispatch({ type: 'GET_ENTRY_POINTS', payload: {} });

    this.currentLocation$ = this.store.select(s => s.currentLocation);
    
    // Setup entry points markers
    this.entryPoints$ = this.store.select(s => s.entryPoints);
  }

  public ngOnInit() {
    
  }

  createNewW2GGame() {
    /*this.store.dispatch( {type: 'CREATE_NEW_GAME', payload: { initialLocation: {
      latitude: this.currentLocation$.,
      longitude: this.currentLng
    } } });*/
  }

}
