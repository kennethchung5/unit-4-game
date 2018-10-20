//generate four distinct random numbers 1-12
//19-120 for target number

//event: clicked crystal

function resetGame() {

    var currentTotal = 0;
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

    var targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#targetNumberDisplay").text(targetNumber);

};


// $("#testBtn").on("click", function() {
//     generate();
// });

$(".crystalImg").on("click", function(){
    alert("This crystal's value is " + $(this).attr("crystalValue"));
});