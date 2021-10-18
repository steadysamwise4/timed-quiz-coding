const questionEl = document.querySelector('.bold-question')
const answersListEl = Array.from(document.querySelectorAll('.choice'))
const responseEl = document.querySelector('.response')
const progressText = document.querySelector('.progress-text')
const scoreText = document.querySelector('.score')
const timerEl = document.querySelector(".time")

// array of questions
let questionsArr = [{
    question: "An object is an unordered list of________.",
    choice1: "Values",
    choice2: "Names",
    choice3: "Properties",
    choice4: "All of the Above",
    answer: 3
}, {
    question: "What stores data value and can be changed later on?",
    choice1: 'node',
    choice2: 'console.log',
    choice3: 'variable',
    choice4: 'class name',
    answer: 3
}, {
    question:'How many ways are there with which to declare a variable in javaScript?' ,
    choice1: 'Only One',
    choice2: 'Three',
    choice3: 'Infinitely Many',
    choice4: 'None of the Above',
    answer: 2
}, {
    question: 'A block of code designed to perform a particular task.',
    choice1: 'scope',
    choice2: 'function',
    choice3: 'iterator',
    choice4: 'string',
    answer: 2
}, {
    question: 'Inside which html element do we put the javaScript?',
    choice1: '<javacript>',
    choice2: '<js>',
    choice3: '<src>',
    choice4: '<script>',
    answer: 4
}, {
    question: 'Allows javaScript sites and apps to save key-value pairs in a web browser.',
    choice1: 'localStorage',
    choice2: 'constant',
    choice3: 'repository',
    choice4: 'github',
    answer: 1
}, {
    question: 'What is the first step in the process of saving work to a remote github repository?',
    choice1: 'git push',
    choice2: 'git pull',
    choice3: 'git checkout',
    choice4: 'git add -A',
    answer: 4
}, {
    question: 'Which of the following represents loops in javaScript?',
    choice1: 'for',
    choice2: 'while',
    choice3: 'forEach',
    choice4: 'All of the Above',
    answer: 4
}, {
    question: 'Which method is used to insert a new element at the end of an array?',
    choice1: 'unshift()',
    choice2: 'push()',
    choice3: 'pop()',
    choice4: 'None of the Above',
    answer: 2
}, {
    question: 'Arrays in javaScript are declared using ______.',
    choice1: 'curly brackets {}',
    choice2: 'square brackets []',
    choice3: 'parenthesis ()',
    choice4: 'None of the Above',
    answer: 2
}
    

];
let timeLeft = 60;
// timer section
// Timer that counts down from 30
function countdown() {
    //var timeLeft = 30;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = 'Time: ' + timeLeft ;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } 
       else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = 'Out of Time!';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign("file:///C:/Users/Sam%20and%20Maggie/Desktop/Classwork/weekly-challenges/timed-quiz-coding/end.html")
      }
    }, 1000);
  }
    
    

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

const SCORE_POINTS = 10
const MAX_QUESTIONS = 10
const TIME_PENALTY = 2
playGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questionsArr]
    changeQuestion()
}

changeQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score + timeLeft)
        return window.location.assign("file:///C:/Users/Sam%20and%20Maggie/Desktop/Classwork/weekly-challenges/timed-quiz-coding/end.html")
    }
    questionCounter++
    progressText.innerText = "Question " + questionCounter + " of " + MAX_QUESTIONS

    const questionsArrIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsArrIndex]
    questionEl.innerText = currentQuestion.question

    answersListEl.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    } )

    availableQuestions.splice(questionsArrIndex, 1)

    acceptingAnswers = true
}

answersListEl.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        } else if(classToApply === "incorrect") {
            decrementTime(TIME_PENALTY)

        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout (()=> {
            selectedChoice.parentElement.classList.remove(classToApply)
            changeQuestion()
        }, 500)
    })
})

decrementTime = num => {
    timeLeft -= num
    timerEl.innerText = "Time: " + timeLeft
}

incrementScore = num => {
    score += num
    scoreText.innerText = "Score: " + score
}
countdown()
playGame()