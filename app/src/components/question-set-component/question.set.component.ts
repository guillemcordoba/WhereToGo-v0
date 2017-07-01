import { Component, Input } from '@angular/core';
import { W2GGame } from '../../shared/model/w2ggame.model';

@Component({
  selector: 'question-set',
  templateUrl: 'question.set.component.html',
})
export class QuestionSetComponent {
    @Input("game")
    w2ggame : W2GGame;

    constructor() {}
}