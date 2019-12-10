
$(document).ready(function () {
    $(document).keyup(function(eventObject){
        if (eventObject.keyCode == 65) {
            handelFirstPlayer();
        }
        if (eventObject.keyCode == 66) {
            handelSecondPlayer();
        }
    });
    

    $("#start-button").click(function(){
        newInterval = setInterval(function () {
            $("#player-two__scale").height(function (i, value){
                i=value - 2;
                return i;
            });
            $("#player-one__scale").height(function (i, value){
                i=value - 2;
                return i;
            });
            let h1 = $("#player-one__scale").height();
            let h2 = $("#player-two__scale").height();

            // Тут задается верхний порог столбца

            if (h1 >= 110 || h2 >=110) {
                clearInterval(newInterval);
                console.log ("finish");
            };
            }, 500);  
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







