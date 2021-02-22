import Answer from './Answer';

export default interface Question {
    id: number,
    img: string,
    answers: Answer[],
    correct: string
}