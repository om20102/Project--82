var mouseEvent = "empty";
var lastPositionOfx,lastPositionOfy;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";
widthOfLine = 1;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentxposition=e.clientX-canvas.offsetLeft;
    currentyposition=e.clientY-canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        
        ctx.moveTo(lastPositionOfx,lastPositionOfy);
        ctx.lineTo(currentxposition,currentyposition);
        ctx.stroke();
    }
    lastPositionOfx = currentxposition;
    lastPositionOfy = currentyposition;
}