//selecting all required elements
const music_btn = document.querySelector(".music_btn button");
const movie_btn = document.querySelector(".movie_btn button");
const tv_btn = document.querySelector(".tv_btn button");



// if startQuiz button clicked
music_btn.onclick = ()=>{
	    var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
  
});
}
// if movie button clicked
movie_btn.onclick = ()=>{
    location.href = "moviequiz/index.html";
}
// if music button clicked
tv_btn.onclick = ()=>{

}



// if exitQuiz button clicked




// if continueQuiz button clicked








// if quitQuiz button clicked




// if Next Que button clicked


// getting questions and options from array


// creating the new div tags which for icons

//if user clicked on option







