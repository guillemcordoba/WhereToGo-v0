import { W2GState } from './../../shared/app.state';
import { W2GGame, Location } from './../../shared/model/w2ggame.model';
import { IonicPage, NavParams } from 'ionic-angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

@IonicPage()
@Component({
  selector: 'play-w2ggame-page',
  templateUrl: './play-w2ggame.html',
  styleUrls: ['./play-w2ggame.css']
})
export class PlayW2ggameComponent implements OnInit {

  private w2ggame: W2GGame;
  private currentLocation: Location;
  @ViewChild("questions")
  questionSet: any;

  constructor(private store: Store<W2GState>, private navParams: NavParams) { 
    this.store.select('currentLocation').subscribe((nextLocation: Location) => {
      this.currentLocation = nextLocation;
      this.store.dispatch({
        type: 'CHECK_QUESTION_RESOLVED', 
        payload: {
          currentGameName: this.w2ggame.name, 
          currentQuestionNumber: 
          this.w2ggame.questions.length, 
            location: nextLocation
        }
      });
    });
    this.store.select('currentGame').subscribe((game: W2GGame) => this.w2ggame = game);

    this.w2ggame = this.navParams.get('initialGame');
  }

  ngOnInit() {
  }

  buttonPressed() {
    this.questionSet.toggleQuestionsHidden();
  }

}
