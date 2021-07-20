// class question
class Question {

    constructor(text, choices, answer) {

        this.text = text;
        this.choices = choices;
        this.answer = answer;

    };

    isCorrectAnswer(choice) {

        return this.answer === choice;

    };
};

// QUESTIONS TEXT, CHOICES, ANSWER
let questions = [

    new Question("Quelle méthode Javascript permet de filtrer les éléments d'un tableau", ["indexOf()", "map()", "filter()", "reduce()"], "filter()"),
    new Question("Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau", ["isNaN()","includes()", "findIndex()", "isOdd()"], "includes()"),
    new Question("Quelle méthode transforme du JSON en un objet Javascript ?", ["JSON.parse()","JSON.stringify()", "JSON.object()", "JSON.toJS"], "JSON.parse()"),
    new Question("Quel objet Javascript permet d'arrondir à l'entier le plus proche", ["Math.ceil()","Math.floor()", "Math.round()", "Math.random()"], "Math.round()")

];

// CLASS QUIZ
class Quiz {

    constructor(questions) {

        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;

    };

    getCurrentQuestion() {

        return this.questions[this.currentQuestionIndex];

    };

    guess(answer) {

        if(this.getCurrentQuestion().isCorrectAnswer(answer)) {

            this.score++;

        };

        this.currentQuestionIndex++;

    };

    end() {

        return this.currentQuestionIndex >= this.questions.length;

    };

};

// all functions for app display
const display = {

    elementShow: function(id, text) {

        let element = document.getElementById(id);
        element.innerHTML = text;

    },
    endQuiz: function() {

        let endQuizHTML = `
        
        <h1>QUIZ TERMINÉ !</h1>
        <h3>Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>

        `;

        this.elementShow('question', endQuizHTML);

    },

    question: function() {

        this.elementShow('question', quiz.getCurrentQuestion().text)

    },

    choices: function() {

        let choices = quiz.getCurrentQuestion().choices;

        guessUser = (id, guess) => {

            document.getElementById(id).onclick = function() {

                quiz.guess(guess);
                quizApp();
    
            };

        };

        for(let i = 0; i < choices.length; i++) {

            this.elementShow("choice" + i, choices[i]);
            guessUser("guess" + i, choices[i]);

        }

    },

}

// GAME LOGIC
quizApp = () => {

    if (quiz.end()) {

        // END
        display.endQuiz();

    } else {

        // QUESTION CHOICES PROGRESS    
        display.question();
        display.choices();

    };

};


// Create QUIZ
let quiz = new Quiz(questions);

quizApp();

