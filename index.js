for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makeSound(this.innerHTML.toLowerCase());
        buttonFlash(this.innerHTML.toLowerCase());
    });
}
document.addEventListener("keydown", function(event) {
    makeSound(event.key.toLowerCase());
    buttonFlash(event.key.toLowerCase());
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "a":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "s":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "d":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(this.innerHTML);

    }
}

function buttonFlash(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100)
}
