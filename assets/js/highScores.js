var highScores = JSON.parse(localStorage.getItem("highScoresArr"))
highScores.sort(function(a,b){
    return b.recentScore - a.recentScore;
})
console.log(highScores)
var olEl = document.querySelector(".score-list");
highScores.forEach(score => {
   var li = document.createElement("li");
   li.textContent = score.initials + " " + score.recentScore;
   
   olEl.appendChild(li);
});