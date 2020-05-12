//Assign start button
var startButton = document.getElementById("start-btn")
var questionContainerElements = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
//Assigning var so that questions can be shuffled...
//This is if we want shuffled questions 
var shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startQuiz)

//Starting the quiz/ pressing start button
function startQuiz() {
    console.log('start the quiz')
    startButton.classList.add("hide")
    //This function will randomize questions
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    //Starting at 0 because of our shuffled questions array
    currentQuestionIndex = 0
    //questionContainerElements.classList.remove("hide")
    setNextQuestion()
}

//Going to next question/ pressing the next button
function setNextQuestion () {
    //Get question and show
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
//Taking a question from question object with the array
function showQuestion(question) {
    questionElement.innerText = question.question
}
//After selecting an answer/
function selectAnswer () {


}

//Set questions in an array
var questions = [
    {
        question: "What is JavaScript?",
        answer: [
            { text: "a scripting language", correct: true},
            { text: "a type of flower", correct: false},
            { text: ""}
        ]
    }
]