var $ = require('jquery');
var ingredientsjs = require('./ingredients.js');

//constructor function for questions
var Question = function(asked, type){
  this.asked = asked;
  this.type = type;
}

Question.prototype.display = function(){
  $('.preferences h2').html(questions[currentQuestion].asked);
}

var questions = [
  new Question('Do you like your drinks strong?', strong.ingredient),
  new Question('Do you like your drinks salty?', salty.ingredient),
  new Question('Do you like your drinks bitter?', bitter.ingredient),
  new Question('Do you like your drinks sweet?', sweet.ingredient),
  new Question('Do you like your drinks fruity?', fruity.ingredient)
];
