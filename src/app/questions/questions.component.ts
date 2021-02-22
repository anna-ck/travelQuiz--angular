import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router'
import { ResultService } from '../result/result.service';
import { RoutesService } from '../routes.service';
import Question from './Question';
import { QuestionsService } from './questions.service';
import { interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  id: number;
  question: Question;
  isAnswer: boolean = false;
  remainingTime: number;
  subscription: Subscription;
  correctAnswer: string;
  selectedAnswer: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    public QuestionsService: QuestionsService, 
    public routesService: RoutesService,
    public resultService: ResultService
    ) { }

  ngOnInit(): void {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.question = this.QuestionsService.getQuestion(this.id)
            this.remainingTime = 200;
            this.startTimer()
          }
        );
  }

  startTimer () {
    const timer$ = interval(20);
    this.subscription = timer$.subscribe((sec) => {
      this.remainingTime = 200 - sec
      if (this.remainingTime === 0) {
        this.subscription.unsubscribe();
        this.isAnswer = true
        this.correctAnswer = this.resultService.getCorrectAnswer(this.id)
      }
    })
  }

  goToNextQuestion() {
    if (this.id < 12) {
      this.id++;
      this.router.navigate(['../', this.id], {relativeTo: this.route});
      this.isAnswer = false
      this.correctAnswer = null;
      this.selectedAnswer = null;
    }
    else {
      this.router.navigate(['../../end'], {relativeTo: this.route})
      this.routesService.setEnd()
    }
  }

  checkAnswer(key) {
    this.isAnswer = true;
    this.selectedAnswer = key;
    this.correctAnswer = this.resultService.handleAnswer(key, this.id)
    this.subscription.unsubscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
