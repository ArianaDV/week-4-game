var win = 0 ;
var lose = 0 ;

var rubyValue;
var diamondValue;
var emeraldValue;
var yellowStoneValue;


var combination = [] ;
var totalSum;



$("button").on("click", function() {

var computerChoiceGuess = Math.floor(Math.random() * 1000) + 1 ;

$("#randomNum").text(computerChoiceGuess);

console.log("Hey!");


});

var computerChoiceRuby = Math.floor(Math.random() * 1000) + 1 ;

var computerChoiceDiamond = Math.floor(Math.random() * 1000) + 1 ;

var computerChoiceEmerald = Math.floor(Math.random() * 1000) + 1 ;

var computerChoiceYellowStone = Math.floor(Math.random() * 1000) + 1 ;


$("#ruby").on("click", function() {

	rubyValue=computerChoiceRuby;

	$("#sumNum").text(rubyValue);

		
}
);


$("#diamond").on("click", function() {

	diamondValue=computerChoiceDiamond;

	$("#sumNum").text(diamondValue);

}
);


$("#emerald").on("click", function() {

	emeraldValue=computerChoiceEmerald;

	$("#sumNum").text(emeraldValue);

}
);


$("#yellowStone").on("click", function() {

	yellowStoneValue=computerChoiceYellowStone;

	$("#sumNum").text(yellowStoneValue);

}
);

