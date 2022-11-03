var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",handClick);

function handClick(){
  var buttonInner=this.innerHTML;
  makeSound(buttonInner);
  buttonAnimation(buttonInner)

}

}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key1){
      switch (key1) {
    case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case "j":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
    case "k":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    case "l":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
  
    default:
        break;
  } 
}

function buttonAnimation(currentKey) {
    var activebutton = document.querySelector("."+currentKey)
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}