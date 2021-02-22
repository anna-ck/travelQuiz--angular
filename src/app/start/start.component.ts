import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../questions/questions.service';
import { RoutesService } from '../routes.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public routesService: RoutesService, public questionsService: QuestionsService) { }

  ngOnInit(): void {
  }

  startQuiz() {
    this.questionsService.setShuffledQuestions()
    this.router.navigate(['../questions/1'], {relativeTo: this.route});
    this.routesService.setStart()
  }

}
