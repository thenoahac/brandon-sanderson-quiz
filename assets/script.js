var timer = document.querySelector("#timer");
var timeRemaining = 75;
var startBtn = document.querySelector(".start-btn")
var userChoices = document.querySelector(".questions-list");
var questionEl = document.querySelector("#question-box")
var option1El = document.querySelector("#option-1");
var option2El = document.querySelector("#option-2");
var option3El = document.querySelector("#option-3");
var option4El = document.querySelector("#option-4");
var infoBox = document.querySelector(".info")
var quizArea = document.querySelector(".game-box")
var optButton = document.querySelectorAll(".option-button");
var finalScore = document.querySelector(".final-result");
var finalResults = document.querySelector("#results");
var initialBox = document.querySelector("#initial-box");
var countdown = document.querySelector(".timer-header");
var scoreBoard = document.querySelector("#score-board");
var topScores = document.querySelector("#all-scores");
var topScoresList = [];
var questionCount = 0;
var questions = 
[
    {
        question: "What was the first book Brandon Sanderson wrote?",
        options: ["Mistborn", "Elantris", "The Way of Kings", "Warbreaker"],
        answer: 1
    },

    {
        question: "What iconic Fantasy series did Brandon Sanderson help finish writing?",
        options: ["Lord of The Rings", "Game of Thrones", "Wheel of Time", "The Inheritance Cycle"],
        answer: 2
    },

    {
        question: "What is Brandon Sanderson's bestselling novel?",
        options: ["Words of Radiance", "Elantris", "The Alloy of Law", "Skyward"],
        answer: 0
    },
    
    {
        question: "What Character can be spotted in all of Brandon's Books?",
        options: ["Vin", "Dalinar", "David", "Hoid"],
        answer: 3
    },

    {
        question: "What magic system does Vin use in the series Mistborn?",
        options: ["Surgebinding", "BioChroma", "AonDor", "Allomancy"],
        answer: 3
    }
];

function timerCountdown(){
    var timerDwn = setInterval(function() {
        timeRemaining--;
        timer.textContent = `Time Remaining:${timeRemaining}s`;
        if (timeRemaining === 0 || questionCount === questions.length) {
            clearInterval(timerDwn);
            quizArea.style.display = "none";
            finalScore.style.display = "block";
            finalResults.textContent = ("Your score is: " + timeRemaining + "!");
        }
    }, 1000);
}

startBtn.addEventListener("click", beginQuiz)

function beginQuiz() {
    infoBox.style.display = "none";
    quizArea.style.display = "block";
    countdown.style.display = "block";
    questionCount = 0;

    timerCountdown();
    showQuestion(questionCount);
}


function showQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        option1El.textContent = questions[id].options[0];
        option2El.textContent = questions[id].options[1];
        option3El.textContent = questions[id].options[2];
        option4El.textContent = questions[id].options[3];
    }
}

function verifyAns(event) {
    event.preventDefault();

    if (questions[questionCount].answer === event.target.value) {

    }

    else if (questions[questionCount].answer !== event.target.value){
    timeRemaining = timeRemaining - 10;
    }

    if (questionCount < questions.length) {
        questionCount++;
    }
    showQuestion(questionCount);
}

    optButton.forEach(item => {
        item.addEventListener ("click", verifyAns);
    });

    function submitScore(event) {
        event.preventDefault();

        finalResults.style.display = "none";
        scoreBoard.style.display = "block";
    }


// SCRAPPED IDEAS BELOW

//startBtn.addEventListener("click", function(){
   // var currentQuestion = questions[0].question
   // questionEl.textContent = currentQuestion
   // var firstAnswer = questions[0].options[0]
   // option1El.textContent = firstAnswer
   // var secondAnswer = questions[0].options[1]
   // option2El.textContent = secondAnswer
   // var thirdAnswer = questions[0].options[2]
  //  option3El.textContent = thirdAnswer
  //  var fourthAnswer = questions[0].options[3]
   // option4El.textContent = fourthAnswer
   // startBtn.style.display = 'none';
  //  infoBox.style.display = 'none';
  //  quizArea.style.display = 'block';
  //  countdown.style.display = 'block';
//})

//optButton.addEventListener("click", function(){
  //  var currentQuestion = questions[].question
   // questionEl.textContent = currentQuestion
  //  var firstAnswer = questions[0].options[0]
   // option1El.textContent = firstAnswer
  //  var secondAnswer = questions[0].options[1]
   // option2El.textContent = secondAnswer
  //  var thirdAnswer = questions[0].options[2]
  //  option3El.textContent = thirdAnswer
  //  var fourthAnswer = questions[0].options[3]
  //  option4El.textContent = fourthAnswer
//})







// start quiz function 
// run the quiz function when you click start button
// give some classes in css to turn things on and off
// apply the class to the start button to hide it as well
// unhide the questions 
// start the timer
// show timer as well and update the text content to equal the time
// time is going to be a global variable








// questions array
// currentQuestion = 0
// timeLeft
// score
// highscores

// startGame
    // triggered by event listener on start game button
    // start timer
    // setup 1st question
    // loadQuestion()

// timer
    // setInterval()
    // render to page

// loadQuestion 
    // currentQeustion++
    // render the question and multiple choices to the page
    // btn1.textContent = 


// checkAnswer 
    // check which button user clicked
    // compare the choice with correct answer
    // act on right/wrong answer
    // loadQuestion()

// endGame 
    // called at end of timer or when current question > # of questions
    // cancel timer
    // prompt for user initials
    // local storage
        // 1. read ls and store in js variable
        // 2. check if null
        // 3. update js variable with our new score
        // 4. render to page
        // 5. save updated js variable to ls
    // make highscores visible
    // prompt to play again?