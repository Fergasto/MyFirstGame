
$(document).ready(function () {
    let playerOneScore=0;
    let playerTwoScore=0;
    init();
    initTwo();
    gameResult();
    function init() {
        $('#player-one__button').bind( 'click', oneAccountCounter );
    }
        function oneAccountCounter() {
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
    }
    function initTwo() {
        $('#player-two__button').bind( 'click', twoAccountCounter );
    }
    function twoAccountCounter() {
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
    }
    function gameResult() {
        $('#result-button').bind( 'click', showResult );
    }
    function showResult() {
        alert ('Player one score ='+ playerOneScore + 'Player two score ='+ playerTwoScore);
    }
});





