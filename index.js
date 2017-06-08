var height = 100;
var sound = new Audio('StarWars.mp3');

function start(){
    var text = document.getElementById('op');
    var image = document.getElementById('logo');
    if(height <= 100){
        height-= .01;
        console.log(text.style.top);
        text.style.top = height + "px"; 
        image.style.top = height+ "px";
    }
    setInterval(start, 00);
}