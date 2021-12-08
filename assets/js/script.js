// Collecting all elements needed
/**
 * Mortal difficulty = 1
 * Demi difficulty = 2
 * Olympian difficulty = 3
 */

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
const questionElement= document.getElementById("question")
const answerA = document.getElementById("answer-a")
const answerB = document.getElementById("answer-b")
const answerC = document.getElementById("answer-c")
const answerD = document.getElementById("answer-d")
const nextButton = document.getElementById("next-btn")
const answers = document.getElementsByClassName("answer-btn")
const scoreElement = document.getElementById("score")
const resultsPage = document.getElementById("quiz-results")
const timer = document.getElementById("question-timer")

// Game variables
let questionIndex = 0;
let questionNumber = 1;
let questionSet = [];
let selectedAnswer = "";
let difficulty = null;
let scoreTotal = 0;
let isGameComplete = false;
let timeLeft = null;
let timerId = null;
let isAnswerSelected = false;

//all event listeners

//If difficulty clicked
mortalDifficulty.addEventListener('click', startGameRules)
demiDifficulty.addEventListener('click', startGameRules)
olympianDifficulty.addEventListener('click', startGameRules)

//If change difficulty clicked
mortalChangeDifficulty.addEventListener('click', startChangeGameDifficulty)
demiChangeDifficulty.addEventListener('click', startChangeGameDifficulty)
olympianChangeDifficulty.addEventListener('click', startChangeGameDifficulty)

//If start button clicked
mortalGame.addEventListener('click', startGame)
demiGame.addEventListener('click', startGame)
olympianGame.addEventListener('click', startGame)

// If answer clicked
answerA.addEventListener('click', checkAnswer)
answerB.addEventListener('click', checkAnswer)
answerC.addEventListener('click', checkAnswer)
answerD.addEventListener('click', checkAnswer)

// If next button clicked
nextButton.addEventListener('click', nextButtonClicked)

//all functions
function startGameRules(e) {
    difficulty = e.target.attributes.value.value
    console.log(difficulty)
    switch (difficulty) {
        case "1":
            // Mortal
            mortalRules.classList.remove('hide')
            mortalDifficulty.classList.add('hide')
            demiDifficulty.classList.add('hide')
            olympianDifficulty.classList.add('hide')
            difficultyTitle.classList.add('hide')
            break;
        case "2":
            // Demi
            demiRules.classList.remove('hide')
            mortalDifficulty.classList.add('hide')
            demiDifficulty.classList.add('hide')
            olympianDifficulty.classList.add('hide')
            difficultyTitle.classList.add('hide')
            break;
        case "3":
            // Olympian
            olympianRules.classList.remove('hide')
            mortalDifficulty.classList.add('hide')
            demiDifficulty.classList.add('hide')
            olympianDifficulty.classList.add('hide')
            difficultyTitle.classList.add('hide')
            break;
    }
}

// Goes back to difficulty selectors when clicked
function startChangeGameDifficulty(e) {
    switch (difficulty) {
        case "1":
            // Mortal
            mortalRules.classList.add('hide')
            mortalDifficulty.classList.remove('hide')
            demiDifficulty.classList.remove('hide')
            olympianDifficulty.classList.remove('hide')
            difficultyTitle.classList.remove('hide')
            break;
        case "2":
            // Demi
            demiRules.classList.add('hide')
            mortalDifficulty.classList.remove('hide')
            demiDifficulty.classList.remove('hide')
            olympianDifficulty.classList.remove('hide')
            difficultyTitle.classList.remove('hide')
            break;
        case "3":
            // Olympian
            olympianRules.classList.add('hide')
            mortalDifficulty.classList.remove('hide')
            demiDifficulty.classList.remove('hide')
            olympianDifficulty.classList.remove('hide')
            difficultyTitle.classList.remove('hide')
            break;
    }
}

function startGame() {
    switch (difficulty) {
        case "1":
            // Mortal
            mortalRules.classList.add('hide')
            break;
        case "2":
            // Demi
            demiRules.classList.add('hide')
            break;
        case "3":
            // Olympian
            olympianRules.classList.add('hide')
            break;
    }
    quizGame.classList.remove('hide')
    document.getElementById("question-number").innerHTML = questionNumber
    questionSet = questions.filter((question) => {
        return question.difficulty == difficulty
    });
    setQuestion()
    setTimer()
}

function setQuestion() {
    isAnswerSelected = false;
    questionElement.innerHTML = questionSet[questionIndex].question
    answerA.innerHTML = questionSet[questionIndex].answers[0].option
    answerB.innerHTML = questionSet[questionIndex].answers[1].option
    answerC.innerHTML = questionSet[questionIndex].answers[2].option
    answerD.innerHTML = questionSet[questionIndex].answers[3].option
}

function setTimer() {
    switch (difficulty) {
        case "1":
            // Mortal
            timeLeft = 30
            break;
        case "2":
            // Demi
            timeLeft = 20
            break;
        case "3":
            // Olympian
            timeLeft = 10
            break;
    }
    clearTimeout(timerId)
    timer.innerHTML = timeLeft;
    timerId = setInterval(countdown, 1000)
}

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId)
        timeUp()
    } else if (isAnswerSelected) {
        console.log('freeze timer')
    } else {
        timer.innerHTML = timeLeft
        timeLeft--;
    }
}

function timeUp() {
    freezeAnswers(true)
    questionSet[questionIndex].answers.forEach((answer, i) => { 
        if (answer.answer == true) {
            highlightAnswer(i, true)
        }
    });
    nextButton.classList.remove('hide')
}

function checkAnswer(e) {
   let answerIndex = e.target.attributes.index.value
   selectedAnswer = questionSet[questionIndex].answers[answerIndex].option 
   freezeAnswers(false)
   isAnswerSelected = true

   questionSet[questionIndex].answers.forEach((answer, i) => {   
        if (answer.option == selectedAnswer && answer.answer == true) {
            highlightAnswer(i, true)
            scoreTotal++;
        } else if (answer.option == selectedAnswer && answer.answer == false) {
            highlightAnswer(i, false)
        } else if (answer.option != selectedAnswer && answer.answer == true) {
            highlightAnswer(i, true)
        } else {
            console.log('answer != selected answer && answer != true')
        }
   });

   if (questionIndex < (questionSet.length - 1)) {
        nextButton.classList.remove('hide')
    } else {
        isGameComplete = true;
        console.log('scoreTotal = ' + scoreTotal)
        scoreElement.innerHTML = scoreTotal
        nextButton.innerHTML = "Results"
        console.log('show results page')
        nextButton.onclick = () => {
            showResults()
        }
        nextButton.classList.remove('hide')
        // Show results page with score
    }
    console.log('ScoreTotal = ' + scoreTotal)
}

function highlightAnswer(answerIndex, isCorrect) {
    switch (answerIndex) {
        case 0:
            // A
            if (isCorrect == true) {
                answerA.classList.remove('wrong')
                answerA.classList.add('correct','no-click')   
            } else {
                console.log('add wrong style')
                answerA.classList.add('wrong','no-click')
            }
            break;
        case 1:
            // B
            if (isCorrect == true) {
                answerB.classList.remove('wrong')
                answerB.classList.add('correct','no-click')   
            } else {
                console.log('add wrong style')
                answerB.classList.add('wrong','no-click')
            }
            break;
        case 2:
            // C
            if (isCorrect == true) {
                answerC.classList.remove('wrong')
                answerC.classList.add('correct','no-click')   
            } else {
                console.log('add wrong style')
                answerC.classList.add('wrong','no-click')
            }
            break;
        case 3:
            // D
            if (isCorrect == true) {
                answerD.classList.remove('wrong')
                answerD.classList.add('correct','no-click')   
            } else {
                console.log('add wrong style')
                answerD.classList.add('wrong','no-click')
            }
            break;
       }
    }

function nextButtonClicked() {
    if (isGameComplete != true) {
        questionNumber++;
        questionIndex++;
        resetAnswers()
        startGame()
    }
}

function freezeAnswers(timeUp) {
    if (timeUp) {
        answerA.classList.add('no-click', 'wrong')
        answerB.classList.add('no-click', 'wrong')
        answerC.classList.add('no-click', 'wrong')
        answerD.classList.add('no-click', 'wrong')
    } else {
        answerA.classList.add('no-click')
        answerB.classList.add('no-click')
        answerC.classList.add('no-click')
        answerD.classList.add('no-click')
    }
}

function resetAnswers(){
    answerA.classList.remove('correct','wrong','no-click')
    answerB.classList.remove('correct','wrong','no-click')
    answerC.classList.remove('correct','wrong','no-click')
    answerD.classList.remove('correct','wrong','no-click')
    nextButton.classList.add('hide')
}

function showResults() {
    quizGame.classList.add('hide')
    resultsPage.classList.remove('hide')
}