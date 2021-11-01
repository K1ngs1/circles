var mouseevent = "";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = document.getElementById("color").value;
radius = document.getElementById("radius").value;
Width = document.getElementById("width").value;

canvas.addEventListener("mousedown", my_mousedown);
mouseevent = "mousedown";

function my_mousedown(e){
        
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    Width = document.getElementById("width").value;
    mouseevent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseevent = "mouseup"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseevent = "mouseleave"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown"){
        console.log("the Current position of x and y is = ");
        console.log("x = ", mousex, "y = ", mousey);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(mousex, mousey, radius, 0, 2*Math.PI);
        ctx.stroke();
    }

    mouseevent = "mousemove"
}
