<<<<<<< HEAD
<<<<<<< HEAD
randomNum = Math.floor(Math.random() * (4))
=======

>>>>>>> fe4e63cdd87ad3b217fbca800986b97330b55a8f
=======

>>>>>>> fe4e63cdd87ad3b217fbca800986b97330b55a8f

//constructor function for questions
var Question = function(asked, type){
  this.asked = asked;
  this.type = type;
}

//constructor function for ingredients
var Ingredients = function(ingredient){
  this.ingredient = ingredient;
}

var Bartender = function(pantryChoices){
  this.pantryChoices = pantryChoices;
}

Bartender.prototype.createDrink = function(){
  var recipie = [];
  for (i=0;i < this.pantryChoices.length; i++){
    var randomNum = Math.floor(Math.random() * this.pantryChoices[i].length);
    recipie.push(this.pantryChoices[i][randomNum]);
  }
  this.recipie = recipie;
}

Bartender.prototype.displayDrink = function(){
  var drink = '';
  var connector = ', ';
  for (j = 0; j < this.recipie.length; j++){
    connector = (j == this.recipie.length -1 ? ' and a ': ', ')
    drink = drink + (j > 0 ? connector:"") + this.recipie[j];
  }
  $('.preferences').hide();
  $('.finished-drink').html('Here is a cocktail with ' + drink);
}

var strong = new Ingredients([
  'Rum',
  'Whisky',
  'Gin',
  'Vodka'
])
var salty = new Ingredients([
  'Olive on a stick',
  'Salted rim',
  'Rasher of bacon',
  'Sours',
  'Salt'
])
var bitter = new Ingredients([
  'Shake of bitters',
  'Splash of tonic',
  'Twist of lemon'
])
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
<<<<<<< HEAD
=======

>>>>>>> fe4e63cdd87ad3b217fbca800986b97330b55a8f
