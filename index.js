var len_of_array =document.querySelectorAll(".drum").length;

// function handelClick (){
//     // alert("Click");
//    // var hello=new Audio("sounds/tom-1.mp3");
//    // hello.play();

//     // console.log(this.innerHTML);

//     // this.style.color = "white";

// }

// for(var i=0;i<len_of_array;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",handelClick);
// }


//this will look for button pressed
for(var i=0;i<len_of_array;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var button_inner_html = this.innerHTML;
        makeSound(button_inner_html);
        add_animation(button_inner_html);
    });
        
}


// for looking for keyboard press

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    add_animation(event.key);
});



function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick_bass=new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        default:
        alert(button_inner_html+"is not valid");
}
}


function add_animation(currentKey){
    //to select the cirrect box with the alphabet

    var activeButton = document.querySelector("." + currentKey);

    // the . is to represent the class

    // adding the pressed class to the active button

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}