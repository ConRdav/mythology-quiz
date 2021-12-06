// Collecting all elements needed

//Start game button
const mortalGame = document.getElementById("mortal-start-btn")
const demiGame = document.getElementById("demi-start-btn")
const olympianGame = document.getElementById("olympian-start-btn")

//Difficulty selector buttons
const mortalDifficulty = document.getElementById("mortal-btn")
const demiDifficulty = document.getElementById("demi-btn")
const olympianDifficulty = document.getElementById("olympian-btn")
const difficultyTitle = document.getElementById("difficulty-title")

//Difficulty rules
const mortalRules = document.getElementById("mortal-rules")
const demiRules = document.getElementById("demi-rules")
const olympianRules = document.getElementById("olympian-rules")

//change difficulty button
const mortalChangeDifficulty = document.getElementById("mortal-change-btn")
const demiChangeDifficulty = document.getElementById("demi-change-btn")
const olympianChangeDifficulty = document.getElementById("olympian-change-btn")

//quiz game elements
const quizGame = document.getElementById("quiz-container")
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById("question")
const nextButton = document.getElementById("next-btn")
const answers = document.getElementsByName("answer");

//all event listeners

//If difficulty clicked
mortalDifficulty.addEventListener('click', startMortalRules)
demiDifficulty.addEventListener('click', startDemiRules)
olympianDifficulty.addEventListener('click', startOlympianRules)

//If change difficulty clicked
mortalChangeDifficulty.addEventListener('click', startChangeDifficultyMortal)
demiChangeDifficulty.addEventListener('click', startChangeDifficultyDemi)
olympianChangeDifficulty.addEventListener('click', startChangeDifficultyOlympian)

//If start button clicked
mortalGame.addEventListener('click', startGameMortal)
demiGame.addEventListener('click', startGameDemi)
olympianGame.addEventListener('click', startGameOlympian)

//If next button clicked
nextButton.addEventListener('click', nextButtonClicked)
    


//all functions
//opens quiz and difficulty rules when difficulty clicked
function startMortalRules() {
    mortalRules.classList.remove('hide')
    mortalDifficulty.classList.add('hide')
    demiDifficulty.classList.add('hide')
    olympianDifficulty.classList.add('hide')
    difficultyTitle.classList.add('hide')
}

function startDemiRules() {
    demiRules.classList.remove('hide')
    mortalDifficulty.classList.add('hide')
    demiDifficulty.classList.add('hide')
    olympianDifficulty.classList.add('hide')
    difficultyTitle.classList.add('hide')
}

function startOlympianRules() {
    olympianRules.classList.remove('hide')
    mortalDifficulty.classList.add('hide')
    demiDifficulty.classList.add('hide')
    olympianDifficulty.classList.add('hide')
    difficultyTitle.classList.add('hide')
}

// Goes back to difficulty selectors when clicked
function startChangeDifficultyMortal(){
    mortalRules.classList.add('hide')
    mortalDifficulty.classList.remove('hide')
    demiDifficulty.classList.remove('hide')
    olympianDifficulty.classList.remove('hide')
    difficultyTitle.classList.remove('hide')

}

function startChangeDifficultyDemi(){
    demiRules.classList.add('hide')
    mortalDifficulty.classList.remove('hide')
    demiDifficulty.classList.remove('hide')
    olympianDifficulty.classList.remove('hide')
    difficultyTitle.classList.remove('hide')

}

function startChangeDifficultyOlympian(){
    olympianRules.classList.add('hide')
    mortalDifficulty.classList.remove('hide')
    demiDifficulty.classList.remove('hide')
    olympianDifficulty.classList.remove('hide')
    difficultyTitle.classList.remove('hide')
}

//starts the difficulty quiz when clicked
function startGameMortal() {
    mortalRules.classList.add('hide')
    quizGame.classList.remove('hide')
    shuffledQuestions = questionsMortal.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()  
}

function startGameDemi() {
    demiRules.classList.add('hide')
    quizGame.classList.remove('hide')
    shuffledQuestions = questionsDemi.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()  

}

function startGameOlympian() {
    olympianRules.classList.add('hide')
    quizGame.classList.remove('hide')
    shuffledQuestions = questionsOlympian.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion() 
}

//Loads question when start button and next button clicked
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//Shows question and answer options
function showQuestion(shuffledQuestions) {
    questionElement.innerText = shuffledQuestions.question
    document.getElementById("answer-a").innerHTML = shuffledQuestions.answerA;
    document.getElementById("answer-b").innerHTML = shuffledQuestions.answerB;
    document.getElementById("answer-c").innerHTML = shuffledQuestions.answerC;
    document.getElementById("answer-d").innerHTML = shuffledQuestions.answerD;
    if (answers.correct) {
        answers.dataset.correct = answers.correct
    }
    answers.addEventListener('click', selectAnswer)
}

// hides the next button 
function resetState() {
    nextButton.classList.add('hide')
}

//
function selectAnswer(e) {
    const selectedButton = e.startGameMortal
    const correct = selectedButton.dataset.correct
    Array.from(answers).forEach(answer => {
        setStatusClass(answer, answer.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide') 
    } 
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function nextButtonClicked() {
    currentQuestionIndex++
    setNextQuestion()
}