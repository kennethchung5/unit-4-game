//generate four distinct random numbers 1-12
//19-120 for target number


var currentTotal;
var targetNumber;

var wins = 0;
var losses = 0;

function resetGame() {
    currentTotal = 0;
    $("#currentTotalDisplay").text(currentTotal);

    //generate array of four distinct random numbers
    var valuesArray = [];

    while (valuesArray.length < 4) {
        newValue = Math.ceil(Math.random() * 12);
        
        if (valuesArray.indexOf(newValue) === -1) {
            valuesArray.push(newValue)
        };
    };

    //assign these values to the crystals
    for (var i = 0; i < valuesArray.length; i++) {
        $("#crystalImg" + i).attr("crystalValue", valuesArray[i]);
    };

    console.log("This is the array of values: " + valuesArray);

    targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#targetNumberDisplay").text(targetNumber);
};


resetGame();


$(".crystalImg").on("click", function(){
    // alert("This crystal's value is " + $(this).attr("crystalValue"));

    $("#resultDisplay").text("");

    currentTotal += parseInt($(this).attr("crystalValue"));
    $("#currentTotalDisplay").text(currentTotal);

    if (currentTotal > targetNumber) {
        //loss scenario
        $("#resultDisplay").text("You lost!");
        losses += 1;
        $("#lossesDisplay").text(losses);
        
        resetGame();
    }
    else if (currentTotal === targetNumber) {
        //win scenario
        $("#resultDisplay").text("You won!");
        wins += 1;
        $("#winsDisplay").text(wins);

        resetGame();
    };
});