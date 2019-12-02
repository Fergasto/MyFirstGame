
$(document).ready(function () {
    $(document).keyup(function(eventObject){
        if (eventObject.keyCode == 65) {
            handelFirstPlayer();
        }
        if (eventObject.keyCode == 66) {
            handelSecondPlayer();
        }
    });
});

let playerOneScore=0;
let playerTwoScore=0;

function handelFirstPlayer() {
    playerOneScore++;
    $("#player-one__scale").height(function(i, value){
        i=value + 2;
        return i;
    });
    $("#player-one__scale__score").text(function(y, val){
        val=Number(val);
        y= val + 1;
        return y;
    });
};

function handelSecondPlayer() {
    playerTwoScore++;
    $("#player-two__scale").height(function(i, value){
        i=value + 2;
        return i;
    });
    $("#player-two__scale__score").text(function(y, val){
        val=Number(val);
        y= val + 1;
        return y;
    });
};







