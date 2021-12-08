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
let questionIndex = 0;
let questionNumber = 1;
let questionSet = [];
let selectedAnswer = "";
let difficulty = null;

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
    console.log('inside startGameRules')
    console.log(e)
    console.log(e.target)
    console.log(e.target.attributes.value.value)
    difficulty = e.target.attributes.value.value
    console.log(difficulty)
    switch (difficulty) {
        case "1":
            // Mortal
            console.log('mortal difficulty')
            mortalRules.classList.remove('hide')
            mortalDifficulty.classList.add('hide')
            demiDifficulty.classList.add('hide')
            olympianDifficulty.classList.add('hide')
            difficultyTitle.classList.add('hide')
            break;
        case "2":
            // Demi
            console.log('demi difficulty')
            demiRules.classList.remove('hide')
            mortalDifficulty.classList.add('hide')
            demiDifficulty.classList.add('hide')
            olympianDifficulty.classList.add('hide')
            difficultyTitle.classList.add('hide')
            break;
        case "3":
            // Olympian
            console.log('olympian difficulty')
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
    console.log('inside startChangeGameDifficulty')
    console.log(e)
    switch (difficulty) {
        case "1":
            // Mortal
            console.log('change difficulty from mortal')
            mortalRules.classList.add('hide')
            mortalDifficulty.classList.remove('hide')
            demiDifficulty.classList.remove('hide')
            olympianDifficulty.classList.remove('hide')
            difficultyTitle.classList.remove('hide')
            break;
        case "2":
            // Demi
            console.log('change difficulty from demi')
            demiRules.classList.add('hide')
            mortalDifficulty.classList.remove('hide')
            demiDifficulty.classList.remove('hide')
            olympianDifficulty.classList.remove('hide')
            difficultyTitle.classList.remove('hide')
            break;
        case "3":
            // Olympian
            console.log('change difficulty from olympian')
            olympianRules.classList.add('hide')
            mortalDifficulty.classList.remove('hide')
            demiDifficulty.classList.remove('hide')
            olympianDifficulty.classList.remove('hide')
            difficultyTitle.classList.remove('hide')
            break;
    }
}

function startGame(e) {
    console.log('inside startGame')
    console.log(e)
    switch (difficulty) {
        case "1":
            // Mortal
            console.log('mortal to start')
            mortalRules.classList.add('hide')
            break;
        case "2":
            // Demi
            console.log('demi to start')
            demiRules.classList.add('hide')
            break;
        case "3":
            // Olympian
            console.log('olympian to start')
            olympianRules.classList.add('hide')
            break;
    }
    quizGame.classList.remove('hide')
    document.getElementById("question-number").innerHTML = questionNumber
    questionSet = questions.filter((question) => {
        return question.difficulty == difficulty
    });
    console.log('question set =')
    console.log(questionSet)
    setQuestion()
}

function setQuestion() {
    questionElement.innerHTML = questionSet[questionIndex].question
    answerA.innerHTML = questionSet[questionIndex].answers[0].option
    answerB.innerHTML = questionSet[questionIndex].answers[1].option
    answerC.innerHTML = questionSet[questionIndex].answers[2].option
    answerD.innerHTML = questionSet[questionIndex].answers[3].option
}

function checkAnswer(e) {
   console.log('inside checkAnswer') 
   console.log(e)
   console.log(e.target)
   console.log(e.target.attributes.index.value)
   let answerIndex = e.target.attributes.index.value
   selectedAnswer = questionSet[questionIndex].answers[answerIndex].option 
   freezeAnswers()
   console.log('selectedAnswer = ' + selectedAnswer)
   console.log('answers length = ' + questionSet[questionIndex].answers.length)

   questionSet[questionIndex].answers.forEach((answer, i) => {   
    console.log('answer = ')
    console.log(answer)
    console.log('i = ')
    console.log(i)
        if (answer.option == selectedAnswer && answer.answer == true) {
            console.log('answer = selected answer && answer = true')
            highlightAnswer(i, true)
            // Add to score here
        } else if (answer.option == selectedAnswer && answer.answer == false) {
            console.log('answer = selected answer && answer = false')
            highlightAnswer(i, false)
        } else if (answer.option != selectedAnswer && answer.answer == true) {
            console.log('answer != selected answer && answer = true')
            highlightAnswer(i, true)
        } else {
            console.log('answer != selected answer && answer != true')
        }
   });

   console.log('questionIndex = ' + questionIndex)
   console.log('question length = ' + questionSet.length)
   if (questionIndex < (questionSet.length - 1)) {
    console.log('next question')
    nextButton.classList.remove('hide')
    } else {
        console.log('show results page')
        // Show results page with score
    }
}

function highlightAnswer(answerIndex, isCorrect) {
    console.log('answerIndex = ' + answerIndex)
    console.log('isCorrect = ' + isCorrect)
    switch (answerIndex) {
        case 0:
            // A
            console.log('answer A')
            if (isCorrect == true) {
                answerA.classList.add('correct','no-click')   
            } else {
                console.log('add wrong style')
                answerA.classList.add('wrong','no-click')
            }
            break;
        case 1:
            // B
            if (isCorrect == true) {
                answerB.classList.add('correct','no-click')   
            } else {
                console.log('add wrong style')
                answerB.classList.add('wrong','no-click')
            }
            break;
        case 2:
            // C
            if (isCorrect == true) {
                answerC.classList.add('correct','no-click')   
            } else {
                console.log('add wrong style')
                answerC.classList.add('wrong','no-click')
            }
            break;
        case 3:
            // D
            if (isCorrect == true) {
                answerD.classList.add('correct','no-click')   
            } else {
                console.log('add wrong style')
                answerD.classList.add('wrong','no-click')
            }
            break;
       }
    }

function nextButtonClicked() {
    console.log('questionSet length = ' + questionSet.length)
    console.log('questionIndex = ' + questionIndex)
    questionNumber++;
    questionIndex++;
    resetAnswers()
    startGame()
}


function freezeAnswers() {
    answerA.classList.add('no-click')
    answerB.classList.add('no-click')
    answerC.classList.add('no-click')
    answerD.classList.add('no-click')
}

function resetAnswers(){
    answerA.classList.remove('correct','wrong','no-click')
    answerB.classList.remove('correct','wrong','no-click')
    answerC.classList.remove('correct','wrong','no-click')
    answerD.classList.remove('correct','wrong','no-click')
    nextButton.classList.add('hide')
}