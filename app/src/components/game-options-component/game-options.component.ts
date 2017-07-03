import { Component, Input } from '@angular/core';
import { W2GGame, Location } from '../../shared/model/w2ggame.model';

@Component({
  selector: 'game-options',
  templateUrl: 'game-options.component.html',
})
export class GameOptionsComponent {
    @Input("currentLocation")
    currentLocation : Location;


}
