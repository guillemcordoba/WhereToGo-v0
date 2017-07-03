import { Component, Input, ViewChild } from '@angular/core';
import { Location } from '../../shared/model/w2ggame.model';
import { AgmMap } from '@agm/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/core';

@Component ({
  selector: 'location-selector',
  templateUrl: 'location-selector.component.html',
  animations: [
    trigger('mapState', [
        state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
        })),
        state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(20)'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class LocationSelectorComponent {

    @Input("currentLocation")
    currentLocation: Location;

    @ViewChild("map")
    map: AgmMap;
    state: String = 'inactive';

    selectedLocation: Location;

    constructor() {}

    toggleState() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
    
    selectPoint(selectedMapPoint) {
        this.selectedLocation = {
            latitude: selectedMapPoint.coords.lat,
            longitude: selectedMapPoint.coords.lng
        }
    }

}