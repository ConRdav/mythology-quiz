# GREEK MYTHOLOGY QUIZ

This quiz is desgined to test your Greek Mythology knowledge. Choose between three diffculties, Mortal, Demi-God and Olympian. And you will have to work your way through 10 questions for each difficulty. But be careful if the timer runs down then you can't answer. Once you've beaten a difficulty why not try the next one and see if you are worthy to be an Olympian yourself. Do you have what it takes?


## Features

### Existing Features

- __Choose Your Username__

    - Here you pick you username for the quiz. You are limited to using numbers(0-9) and letters(a-z). If you entered a special character an alert will pop up on your browser and warn you to pick a username using letters and numbers. Once your username is selected press submit and you'll be taken to the difficulty selector page.
    ![Choose your username](/assets/images/create-username-page.webp)

- __Difficulty Selector__

    - The difficulty selector allows you to choose how challenging you want the quiz to be. You get the option between three diffculties, Mortal, Demi-God and Olympian each with different time constrainst. For example you only have 10 seconds to answer a question before you're timed out in Olympian difficulty. When clicked each diffculty will take you to their specific quiz rules.
    ![Difficulty Selector](/assets/images/diifculty-selector-page.webp)

- __Quiz Rules__

  - Depending on the difficulty picked you'll be taken to the rules page which will describe how the quiz works.However if you don't like the difficulty you picked you'll be able to head back to the choose difficulty page by clicking the change difficulty button. Once you have read the rules press 'Start Quiz' to start the quiz.
  ![Quiz Rules](/assets/images/rules-page.webp)

- __Quiz Game__ 

  - Once you start the quiz the user will be presented with a question counter, a timer, the question itself and the answer button options.
  - Once the user picks and answer it will turn green if correct or red if wrong. Once an answer is selected the user will not be able to select another and the next button will show up for them to move onto the next question.
  -Also if the timer runs to zero the answer buttons will be locked and show you the correct answer.
  ![Quiz Game](/assets/images/quiz-game.webp)
  ![Quiz Game Correct](/assets/images/quiz-game-correct-answer.webp)
  ![Quiz Game Wrong](/assets/images/quiz-game-wrong-answer.webp)
  ![Quiz Game Timeout](/assets/images/quiz-game-timeout.webp)

- __Quiz Game Exit Quiz__ 

  - Once inside the quiz you'll be able to leave the game by pressing the exit button. From there you'll be shown a message asking if you really want to leave the quiz with 'yes' and 'no' buttons. If you click yes you'll be taken to the difficulty selector screen. But if you select no you'll be taken back to where you were in the quiz and the timer will start counting down again.
  ![Exit Quiz](/assets/images/quiz-game-exit.webp)

- __Results Page__

  - Once all questions have been answered the user will be shown a button to head to the results page.On the results page the user will be able to see how many questions they got right and have an option to play again. If you click the play again button you'll be taken to the difficulty selector screen so you try the quiz at a different difficulty.
  ![Quiz Results](/assets/images/quiz-game-results.webp)

 ### Features Left to Implement
 
 - I would like to add score specific messages for score ranges. For example if you got between 1-4 questions right a message saying "Better luck next time!".


## Testing 

- The choose your username section is responsive across all screen sizes.
![Responsiveness Choose your username](/assets/images/responsive.webp)

- The difficultty is responsive and its style is similar on screen sizes. As shown in the image below.
![Responsiveness Difficulty Selector](/assets/images/responsive-about.webp)

-The Quiz rules is responsive on each screen size and easy to read. As shown in the image below.
![Responsiveness Quiz Rules](/assets/images/responsive-gallery.webp)

- The Quiz game is responsive on each screen size and easy to read. As shown in the image below.
![Responsiveness Quiz Game](/assets/images/responsive-contact.webp)

- The exit quiz message is responsive on all screen sizes. As shown in the image below.
![Responsiveness Exit Quiz](/assets/images/responsive-contact.webp)

- The Quiz results page is responsive on all screen sizes and there were no issues when trying to make it responsive.
![Responsiveness Quiz Results](/assets/images/responsive-contact.webp)

-This website was tested on a Iphone 11, Ipad Air 2 and  where all aspects of the website were responsive.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator] - https://validator.w3.org/nu/?doc=https%3A%2F%2Fconrdav.github.io%2Fmythology-quiz%2F

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator] - 

- JSHint
  - No errors. It states the question is undefined but it is just defined in a separate JavaScript file (questions.js)

### Lighthouse Testing
-![Lighthouse](/assets/images/lighthouse.webp)

### Unfixed Bugs


## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Main Branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - 

### Content 
- Some of the questions in the quiz were taken from (https://meebily.com/greek-mythology-trivia-questions-answers/)
- The framework for the set interval timer and clock were taken from W3Scool and Stack Overflow(https://stackoverflow.com/questions/4435776simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward) and (https://www.w3schools.com/jsref/met_win_setinterval.asp)
- The framework for the map.get() method was from Stack overflow and MDN Web docs (https://stackoverflow.com/questions/4246980/how-to-create-a-simple-map-using-javascript-jquery) and (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get).


### Media
- The background image was taken from Shutterstock.



