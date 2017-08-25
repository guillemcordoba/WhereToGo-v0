import { W2GState } from './../../shared/app.state';
import { W2GGame, Location } from './../../shared/model/w2ggame.model';
import { IonicPage } from 'ionic-angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

@IonicPage()
@Component({
  selector: 'play-w2ggame-page',
  templateUrl: './play.w2ggame.component.html',
  styleUrls: ['./play.w2ggame.component.css']
})
export class PlayW2ggameComponent implements OnInit {

  private w2ggame: W2GGame;
  private currentLocation: Location;
  @ViewChild("questions")
  questionSet: any;

  constructor(private store: Store<W2GState>) { }

  ngOnInit() {
  }

  buttonPressed() {
    this.questionSet.toggleQuestionsHidden();
  }

}
