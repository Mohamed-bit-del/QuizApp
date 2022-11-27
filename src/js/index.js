/**
* class Quiz
*  1- dispaly question
*  2- cllect answers
*  3- display result
*
* class Question
*  1- data
*  2- filter
*  3- getQuestionBuType
*/

// Css Files
import '../css/bootstrap.min.css';
import '../css/style.css';
// JavaScript Files
import Quiz from "./Quiz";
import Questions from "./Questions";

const questionsCls = new Questions();
const quiz = new Quiz({
    questions: questionsCls.questions,
    questionsContainer: document.querySelector('#questionsContainer'),
    resultContainer: document.querySelector('#result')
});

const submitEl = document.querySelector('#submit');
const startEl = document.querySelector('#start');

startEl.addEventListener('click', (event) => {
    quiz.init();
    event.target.classList.add('hide');
    submitEl.classList.remove('hide');
});

submitEl.addEventListener('click', (event) => {
    quiz.collectUserAnswers();
    event.target.classList.add('hide');
    startEl.classList.remove('hide');
});