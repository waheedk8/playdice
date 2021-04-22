var randomnumbr1 = Math.floor(Math.random()*6)+1;
 
var randomdice1 = "dice" + randomnumbr1 + ".png";

var randomimage1 = "images/" + randomdice1 ;

document.querySelectorAll("img")[0].setAttribute("src", randomimage1);

var randomnumbr2 = Math.floor(Math.random()*6)+1;

var randomdice2 = "images/dice" + randomnumbr2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomdice2);

if (randomnumbr1 > randomnumbr2)
{

    document.querySelector("h1").innerHTML = "player 1 is winner";
}
else if (randomnumbr2 > randomnumbr1) {

document.querySelector("h1").innerHTML = "player 2 is winner";

}
else{

    document.querySelector("h1").innerHTML = "Match draw"; 
}



