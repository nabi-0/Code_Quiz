//Assign start button
var startButton = document.getElementById("start-btn")
var questionContainerElements = document.getElementById("question-container")

startButton.addEventListener("click", startQuiz)

// Starting the quiz/ pressing start button
function startQuiz() {
    console.log('start the quiz')
    startButton.classList.add("hide")
    //questionContainerElements.classList.remove("hide")
    setNextQuestion()
}

//Going to next question/ pressing the next button
function setNextQuestion () {


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
            { text: "a type of flower", correct: false}
        ]
    }
]