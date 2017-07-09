import { Component, Input, Output, EventEmitter } from '@angular/core';
import { W2GGame, Location } from '../../shared/model/w2ggame.model';

@Component({
  selector: 'question-set',
  templateUrl: 'question-set.component.html',
  styles: ['question-set.component.scss']
})
export class QuestionSetComponent {
    @Input("game")
    w2ggame : W2GGame;

    hidden: boolean = false;
    selectingLocation: boolean = false;
    selectingLocationIndex: number;

    constructor() {
    }

    isHidden() : boolean {
      return this.hidden;
    }

    initSelectEntryLocation($event) {
      this.hidden = true;
      this.selectingLocation = true;
      this.selectingLocationIndex = -1;
    }

    initSelectLocation(questionIndex: number, $event) {
      this.hidden = true;
      this.selectingLocation = true;
      this.selectingLocationIndex = questionIndex;
      this.w2ggame.questions[questionIndex].location = null;
    }

    public saveLocation(location: Location) {
      console.log(location);
      console.log(this.selectingLocationIndex);
      console.log(this.w2ggame); 
      if (this.selectingLocationIndex == -1) {
        this.w2ggame.entryPoint = location;
      } else {
        this.w2ggame.questions[this.selectingLocationIndex].location = location;
      }
      this.selectingLocation = false;
      this.hidden = false;
    }

    public isSelectingLocation(): boolean {
      return this.selectingLocation;
    }

    public getButtonString() : string {
      if (!this.selectingLocation) {
        if (this.hidden) {
          return 'Show questions';
        } else {
          return 'Hide questions';
        } 
      } else {
        return 'Save location';
      }
    }

    public toggleQuestionsHidden() : void {
      this.hidden = !this.hidden;
    }
}