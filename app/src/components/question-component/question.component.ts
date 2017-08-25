
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
    @Input("editable")
    editable: boolean;
    @Output()
    selectLocation: EventEmitter<any> = new EventEmitter();
}