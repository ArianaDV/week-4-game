var win = 0 ;
var lose = 0 ;

var rubyValue;
var diamondValue;
var emeraldValue;
var yellowStoneValue;

var targetNum;

var totalSum = 0; 



//Displays target number

targetNum = Math.floor(Math.random() * 100) + 1 ;

$("#randomNum").text(targetNum);



//Assigns random values to crystals

var computerChoiceRuby = Math.floor(Math.random() * 10) + 1 ;

var computerChoiceDiamond = Math.floor(Math.random() * 10) + 1 ;

var computerChoiceEmerald = Math.floor(Math.random() * 10) + 1 ;

var computerChoiceYellowStone = Math.floor(Math.random() * 10) + 1 ;


$("#ruby").on("click", function() {

	rubyValue= parseInt(computerChoiceRuby) ;

	totalSum += rubyValue;

	$("#sumNum").text(totalSum);

	if ( totalSum === targetNum) {
	win ++;

	reset ();

	$("#score").text("Wins:" + win) ;

	targetNum = Math.floor(Math.random() * 100) + 1 ;

	$("#randomNum").text(targetNum);

	
	}

else if ( totalSum >= targetNum) {

	lose ++;

	reset ();

	$("#score").text("Losses:" + lose) ;

	targetNum = Math.floor(Math.random() * 100) + 1 ;

	$("#randomNum").text(targetNum);

	}

	}
);



$("#diamond").on("click", function() {

	diamondValue = parseInt(computerChoiceDiamond) ;

	totalSum += diamondValue;

	$("#sumNum").text(totalSum);

	if ( totalSum === targetNum) {
	win ++;

	reset ();

	$("#score").text("Wins:" + win) ;

	targetNum = Math.floor(Math.random() * 100) + 1 ;

	$("#randomNum").text(targetNum);

	
	
}

else if ( totalSum >= targetNum) {

	lose ++;

	reset ();

	$("#score").text("Losses:" + lose) ;

	targetNum = Math.floor(Math.random() * 100) + 1 ;

	$("#randomNum").text(targetNum);

	
}

}
);


$("#emerald").on("click", function() {

	emeraldValue = parseInt(computerChoiceEmerald) ;

	totalSum += emeraldValue;

	$("#sumNum").text(totalSum);

	if ( totalSum === targetNum) {
	win ++;

	reset ();

	$("#score").text("Wins:" + win) ;

	targetNum = Math.floor(Math.random() * 100) + 1 ;

	$("#randomNum").text(targetNum);

	
	
}

else if ( totalSum >= targetNum) {

	lose ++;

	reset ();

	$("#score").text("Losses:" + lose) ;

	targetNum = Math.floor(Math.random() * 100) + 1 ;

	$("#randomNum").text(targetNum);

	
}

}
);


$("#yellowStone").on("click", function() {

	yellowStoneValue = parseInt(computerChoiceYellowStone) ;

	totalSum += yellowStoneValue;

	$("#sumNum").text(totalSum);

if ( totalSum === targetNum) {
	win ++;

	reset ();

	$("#score").text("Wins:" + win) ;

	targetNum = Math.floor(Math.random() * 100) + 1 ;

	$("#randomNum").text(targetNum);

	
	
}

else if ( totalSum >= targetNum) {

	lose ++;

	reset ();

	$("#score").text("Losses:" + lose) ;

	targetNum = Math.floor(Math.random() * 100) + 1 ;

	$("#randomNum").text(targetNum);

	
}


}
);

function reset() {

	totalSum = 0;
}

$("#clear").on("click", function() {

	$("#sumNum").text("0");
 
} );

