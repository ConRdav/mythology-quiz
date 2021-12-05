// Collecting all elements needed
const mortalGame = document.getElementById("mortal-start-btn")
const demiGame = document.getElementById("demi-start-btn")
const olympianGame = document.getElementById("olympian-start-btn")
const mortalDifficulty = document.getElementById("mortal-btn")
const demiDifficulty = document.getElementById("demi-btn")
const olympianDifficulty = document.getElementById("olympian-btn")
const mortalRules = document.getElementById("mortal-rules")
const demiRules = document.getElementById("demi-rules")
const olympianRules = document.getElementById("olympian-rules")
const mortalChangeDifficulty = document.getElementById("mortal-change-btn")
const demiChangeDifficulty = document.getElementById("demi-change-btn")
const olympianChangeDifficulty = document.getElementById("olympian-change-btn")
const quizGame = document.getElementById("quiz-container")
let currentQuestion, currentQuestionIndex
const questionElement = document.getElementById("question")
const answersOptions = document.getElementsByClassName('answer-btns')

//all event listeners
mortalGame.addEventListener('click', startGameMortal)
demiGame.addEventListener('click', startGameDemi)
olympianGame.addEventListener('click', startGameOlympian)
mortalDifficulty.addEventListener('click', startMortalRules)
demiDifficulty.addEventListener('click', startDemiRules)
olympianDifficulty.addEventListener('click', startOlympianRules)
mortalChangeDifficulty.addEventListener('click', startChangeDifficultyMortal)
demiChangeDifficulty.addEventListener('click', startChangeDifficultyDemi)
olympianChangeDifficulty.addEventListener('click', startChangeDifficultyOlympian)

//all functions
//opens quiz and difficulty rules when difficulty clicked
function startMortalRules() {
    mortalRules.classList.remove('hide')
    mortalDifficulty.classList.add('hide')
    demiDifficulty.classList.add('hide')
    olympianDifficulty.classList.add('hide')
}

function startDemiRules() {
    demiRules.classList.remove('hide')
    mortalDifficulty.classList.add('hide')
    demiDifficulty.classList.add('hide')
    olympianDifficulty.classList.add('hide')
}

function startOlympianRules() {
    olympianRules.classList.remove('hide')
    mortalDifficulty.classList.add('hide')
    demiDifficulty.classList.add('hide')
    olympianDifficulty.classList.add('hide')
}

// Goes back to start page to change difficulty when clicked
function startChangeDifficultyMortal(){
    mortalRules.classList.add('hide')
    mortalDifficulty.classList.remove('hide')
    demiDifficulty.classList.remove('hide')
    olympianDifficulty.classList.remove('hide')

}

function startChangeDifficultyDemi(){
    demiRules.classList.add('hide')
    mortalDifficulty.classList.remove('hide')
    demiDifficulty.classList.remove('hide')
    olympianDifficulty.classList.remove('hide')
}

function startChangeDifficultyOlympian(){
    olympianRules.classList.add('hide')
    mortalDifficulty.classList.remove('hide')
    demiDifficulty.classList.remove('hide')
    olympianDifficulty.classList.remove('hide')
}

//starts the specified difficulties quiz when clicked
function startGameMortal() {
    mortalRules.classList.add('hide')
    quizGame.classList.remove('hide')
    currentQuestion = questions
    currentQuestionIndex = 0
    setNextQuestion()  
}

function startGameDemi() {

}

function startGameOlympian() {

}

function setNextQuestion() {
    showQuestion(currentQuestion[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question

}

function selectAnswer() {

}


