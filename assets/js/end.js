var recentScore = localStorage.getItem("mostRecentScore")
console.log(recentScore)
var scoreEl = document.querySelector(".score")
scoreEl.textContent = recentScore;
var highScoresArr = JSON.parse(localStorage.getItem("highScoresArr")) || [];
var saveButtonEl = document.querySelector(".save-button")
saveButtonEl.addEventListener("click", function() {
    var initials = document.querySelector(".initials").value;
console.log(initials);
var scoreObj = {initials, recentScore}
highScoresArr.push(scoreObj);
localStorage.setItem("highScoresArr", JSON.stringify(highScoresArr))
})