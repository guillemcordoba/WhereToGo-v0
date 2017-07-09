import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '../../shared/model/w2ggame.model';
import { AgmMap } from '@agm/core';

@Component ({
  selector: 'location-selector',
  templateUrl: 'location-selector.component.html'
})
export class LocationSelectorComponent {
    @Input("selectedLocation")
    selectedLocation: Location;
    @Output()
    selectLocation: EventEmitter<any> = new EventEmitter();

    constructor() {}
    
}