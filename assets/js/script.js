const mortalGame = document.getElementById("mortal-start-btn")
const demiGame = document.getElementById("demi-start-btn")
const olympianGame = document.getElementById("olympian-start-btn")
const mortalRules = document.getElementById("mortal-rules")
const demiRules = document.getElementById("demi-rules")
const olympianRules = document.getElementById("olympian-rules")
const quizGame = document.getElementById("quiz-container")

mortalGame.addEventListener('click', startGameMortal)
demiGame.addEventListener('click', startGameDemi)
olympianGame.addEventListener('click', startGameOlympian)


function startGameMortal() {
    mortalRules.classList.add('hide')
    quizGame.classList.remove('hide')
    setNextQuestion()

    
}

function startGameDemi() {

}

function startGameOlympian() {

}
function setNextQuestion() {

}

function selectAnswer() {

}


