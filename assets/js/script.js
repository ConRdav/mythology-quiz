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
const questionElement= document.getElementById("question")
const answerA = document.getElementById("answer-a")
const answerB = document.getElementById("answer-b")
const answerC = document.getElementById("answer-c")
const answerD = document.getElementById("answer-d")
const nextButton = document.getElementById("next-btn")
const answers = document.getElementsByClassName("answer-btn")
let questionIndex = 0;
let questionNumber = 1;


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
    document.getElementById("question-number").innerHTML = questionNumber;
    questionElement.innerHTML = questionsMortal[questionIndex].question
    answerA.innerHTML = questionsMortal[questionIndex].answers[0].option
    answerA.onclick = () => {
        if(questionsMortal[questionIndex].answers[0].answer === true){
        answerA.classList.add('correct','no-click')   
        answerB.classList.add('no-click')
        answerC.classList.add('no-click')
        answerD.classList.add('no-click')
        
    }else{
        answerA.classList.add('wrong','no-click')
        answerB.classList.add('no-click')
        answerC.classList.add('no-click')
        answerD.classList.add('no-click')
    }
    if([questionIndex]<9){
        nextButton.classList.remove('hide')
    }
}
    answerB.innerHTML = questionsMortal[questionIndex].answers[1].option
    answerB.onclick = () => {
        if(questionsMortal[questionIndex].answers[1].answer=== true){
            answerB.classList.add('correct','no-click')
            answerA.classList.add('no-click')
            answerC.classList.add('no-click')
            answerD.classList.add('no-click')
            }else{
            answerB.classList.add('wrong', 'no-click')
            answerA.classList.add('no-click')
            answerC.classList.add('no-click')
            answerD.classList.add('no-click')
    }
    if([questionIndex]<9){
        nextButton.classList.remove('hide')
    }
}
    answerC.innerHTML = questionsMortal[questionIndex].answers[2].option
    answerC.onclick = () => {
        if(questionsMortal[questionIndex].answers[2].answer === true){
            answerC.classList.add('correct','no-click')
            answerA.classList.add('no-click')
            answerB.classList.add('no-click')
            answerD.classList.add('no-click')
            }else{
            answerC.classList.add('wrong','no-click')
            answerA.classList.add('no-click')
            answerB.classList.add('no-click')
            answerD.classList.add('no-click')
    }
    if([questionIndex]<9){
        nextButton.classList.remove('hide')
    }
}
    answerD.innerHTML = questionsMortal[questionIndex].answers[3].option
    answerD.onclick = () => {
        if(questionsMortal[questionIndex].answers[3].answer === true){
            answerD.classList.add('correct','no-click')
            answerA.classList.add('no-click')
            answerB.classList.add('no-click')
            answerC.classList.add('no-click')
            }else{
            answerD.classList.add('wrong','no-click')
            answerA.classList.add('no-click')
            answerB.classList.add('no-click')
            answerC.classList.add('no-click')
    }
    if([questionIndex]<9){
        nextButton.classList.remove('hide')
    }
}
nextButton.onclick = () => {
    questionNumber++;
    questionIndex++;
    resetAnswers()
    startGameMortal()
}
}

function startGameDemi() {
    demiRules.classList.add('hide')
    quizGame.classList.remove('hide')
    document.getElementById("question-number").innerHTML = questionNumber;
    questionElement.innerHTML = questionsDemi[questionIndex].question
    answerA.innerHTML = questionsDemi[questionIndex].answers[0].option
    answerA.onclick = () => {
        if(questionsDemi[questionIndex].answers[0].answer === true){
            answerA.classList.add('correct','no-click')   
            answerB.classList.add('no-click')
            answerC.classList.add('no-click')
            answerD.classList.add('no-click')
        
    }else{
        answerA.classList.add('wrong','no-click')
        answerB.classList.add('no-click')
        answerC.classList.add('no-click')
        answerD.classList.add('no-click')
    }
    if([questionIndex]<9){
        nextButton.classList.remove('hide')
    }
}
    answerB.innerHTML = questionsDemi[questionIndex].answers[1].option
    answerB.onclick = () => {
        if(questionsDemi[questionIndex].answers[1].answer=== true){
            answerB.classList.add('correct','no-click')
            answerA.classList.add('no-click')
            answerC.classList.add('no-click')
            answerD.classList.add('no-click')
            }else{
            answerB.classList.add('wrong', 'no-click')
            answerA.classList.add('no-click')
            answerC.classList.add('no-click')
            answerD.classList.add('no-click')
        } 
        if([questionIndex]<9){
                nextButton.classList.remove('hide')
        }
}
    answerC.innerHTML = questionsDemi[questionIndex].answers[2].option
    answerC.onclick = () => {
        if(questionsDemi[questionIndex].answers[2].answer === true){
            answerC.classList.add('correct','no-click')
            answerA.classList.add('no-click')
            answerB.classList.add('no-click')
            answerD.classList.add('no-click')
            }else{
            answerC.classList.add('wrong','no-click')
            answerA.classList.add('no-click')
            answerB.classList.add('no-click')
            answerD.classList.add('no-click')
    }
    if([questionIndex]<9){
        nextButton.classList.remove('hide')
    }
}
    answerD.innerHTML = questionsDemi[questionIndex].answers[3].option
    answerD.onclick = () => {
        if(questionsDemi[questionIndex].answers[3].answer === true){
            answerD.classList.add('correct','no-click')
            answerA.classList.add('no-click')
            answerB.classList.add('no-click')
            answerC.classList.add('no-click')
            }else{
            answerD.classList.add('wrong','no-click')
            answerA.classList.add('no-click')
            answerB.classList.add('no-click')
            answerC.classList.add('no-click')
    }
    if([questionIndex]<9){
        nextButton.classList.remove('hide')
    }
}
nextButton.onclick = () => {
    questionNumber++;
    questionIndex++;
    resetAnswers()
    startGameDemi()
}
}

function startGameOlympian() {
    olympianRules.classList.add('hide')
    quizGame.classList.remove('hide')
    document.getElementById("question-number").innerHTML = questionNumber;
    questionElement.innerHTML = questionsOlympian[questionIndex].question
    answerA.innerHTML = questionsOlympian[questionIndex].answers[0].option
    answerA.onclick = () => {
        if(questionsOlympian[questionIndex].answers[0].answer === true){
        answerA.classList.add('correct','no-click')   
        answerB.classList.add('no-click')
        answerC.classList.add('no-click')
        answerD.classList.add('no-click')
        }else{
        answerA.classList.add('wrong','no-click')
        answerB.classList.add('no-click')
        answerC.classList.add('no-click')
        answerD.classList.add('no-click')
        }
        if([questionIndex]<9){
            nextButton.classList.remove('hide')
        }
    }
    answerB.innerHTML = questionsOlympian[questionIndex].answers[1].option
    answerB.onclick = () => {
        if(questionsOlympian[questionIndex].answers[1].answer=== true){
        answerB.classList.add('correct','no-click')
        answerA.classList.add('no-click')
        answerC.classList.add('no-click')
        answerD.classList.add('no-click')
        }else{
        answerB.classList.add('wrong', 'no-click')
        answerA.classList.add('no-click')
        answerC.classList.add('no-click')
        answerD.classList.add('no-click')
        }
        if([questionIndex]<9){
            nextButton.classList.remove('hide')
        }
    }
    answerC.innerHTML = questionsOlympian[questionIndex].answers[2].option
    answerC.onclick = () => {
        if(questionsOlympian[questionIndex].answers[2].answer === true){
        answerC.classList.add('correct','no-click')
        answerA.classList.add('no-click')
        answerB.classList.add('no-click')
        answerD.classList.add('no-click')
        }else{
        answerC.classList.add('wrong','no-click')
        answerA.classList.add('no-click')
        answerB.classList.add('no-click')
        answerD.classList.add('no-click')
       }
       if([questionIndex]<9){
        nextButton.classList.remove('hide')
    }
    }
    answerD.innerHTML = questionsOlympian[questionIndex].answers[3].option
    answerD.onclick = () => {
        if(questionsOlympian[questionIndex].answers[3].answer === true){
        answerD.classList.add('correct','no-click')
        answerA.classList.add('no-click')
        answerB.classList.add('no-click')
        answerC.classList.add('no-click')
        }else{
        answerD.classList.add('wrong','no-click')
        answerA.classList.add('no-click')
        answerB.classList.add('no-click')
        answerC.classList.add('no-click')
        }
        if([questionIndex]<9){
            nextButton.classList.remove('hide')
        }
    }
}
    nextButton.onclick = () => {
        questionNumber++;
        questionIndex++;
        resetAnswers()
        startGameOlympian()
    }


function resetAnswers(){
    answerA.classList.remove('correct','wrong','no-click')
    answerB.classList.remove('correct','wrong','no-click')
    answerC.classList.remove('correct','wrong','no-click')
    answerD.classList.remove('correct','wrong','no-click')
    nextButton.classList.add('hide')
}
