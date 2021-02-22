import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuizGuard } from './questions/quiz.guard';
import { ResultGuard } from './result/result.guard';
import { ResultComponent } from './result/result.component';
import { StartComponent } from './start/start.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full'},
    { path: 'start', component: StartComponent },
    { path: 'questions/:id', component: QuestionsComponent, canActivate: [QuizGuard] },
    { path: 'end', component: ResultComponent, canActivate: [ResultGuard] },
    {path: '**', redirectTo: '/start'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}