var $ = require('jquery');

currentQuestion = 0;

$('.yes-button').on('click', function(){
  pantry.push(questions[currentQuestion].type)
})

$('.answer').on('click', function(){
  currentQuestion += 1;
  if (currentQuestion >= questions.length){
    if (pantry.length == 0){
      $('.finished-drink').html('You must answer yes to at least one question to get a drink');
      currentQuestion = 0;
      questions[currentQuestion].display();
    }else{
      var result = new Bartender(pantry)
      result.createDrink();
      result.displayDrink();
    }
  }
  else{
    console.log(questions[currentQuestion].asked);
    questions[currentQuestion].display();
    }
})

$('.new-drink').on('click', function(){
  currentQuestion = 0;
  $('.preferences').show();
  questions[currentQuestion].display();
  $('.finished-drink').html('');
})
