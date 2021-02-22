import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../questions/questions.service';
import { RoutesService } from '../routes.service';
import { ResultService } from './result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public ResultService: ResultService, public questionsService: QuestionsService, public routesService: RoutesService) { }

  result: number;

  ngOnInit(): void {
    this.result = this.ResultService.getResult()
  }

  onTryAgain() {
    this.questionsService.setShuffledQuestions()
    this.router.navigate(['../questions/1'], {relativeTo: this.route});
    this.routesService.setStart()
  }

}
