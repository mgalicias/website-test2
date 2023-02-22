//alert("Hello World");
//document.querySelector("h1").innerHTML = "Good Bye" // document object element module


function rollTheDice(){
    var dice1Number = Math.floor(Math.random()*6);
    var dice2Number = Math.floor(Math.random()*6);

    switch (dice1Number) {
        case 0:
            document.querySelector(".dice1").src = "images/dice1.png";
            break;
        case 1:
            document.querySelector(".dice1").src = "images/dice1.png";
            break;
        case 2:
            document.querySelector(".dice1").src = "images/dice2.png";
            break;
        case 3:
            document.querySelector(".dice1").src = "images/dice3.png";
            break;
        case 4:
            document.querySelector(".dice1").src = "images/dice4.png";
            break;
        case 5:
            document.querySelector(".dice1").src = "images/dice5.png";
            break;
        case 6:
            document.querySelector(".dice1").src = "images/dice6.png";
            break;
    }

    switch (dice2Number) {
        case 0:
            document.querySelector(".dice2").src = "images/dice1.png";
            break;
        case 1:
            document.querySelector(".dice2").src = "images/dice1.png";
            break;
        case 2:
            document.querySelector(".dice2").src = "images/dice2.png";
            break;
        case 3:
            document.querySelector(".dice2").src = "images/dice3.png";
            break;
        case 4:
            document.querySelector(".dice2").src = "images/dice4.png";
            break;
        case 5:
            document.querySelector(".dice2").src = "images/dice5.png";
            break;
        case 6:
            document.querySelector(".dice2").src = "images/dice6.png";
            break;
    }
    //console.log("The dicee number are: "+dice1Number+" "+dice2Number);
    isEqual(dice1Number,dice2Number);
}

function isEqual( dice1, dice2){
    var title = document.querySelector("#title");
    if ( dice1 === dice2 ){
        title.innerHTML = "Draw!"
    }else if ( dice1 > dice2){
        title.innerHTML = " 🚩 Player 1 wins!"
    }else if ( dice1 < dice2){
        title.innerHTML = " Player 2 wins! 🚩 "
    }
}


var btn = document.getElementById("btn-roll");
btn.addEventListener("click",rollTheDice);