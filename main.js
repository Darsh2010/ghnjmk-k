canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent = "";
var color = "black";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent= "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX -  canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY -  canvas.offsetTop;
    if (mouseEvent== "mouseDown"){
        console.log("Current position of x and y coordinates");
        console.log("x = "+current_position_of_mouse_x +" y="+current_position_of_mouse_y );
        ctx.beginPath();
        ctx.stokeStyle = color;
        ctx.lineWidth =  3;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,50,0,2*Math.PI);
        ctx.stroke();
}}