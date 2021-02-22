import { Injectable } from "@angular/core";
import { QuestionsService } from "../questions/questions.service";

@Injectable({ providedIn: 'root' })
export class ResultService {
    constructor(public questionsService: QuestionsService) {}
    private result: number = 0;

    getResult() {
        return this.result
    }

    handleAnswer(selectedAnswerKey: string, id: number) {
        let question = this.questionsService.getQuestion(id)
        if (question.correct === selectedAnswerKey) {
            this.result++;
            return selectedAnswerKey
        }
        return question.correct
    }

    getCorrectAnswer(id) {
        let question = this.questionsService.getQuestion(id)
        return question.correct
    }
}