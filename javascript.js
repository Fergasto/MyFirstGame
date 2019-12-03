
$(document).ready(function () {
    $(document).keyup(function(eventObject){
        if (eventObject.keyCode == 65) {
            handelFirstPlayer();
        }
        if (eventObject.keyCode == 66) {
            handelSecondPlayer();
        }
    });
    newInterval1 = setInterval(function () {
        $("#player-one__scale").height(function (i, value){
            i=value - 2;
            return i;
        });
        }, 500);
    newInterval2 = setInterval(function () {
        $("#player-two__scale").height(function (i, value){
            i=value - 2;
            return i;
        });
        }, 500);   
});




let playerOneScore=0;
let playerTwoScore=0;

function handelFirstPlayer() {
    playerOneScore++;
    $("#player-one__scale").height(function(i, value){
        i=value + 2;
        return i;
    });
    $("#player-one__scale__score").text(function(i, value){
        value=Number(value);
        i= value + 1;
        return i;
    });
};

function handelSecondPlayer() {
    playerTwoScore++;
    $("#player-two__scale").height(function(i, value){
        i=value + 2;
        return i;
    });
    $("#player-two__scale__score").text(function(i, value){
        value=Number(value);
        i= value + 1;
        return i;
    });
};







