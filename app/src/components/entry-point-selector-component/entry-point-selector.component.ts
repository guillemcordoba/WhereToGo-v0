import { Component, Input } from '@angular/core';
import { W2GGame, Location } from '../../shared/model/w2ggame.model';

@Component({
  selector: 'entry-point-selector',
  templateUrl: 'entry-point-selector.component.html',
})
export class EntryPointSelectorComponent {
    @Input("currentLocation")
    currentLocation : Location;

    entryPoint: Location;

    selectEntryPoint(entryPoint) {
        console.log(entryPoint);
    }

}
