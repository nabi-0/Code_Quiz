//Assign start button
var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var results = document.getElementById("results-container")
var questionContainerElements = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
var timerElement = document.getElementById("timer")
//Assigning var so that questions can be shuffled...
//This is if we want shuffled questions 
let currentQuestionIndex = score = 0;
let timer = 30
let timerHandle = null

startButton.addEventListener("click", startQuiz)

// Timer Function
function timerUpdate() {
    timer -- 
    timerElement.textContent = timer
    if (timer == 0) {
        endQuiz()
    }
}

//Starting the quiz/ pressing start button
function startQuiz() {
    timerHandle = setInterval(timerUpdate, 1000);
    //console.log("start the quiz")
    startButton.classList.add("hide")
    questionContainerElements.classList.remove("hide")
    //This function will randomize questions
    //shuffledQuestions = questions.sort(() => Math.random() - .5)
    //Starting at 0 because of our shuffled questions array
    //currentQuestionIndex = 0
    //questionContainerElements.classList.remove("hide")
    setNextQuestion()
}

//Going to next question/ pressing the next button
function setNextQuestion () {
    //resetState() ////////////////////////////////////////////////////////////////
    showQuestion(questions[currentQuestionIndex]);
    //Get question and show
    //showQuestion(shuffledQuestions[currentQuestionIndex])
}
//Taking a question from question object with the array
function showQuestion(question) {
    questionElement.innerText = question.question
    answerButtonsElement.textContent="";
    question.answer.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        //if (answer.correct) {
            button.dataset.correct = answer.correct
            //button.setAttribute("data", "correct:" + String (answer.correct))
        //}
        button.addEventListener("click", selectAnswer)
        //answerButtonsElement.textContent="";
        answerButtonsElement.appendChild(button)
    })
//}
// Function for restarting settings for next question ///////////////////////////
//function resetState() {
    //nextButton.classList.add("hide")
    //while (answerButtonsElement.firstChild) {
        //answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    //}
}
//After selecting an answer
function selectAnswer(event) {
    console.log(event.target.dataset.correct)
    //button element
    if(event.target.dataset.correct == "true") {
        score = 13 + score 
    }
    else {
        timer -= 2
    }
    currentQuestionIndex ++
    if(currentQuestionIndex < questions.length) {
        setNextQuestion()
    }
    else {
        endQuiz()
    }

}
// End quiz
function endQuiz() {
    score = score * timer
    results.textContent = "you score = " + score;
    results.classList.remove("hide");
    questionContainerElements.classList.add("hide");
    clearInterval(timerHandle)
    timerHandle = null
}

//Set questions in an array
var questions = [
    {
        question: "What is JavaScript?",
        answer: [
            { text: "a type of flower", correct: false },
            { text: "a scripting language", correct: true},
            { text: "someones hat", correct: false},
            { text: "blah blah blah", correct: false},
        ]
    },
    {
        question: "What is Java?",
        answer: [
            { text: "a type of flower", correct: false },
            { text: "a scripting language", correct: true},
            { text: "someones hat", correct: false},
            { text: "blah blah blah", correct: false},
        ]
    },
    {
        question: "What is Script?",
        answer: [
            { text: "a type of flower", correct: false },
            { text: "a scripting language", correct: true},
            { text: "someones hat", correct: false},
            { text: "blah blah blah", correct: false},
        ]
    },
    {
        question: "What is?",
        answer: [
            { text: "a type of flower", correct: false },
            { text: "a scripting language", correct: true},
            { text: "someones hat", correct: false},
            { text: "blah blah blah", correct: false},
        ]
    },
    {
        question: "JavaScript?",
        answer: [
            { text: "a type of flower", correct: false },
            { text: "a scripting language", correct: true},
            { text: "someones hat", correct: false},
            { text: "blah blah blah", correct: false},
        ]
    },
];