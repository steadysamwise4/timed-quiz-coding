var time = 60;
var questionsContainerEl = document.querySelector(".questions-container");

// function for instructions and start quiz button to be visible when page loads
var pageLoad = function () {
    // create instuctions section
    var instructionsEl = document.createElement('p');
    instructionsEl.className = 'intro';
    instructionsEl.textContent = 'Welcome to Timed Quiz: javaScript beginner. You will have 1 minute to answer 10 questions. Click the button below to begin!';
    questionsContainerEl.appendChild(instructionsEl);
};

pageLoad();