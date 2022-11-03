var randomNumber1= Math.floor(Math.random() * 6)+1;//1-6

var randomDiceImage ="dice"+randomNumber1+".png";//dice1.png - dice6.png

var randomImage = "images/" +randomDiceImage; // adding the folder

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);


//2nd dice


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice"+randomNumber2+".png";

var randomImage2 = "images/"+randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 😍"
}
if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins 😍"
}
