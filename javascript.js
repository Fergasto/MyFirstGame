
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

            if (h1 >= 110) {
                clearInterval(newInterval);
                clearInterval(eyeInterval);
                alert("Player One WIN!!!");
            } if (h2 >=110) {
                clearInterval(eyeInterval);
                clearInterval(newInterval);
                alert("Player Two WIN!!!");
            };
            }, 500);
            
            function randomInteger(min, max) {
                // получить случайное число от (min-0.5) до (max+0.5)
                let rand = min - 0.5 + Math.random() * (max - min + 1);
                return Math.round(rand);
            };

        let interval = randomInteger(2000, 5000);
        let scale = 0;
        eyeInterval = setInterval(function () {
            scale++
            if (scale%2==0) {
                changeColor ("green")
            } else {changeColor("red")};
        }, interval);   
    });

    
});


let playerOneScore=0;
let playerTwoScore=0;

function changeColor (newColor) {
    let eye = document.getElementById("eye");
    eye.style.backgroundColor = newColor;
};

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







