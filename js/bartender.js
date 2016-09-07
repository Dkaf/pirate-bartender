randomNum = Math.floor(Math.random() * (4))

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

module.exports = Bartender;
module.exports = randomNum;
