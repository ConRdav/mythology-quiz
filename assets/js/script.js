// Collecting all elements needed
/**
 * Mortal difficulty = 1
 * Demi difficulty = 2
 * Olympian difficulty = 3
 */

//Start game button
const mortalGame = document.getElementById("mortal-start-btn");
const demiGame = document.getElementById("demi-start-btn");
const olympianGame = document.getElementById("olympian-start-btn");

//Difficulty selector buttons
const mortalDifficulty = document.getElementById("mortal-btn");
const demiDifficulty = document.getElementById("demi-btn");
const olympianDifficulty = document.getElementById("olympian-btn");
const difficultyTitle = document.getElementById("difficulty-title");

//Difficulty rules
const mortalRules = document.getElementById("mortal-rules");
const demiRules = document.getElementById("demi-rules");
const olympianRules = document.getElementById("olympian-rules");

//change difficulty button
const mortalChangeDifficulty = document.getElementById("mortal-change-btn");
const demiChangeDifficulty = document.getElementById("demi-change-btn");
const olympianChangeDifficulty = document.getElementById("olympian-change-btn");

// Container elements
const quizGame = document.getElementById("quiz-container");
const questionElement= document.getElementById("question");
const answerA = document.getElementById("answer-a");
const answerB = document.getElementById("answer-b");
const answerC = document.getElementById("answer-c");
const answerD = document.getElementById("answer-d");
const scoreElement = document.getElementById("score");
const resultsPage = document.getElementById("quiz-results");
const timer = document.getElementById("question-timer");
const inputUsername = document.getElementById("username-value");
const chooseDifficultyTitle = document.getElementById("difficulty-title");
const usernameForm = document.getElementById("username-form");
const usernameElement = document.getElementById("chosen-username");
const usernameElementResult = document.getElementById("chosen-username-result");
const exitQuiz = document.getElementById("exit-quiz");

// Button elements
const exitQuizYesButton = document.getElementById("yes-btn");
const exitQuizNoButton = document.getElementById("no-btn");
const resultsButton = document.getElementById("results-btn");
const exitButton = document.getElementById("exit-btn");
const replayButton = document.getElementById("replay-btn");
const submitButton = document.getElementById("submit-btn");
const nextButton = document.getElementById("next-btn");

// Game variables
let questionIndex = 0;
let questionNumber = 1;
let questionSet = [];
let selectedAnswer = "";
let difficulty = null;
let scoreTotal = 0;
let timeLeft = null;
let timerId = null;
let username = "";

// Game flags
let isGamePaused = false;
let isAnswerSelected = false;

var myRegEx = /[^a-z\d]/i;

const indexMap = new Map([
    [ "answer-a", 0 ],
    [ "answer-b", 1 ],
    [ "answer-c", 2 ],
    [ "answer-d", 3 ]
]);

//All event listeners

//If difficulty clicked
mortalDifficulty.addEventListener('click', startGameRules);
demiDifficulty.addEventListener('click', startGameRules);
olympianDifficulty.addEventListener('click', startGameRules);

//If change difficulty clicked
mortalChangeDifficulty.addEventListener('click', startChangeGameDifficulty);
demiChangeDifficulty.addEventListener('click', startChangeGameDifficulty);
olympianChangeDifficulty.addEventListener('click', startChangeGameDifficulty);

//If start button clicked
mortalGame.addEventListener('click', startGame);
demiGame.addEventListener('click', startGame);
olympianGame.addEventListener('click', startGame);

// If answer clicked
answerA.addEventListener('click', checkAnswer);
answerB.addEventListener('click', checkAnswer);
answerC.addEventListener('click', checkAnswer);
answerD.addEventListener('click', checkAnswer);

// Button click
nextButton.addEventListener('click', nextButtonClicked);
submitButton.addEventListener('click', submitUsername);
exitButton.addEventListener('click', exitGameClicked);
replayButton.addEventListener('click', returnToChooseDifficulty);
exitQuizYesButton.addEventListener('click', returnToChooseDifficulty);
exitQuizNoButton.addEventListener('click', returnToQuiz);
resultsButton.addEventListener('click', showResults);

/**
 * Method called on click of 'Submit' username
 *  - Method checks for invalid characters using RegExp test (only letters and numbers are allowed)
 *  - If the username is valid, the app will display the choose difficulty screen
 *  - If the username is invalid, the user will be prompted to input a valid username
 */
function submitUsername() {
    if (inputUsername.value != null && inputUsername.value != undefined && inputUsername.value.length > 0) {
        let isValidUsername = !(myRegEx.test(inputUsername.value));
        if (isValidUsername == true) {
            username = inputUsername.value;
            usernameElement.innerHTML = username;
            usernameElementResult.innerHTML = username;
            proceedToChooseDifficulty();
        } else {
            alert("Invalid username. Please input a valid username to proceed.");
        }
    } else {
        alert("Please enter a username before proceeding.");
    }
}

/**
 * Method to display the Choose Difficulty screen
 */
function proceedToChooseDifficulty() {
    usernameForm.classList.add('hide');
    chooseDifficultyTitle.classList.remove('hide');
    mortalDifficulty.classList.remove('hide');
    demiDifficulty.classList.remove('hide');
    olympianDifficulty.classList.remove('hide');
}

/**
 * Method uses a switch statement to generate Game Rules based on the difficulty selected
 */
function startGameRules(e) {
    difficulty = e.target.attributes.value.value;
    console.log(difficulty);
    switch (difficulty) {
        case "1":
            // Mortal
            showMortalRules();
            break;
        case "2":
            // Demi
            showDemiRules();
            break;
        case "3":
            // Olympian
            showOlympianRules();
            break;
    }
}

function showMortalRules() {
    mortalRules.classList.remove('hide');
    mortalDifficulty.classList.add('hide');
    demiDifficulty.classList.add('hide');
    olympianDifficulty.classList.add('hide');
    difficultyTitle.classList.add('hide');
}

function showDemiRules() {
    demiRules.classList.remove('hide');
    mortalDifficulty.classList.add('hide');
    demiDifficulty.classList.add('hide');
    olympianDifficulty.classList.add('hide');
    difficultyTitle.classList.add('hide');
}

function showOlympianRules() {
    olympianRules.classList.remove('hide');
    mortalDifficulty.classList.add('hide');
    demiDifficulty.classList.add('hide');
    olympianDifficulty.classList.add('hide');
    difficultyTitle.classList.add('hide');
}

/**
 * Method returns to the Choose Difficulty page from the Game Rules display
 */
function startChangeGameDifficulty(e) {
    switch (difficulty) {
        case "1":
            // Mortal
            mortalRules.classList.add('hide');
            mortalDifficulty.classList.remove('hide');
            demiDifficulty.classList.remove('hide');
            olympianDifficulty.classList.remove('hide');
            difficultyTitle.classList.remove('hide');
            break;
        case "2":
            // Demi
            demiRules.classList.add('hide');
            mortalDifficulty.classList.remove('hide');
            demiDifficulty.classList.remove('hide');
            olympianDifficulty.classList.remove('hide');
            difficultyTitle.classList.remove('hide');
            break;
        case "3":
            // Olympian
            olympianRules.classList.add('hide');
            mortalDifficulty.classList.remove('hide');
            demiDifficulty.classList.remove('hide');
            olympianDifficulty.classList.remove('hide');
            difficultyTitle.classList.remove('hide');
            break;
    }
}

/**
 * Method called upon click of Start Game
 *  - Question set is determined by filtering the questions based on the difficulty selected
 *  - Question and timer generated
 */
function startGame() {
    hideRules();
    quizGame.classList.remove('hide');
    document.getElementById("question-number").innerHTML = questionNumber;
    questionSet = questions.filter((question) => {
        return question.difficulty == difficulty;
    });
    setTimer();
    setQuestion();
}

/**
 * Method to hide rule displays
 */
function hideRules() {
    mortalRules.classList.add('hide');
    demiRules.classList.add('hide');
    olympianRules.classList.add('hide');
}

/**
 * Question and answers generated based on question set and question index
 */
function setQuestion() {
    isAnswerSelected = false;
    questionElement.innerHTML = questionSet[questionIndex].question;
    answerA.innerHTML = questionSet[questionIndex].answers[0].option;
    answerB.innerHTML = questionSet[questionIndex].answers[1].option;
    answerC.innerHTML = questionSet[questionIndex].answers[2].option;
    answerD.innerHTML = questionSet[questionIndex].answers[3].option;
}

/**
 * Method uses switch statement to set timer based on difficulty selected
 */
function setTimer() {
    switch (difficulty) {
        case "1":
            // Mortal
            timeLeft = 30;
            break;
        case "2":
            // Demi
            timeLeft = 20;
            break;
        case "3":
            // Olympian
            timeLeft = 10;
            break;
    }
    clearTimeout(timerId);
    timer.innerHTML = timeLeft;
    timerId = setInterval(countdown, 1000);
}

/**
 * Method updates the timer 
 *  - If the exit button is clicked or an answer is selected, the timer is paused
 */
function countdown() {
    if (isGamePaused != true) {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            timeUp();
        } else if (isAnswerSelected) {
            // timer paused
        } else {
            timer.innerHTML = timeLeft;
            timeLeft--;
        }
    }
}

/**
 * When the timer is up, the answers are frozen and the correct answer is revealed
 */
function timeUp() {
    freezeAnswers(true);
    questionSet[questionIndex].answers.forEach((answer, i) => { 
        if (answer.answer == true) {
            highlightAnswer(i, true);
        }
    });
    nextButton.classList.remove('hide');
}

/**
 * Method checks the answer
 *  - A forEach loop is used to iterate through the answers and highlight them 
 *  - If the selected answer is correct, it is highlighted green and the score tally is increased
 *  - If the selected answer is wrong, it is highlighted red and the correct answer is highlighted green
 */
function checkAnswer(e) {
   let answerIndex = indexMap.get(e.target.attributes.id.value);
   selectedAnswer = questionSet[questionIndex].answers[answerIndex].option;
   freezeAnswers(false);
   isAnswerSelected = true;

   questionSet[questionIndex].answers.forEach((answer, i) => {   
        if (answer.option == selectedAnswer && answer.answer == true) {
            highlightAnswer(i, true);
            scoreTotal++;
        } else if (answer.option == selectedAnswer && answer.answer == false) {
            highlightAnswer(i, false);
        } else if (answer.option != selectedAnswer && answer.answer == true) {
            highlightAnswer(i, true);
        }
   });

   if (questionIndex < (questionSet.length - 1)) {
        nextButton.classList.remove('hide');
    } else {
        scoreElement.innerHTML = scoreTotal;
        resultsButton.classList.remove('hide');
    }
}

/**
 * Method used to highlight the answer according to the index and whether it is correct or not
 * @param {*} answerIndex 
 * @param {*} isCorrect 
 */
function highlightAnswer(answerIndex, isCorrect) {
    switch (answerIndex) {
        case 0:
            // A
            if (isCorrect == true) {
                answerA.classList.remove('wrong');
                answerA.classList.add('correct','no-click') ;  
            } else {
                answerA.classList.add('wrong','no-click');
            }
            break;
        case 1:
            // B
            if (isCorrect == true) {
                answerB.classList.remove('wrong');
                answerB.classList.add('correct','no-click');   
            } else {
                answerB.classList.add('wrong','no-click');
            }
            break;
        case 2:
            // C
            if (isCorrect == true) {
                answerC.classList.remove('wrong');
                answerC.classList.add('correct','no-click'); 
            } else {
                answerC.classList.add('wrong','no-click');
            }
            break;
        case 3:
            // D
            if (isCorrect == true) {
                answerD.classList.remove('wrong');
                answerD.classList.add('correct','no-click');  
            } else {
                answerD.classList.add('wrong','no-click');
            }
            break;
       }
    }

/**
 * On click of next button:
 *  - Question number and index increased
 *  - Answers reset, questions set, and timer reset
 */
function nextButtonClicked() {
        questionNumber++;
        questionIndex++;
        resetAnswers();
        startGame();
}

/**
 * @param {*} timeUp 
 * 
 * Method to freeze the answers
 *  - If the time is up, the answers are highlighted red
 */
function freezeAnswers(timeUp) {
    if (timeUp) {
        answerA.classList.add('no-click', 'wrong');
        answerB.classList.add('no-click', 'wrong');
        answerC.classList.add('no-click', 'wrong');
        answerD.classList.add('no-click', 'wrong');
    } else {
        answerA.classList.add('no-click');
        answerB.classList.add('no-click');
        answerC.classList.add('no-click');
        answerD.classList.add('no-click');
    }
}

/**
 * Reset answer classList
 */
function resetAnswers(){
    answerA.classList.remove('correct','wrong','no-click');
    answerB.classList.remove('correct','wrong','no-click');
    answerC.classList.remove('correct','wrong','no-click');
    answerD.classList.remove('correct','wrong','no-click');
    nextButton.classList.add('hide');
}

/**
 * Method to display the results screen
 */
function showResults() {
    usernameElement.innerHTML = username;
    quizGame.classList.add('hide');
    resultsPage.classList.remove('hide');
}

/**
 * Method to display the exit game confirmation screen
 */
function exitGameClicked() {
    isGamePaused = true;
    quizGame.classList.add('hide');
    exitQuiz.classList.remove('hide');
}

/**
 * Method to return to the quiz after cancelling exit game request
 */
function returnToQuiz() {
    isGamePaused = false;
    exitQuiz.classList.add('hide');
    quizGame.classList.remove('hide');
}

/**
 * Method to exit game and return to the choose difficulty screen
 */
function returnToChooseDifficulty() {
    quizGame.classList.add('hide');
    resultsPage.classList.add('hide');
    exitQuiz.classList.add('hide');
    resetGame();
    proceedToChooseDifficulty();
}

/**
 * Method to reset the game
 *  - Resets answers
 *  - Resets buttons
 *  - Resets logic flags
 *  - Resets variables
 */
function resetGame() {
    resetAnswers();
    resetButtons();
    resetFlags();
    resetGameVariables();
}

function resetGameVariables() {
    clearTimeout(timerId);
    questionIndex = 0;
    questionNumber = 1;
    questionSet = [];
    selectedAnswer = "";
    difficulty = null;
    scoreTotal = 0;
}

function resetFlags() {
    isAnswerSelected = false;
    isGamePaused = false;
}

function resetButtons() {
    nextButton.classList.add('hide');
    resultsButton.classList.add('hide');
}