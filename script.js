const questions = [
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text : "Chocolate Desert" , correct: false},
            { text : "Sahara desert" , correct: false},
            { text : "Antartica" , correct: true},
            { text : "Couch Desert (where lost remotes go)" , correct: false},

        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text : "Kangaroo Town" , correct: false},
            { text : "Melbourne" , correct: false},
            { text : "Canberra" , correct: true},
            { text : "Boomerang City" , correct: false},

        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text : "Planet Hot Sauce" , correct: false},
            { text : "Mars" , correct: true},
            { text : "Jupiter" , correct: false},
            { text : "Tomato Planet" , correct: false},

        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text : "Mega Hamster" , correct: false},
            { text : "Great White Shark" , correct: false},
            { text : "Blue Whale" , correct: true},
            { text : "Colossal Guinea Pig" , correct: false},

        ]
    },
    {
        question: "Which element has the chemical symbol 'Au'?",
        answers: [
            { text : "Gold" , correct: true},
            { text : "Audi Car" , correct: false},
            { text : "Osmium" , correct: false},
            { text : "Austrianium" , correct: false},

        ]
    },
    {
        question: "Which is the longest river in the world??",
        answers: [
            { text : "Nile River" , correct: true},
            { text : "River of poverty" , correct: false},
            { text : "The Infinity Pool" , correct: false},
            { text : "Amazon River" , correct: false},

        ]
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        answers: [
            { text : "Caffeine Vapors" , correct: false},
            { text : "Laughing Gas (too much fun)" , correct: false},
            { text : "Hydrogen" , correct: false},
            { text : "Nitrogen" , correct: true},

        ]
    },
    {
        question: "What is the smallest country in the world by land area?",
        answers: [
            { text : "Monaco" , correct: false},
            { text : "Smurf Village" , correct: false},
            { text : "Vatican City" , correct: true},
            { text : "Munchkinland" , correct: false},

        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text : "1912 - When Jack could've fit on the door" , correct: true},
            { text : "1921 - The year they hit a really big iceberg" , correct: false},
            { text : "1905 - When Rose said 'Never Let Go'" , correct: false},
            { text : "1918 - The year they hit a really big iceberg" , correct: false},

        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text : "The Renaissance Selfie Master" , correct: false},
            { text : "Pablo Picasso" , correct: false},
            { text : "Leonardo da Vinci" , correct: true},
            { text : "Da Vinci’s less talented cousin" , correct: false},

        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});


startQuiz();