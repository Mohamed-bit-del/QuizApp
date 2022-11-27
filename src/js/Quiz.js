export default class Quiz {
    constructor (config) {
        this.questions = config.questions;
        this.questionsContainer = config.questionsContainer;
        this.resultContainer = config.resultContainer;
    }

    init () {
        this.resultContainer.innerHTML = '';
        this.displayQuestions();
    }

    displayQuestions () {
        let output = "";

        this.questions.forEach((question, questionNumber) => {
            output += `
                <div class="card border-primary m-3">
                    <div class="card-header"> Q${questionNumber + 1} : ${question.title}?</div>
                    <div class="form-group m-1 userAnswers">
                    <span class="badge bg-success hide">Correct</span>
                    <span class="badge bg-danger hide">Not Correct</span>
                        ${this.displayAnswers(question.answers,questionNumber)}
                    </div>
                </div>
            `
        });
        this.questionsContainer.innerHTML = output;
    }

    displayAnswers(answers, questionNumber) {
        let output = "";

        for (let key in answers) {
            output += `
                <div class="custom-control custom-radio m-1">
                    <input type="radio" name="q${questionNumber}" id="q${questionNumber}${key}" class="form-check-input" value=${key} />
                    <label class="form-check-label" for="q${questionNumber}${key}">${answers[key]}</label>
                </div>
            `;
        }
        return output;
    }

    collectUserAnswers () {
        const userAnswers  = document.querySelectorAll('.userAnswers');
        let currentAnswer = '';
        let correctAnswers = 0;

        this.questions.forEach((question, questionIndex) => {
            currentAnswer = userAnswers[questionIndex].querySelector("input[type=radio]:checked").value;
            if(currentAnswer === question.correctAnswer) {
                correctAnswers += 1
                userAnswers[questionIndex].querySelector('.bg-success').classList.remove('hide');
            } else {
                userAnswers[questionIndex].querySelector('.bg-danger').classList.remove('hide');
            }
            console.log(correctAnswers );
        })
        this.displayResults(correctAnswers);
    }
    displayResults (correctAnswers) {
        this.resultContainer.innerHTML = `
            <h1 class="text-center"> ${correctAnswers} / ${this.questions.length} </h1>
        `
    }
}