

//constructor function for ingredients
var Ingredients = function(ingredient){
  this.ingredient = ingredient;
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

module.exports = Ingredients;
module.exports = strong;
