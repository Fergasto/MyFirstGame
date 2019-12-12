
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
            let winnerScore = 150;
            if (h1 >= winnerScore) {
                clearInterval(newInterval);
                clearTimeout(eyeInterval);
                alert("Player One WIN!!!");
            } if (h2 >=winnerScore) {
                clearTimeout(eyeInterval);
                clearInterval(newInterval);
                alert("Player Two WIN!!!");
            };
        }, 500);

        let eye = document.getElementById("eye");
        eye.style.backgroundColor = "red";
        let scale = 1;
        
            eyeInterval = setTimeout(function tick() { 
                eyeInterval =  setTimeout(tick,randomInteger(1000,5000))
                scale++
                if (scale%2==0) {
                    changeColor ("green")
                } else {changeColor("red")};
                }, randomInteger(1000,5000));
           
    });
    function changeColor (newColor) {
        eye.style.backgroundColor = newColor;
    };
    
    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
        
    };  
    
    function handelFirstPlayer() {
        if (eye.style.backgroundColor == "red"){
            
            $("#player-one__scale").height(function(i, value){
                i=value + 2;
                return i;
            });
            $("#player-one__scale__score").text(function(i, value){
                value=Number(value);
                i= value + 1;
                return i;
            });
        } else {
            $("#player-one__scale").height(function(i, value){
                i=value - 2;
                return i;
            });
            $("#player-one__scale__score").text(function(i, value){
                value=Number(value);
                i= value - 1;
                return i;
            });
        };
    };
    
    function handelSecondPlayer() {
        if (eye.style.backgroundColor == "red") {
            $("#player-two__scale").height(function(i, value){
                i=value + 2;
                return i;
            });
            $("#player-two__scale__score").text(function(i, value){
                value=Number(value);
                i= value + 1;
                return i;
            });
        } else {
            $("#player-two__scale").height(function(i, value){
                i=value - 2;
                return i;
            });
            $("#player-two__scale__score").text(function(i, value){
                value=Number(value);
                i= value - 1;
                return i;
            });
        };
    };
});













