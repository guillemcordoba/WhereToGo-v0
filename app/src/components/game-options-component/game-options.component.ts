import { Component, Input, Output, EventEmitter } from '@angular/core';
import { W2GGame, Location } from '../../shared/model/w2ggame.model';

@Component({
  selector: 'game-options',
  templateUrl: 'game-options.component.html',
})
export class GameOptionsComponent {
    @Input("w2ggame")
    w2ggame : W2GGame;
    @Output()
    selectLocation: EventEmitter<any> = new EventEmitter();

}
