const cnv = document.getElementById("my-canvas");
const ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables!!!
let mousex;
let mousey;
let state = "start";
let score = 0;

let clicky = {
    x: 400,
    y: 300,
    w: 10,
    h: 10
}

requestAnimationFrame(draw);

function draw() {
    if (state === "start") {
      drawStart();
   } else if (state === "gameon") {
      runGame();
   }
  
    // Request Animation Frame
    requestAnimationFrame(draw);
  }

document.addEventListener("mousedown", mousedownHandler);

function mousedownHandler(event) {
let rect = cnv.getBoundingClientRect();
let x = event.clientX - rect.left;
let y = event.clientY - rect.top;

if (
    x < clicky.x + clicky.w && 
    x > clicky.x &&
    y < clicky.y + clicky.h &&
    y > clicky.y
    ) {
    clicky.x = Math.random() * 790;
    clicky.y = Math.random() * 550; //Prevents box from spawning in the score text
    score++;
    }

if (state === "start") { 
    state = "gameon";
    }

}

function drawStart() {
//Draw Canvas
ctx.fillStyle = "black";
ctx.fillRect(0, 0, cnv.width, cnv.height);

ctx.font = "40px Consolas";
ctx.fillStyle = "white";
ctx.fillText("-CLICK TO START", 300, 400)
}

function runGame() {
//Draw Canvas
ctx.fillStyle = "black";
ctx.fillRect(0, 0, cnv.width, cnv.height);

ctx.font = "20px Consolas";
ctx.fillStyle = "white";
ctx.fillText("Score = ", 20, 580)
ctx.fillText(score, 120, 580)

//Draw Aim Square
ctx.fillStyle = "white";
ctx.fillRect(clicky.x, clicky.y, clicky.w, clicky.h);
}