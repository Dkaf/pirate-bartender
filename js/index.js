var $ = require('jquery');
var questionjs = require('./questions.js');
var bartenderjs = require('./bartender.js');
var clickjs = require('./on_click.js');

$(document).ready(function(){
	questionjs();
	bartenderjs();
	clickjs();
})
