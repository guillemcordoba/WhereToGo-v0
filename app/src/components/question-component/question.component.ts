
import { Component, Input } from '@angular/core';
import { W2GQuestion } from '../../shared/model/w2ggame.model';

@Component ({
  selector: 'question-panel',
  templateUrl: 'question.component.html',
})
export class QuestionComponent {
    @Input("question")
    w2gQuestion : W2GQuestion;
    @Input("questionNumber")
    questionNumber : number;
}