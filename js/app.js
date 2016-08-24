randomNum = Math.floor(Math.random() * (4)

//constructor function for questions
var Question = function(asked, type){
  this.asked = asked;
  this.type = type;
}

//constructor function for ingredients
var Ingredients = function(ingredient){
  this.ingredient = ingredient;
}

var strong = new Ingredients([
  'Rum',
  'Whisky',
  'Gin'
])
var salty = new Ingredients([
  'Olive on a stick',
  'Salted rim',
  'Rasher of bacon'
])
var bitter = new Ingredients([
  'Shake of bitters',
  'Splash of tonic',
  'Twist of lemon'
]);
var sweet = new Ingredients ([
  'Sugar cube',
  'Spoonful of honey',
  'Splash of cola'
])
var fruity = new Ingredients([
  'Slice of orange',
  'Dash of cassis',
  'Cherry on top'
])

var pantry = [];
//displays current question
Question.prototype.display = function(){
  $('.preferences h2').html(questions[currentQuestion].asked);
}

currentQuestion = 0;

//array to store questions
var questions = [
  new Question('Do you like your drinks strong?', strong.ingredient),
  new Question('Do you like your drinks salty?', salty.ingredient),
  new Question('Do you like your drinks bitter?', bitter.ingredient),
  new Question('Do you like your drinks sweet?', sweet.ingredient),
  new Question('Do you like your drinks fruity?', fruity.ingredient)
];

$('.yes-button').on('click', function(){
  pantry.push(questions[currentQuestion].type)
  console.log(pantry);
})

$('.answer').on('click', function(){
  currentQuestion += 1;
  console.log(questions[currentQuestion].asked);
  questions[currentQuestion].display();
})

if (currentQuestion > questions.length){

}
