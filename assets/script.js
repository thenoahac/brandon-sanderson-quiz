var startBtn = document.querySelector(".start-btn")
console.log(startBtn)
var userChoices = document.querySelector(".questions");
console.log(userChoices)
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
];

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