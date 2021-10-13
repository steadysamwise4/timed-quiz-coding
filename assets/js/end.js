const MAX_HIGH_SCORES = 10
var recentScore = localStorage.getItem("mostRecentScore")
console.log(recentScore)
var scoreEl = document.querySelector(".score")
scoreEl.textContent = "Score: " + recentScore;
var highScoresArr = JSON.parse(localStorage.getItem("highScoresArr")) || [];
var saveButtonEl = document.querySelector(".save-button")

// save button function
saveButtonEl.addEventListener("click", function() {
    var initials = document.querySelector(".initials").value;
console.log(initials);
var scoreObj = {initials, recentScore}
highScoresArr.push(scoreObj);

// limit array length to 50 scores
if (highScoresArr.length >= 50) {
    highScoresArr.length = 50
}
localStorage.setItem("highScoresArr", JSON.stringify(highScoresArr))

return window.location.assign("file:///C:/Users/Sam%20and%20Maggie/Desktop/Classwork/weekly-challenges/timed-quiz-coding/highScores.html")
})