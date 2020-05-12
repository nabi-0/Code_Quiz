//Assign start button
var startButton = document.getElementById("start-btn")
var questionContainerElements = document.getElementById("question-container")

startButton.addEventListener("click", startQuiz)

// Starting the quiz/ pressing start button
function startQuiz() {
    console.log('start the quiz')
    startButton.classList.add("hide")
    //questionContainerElements.classList.remove("hide")
}

//Going to next question/ pressing the next button
function setNextQuestion () {


}

//After selecting an answer/
function selectAnswer () {


}