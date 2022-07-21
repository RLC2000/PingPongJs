import "./styles.css";

var rod = document.getElementsByClassName("rod");
var width = window.innerWidth;
var height = window.innerHeight;
window.addEventListener("keypress", rodhelp);
console.log(rod.length);
let curlocX = width / 2 - 100;
for (var i = 0; i < rod.length; i++)
  rod[i].style.transform = "translateX(" + curlocX + "px)";

function rodhelp(event) {
  console.log(event.code);
  if (event.code == "KeyA") {
    if (curlocX > -3) {
      curlocX -= 5;
      for (var i = 0; i < rod.length; i++)
        rod[i].style.transform = "translateX(" + curlocX + "px)";
    }
  } else if (event.code == "KeyD") {
    console.log("HERE");
    if (curlocX <= width - 215) {
      curlocX += 5;
      for (var i = 0; i < rod.length; i++)
        rod[i].style.transform = "translateX(" + curlocX + "px)";
    }
  }
}

localStorage.setItem("upper", 0);
localStorage.setItem("lower", 0);
let upper = 0;
let lower = 0;

// BALLS WORKING
var ball = document.getElementById("ball");
// console.log(height);
//console.log(ball.getBoundingClientRect().top+30);
//console.log("HERE");
ball.style.transform = "translate(" + width / 4 + "px," + height / 2 + "px)";
//console.log("translate("+width/2+"px,"+height/2+"px);");
let start = true;
var id = setInterval(ballhlp, 30);
let prvx = 0;
let prvy = 0;
let ballx = ball.getBoundingClientRect().x;
let bally = ball.getBoundingClientRect().top;

function checkpos(ballx, rodx) {
  if (ballx >= rodx && ballx <= rodx + 200) return true;
  return false;
}
function ballhlp() {
  if (bally + 40 >= height - 30 && checkpos(ballx, curlocX)) {
    if (prvx < ballx) {
      prvx = ballx;
      prvy = bally;
      ballx += 5;
      bally -= Math.random() * 20 + 1;
      ball.style.transform = "translate(" + ballx + "px," + bally + "px)";
    } else {
      prvx = ballx;
      prvy = bally;
      ballx -= 5;
      bally -= Math.random() * 20 + 1;
      ball.style.transform = "translate(" + ballx + "px," + bally + "px)";
    }
  } else if (bally <= 22 && checkpos(ballx, curlocX)) {
    if (prvx < ballx) {
      prvx = ballx;
      prvy = bally;
      ballx += 5;
      bally += Math.random() * 20 + 1;
      ball.style.transform = "translate(" + ballx + "px," + bally + "px)";
    } else {
      prvx = ballx;
      prvy = bally;
      ballx -= 5;
      bally += Math.random() * 20 + 1;
      ball.style.transform = "translate(" + ballx + "px," + bally + "px)";
    }
  } else if (bally + 43 >= height) {
    upper += 1;
    //alert("SCORES: \nUPPER: " + upper + "\nLOWER: " + lower);
    console.log(upper);
    prvx = 1000;
    prvy = 1000;
    ball.style.transform =
      "translate(" + width / 4 + "px," + height / 2 + "px)";
    ballx = ball.getBoundingClientRect().x;
    bally = ball.getBoundingClientRect().top;
  } else if (bally <= -10) {
    lower += 1;
    //alert("SCORES: \nUPPER: " + upper + "\nLOWER: " + lower);
    prvx = 0;
    prvy = 0;
    ball.style.transform =
      "translate(" + width / 4 + "px," + height / 2 + "px)";
    ballx = ball.getBoundingClientRect().x;
    bally = ball.getBoundingClientRect().top;
  } else if (ballx <= 0) {
    if (prvy > bally) {
      prvx = ballx;
      prvy = bally;
      ballx += Math.random() * 20 + 1;
      bally -= 5;
      ball.style.transform = "translate(" + ballx + "px," + bally + "px)";
    } else {
      prvx = ballx;
      prvy = bally;
      ballx += Math.random() * 20 + 1;
      bally += 5;
      ball.style.transform = "translate(" + ballx + "px," + bally + "px)";
    }
  } else if (ballx + 40 >= width) {
    if (prvy > bally) {
      prvx = ballx;
      prvy = bally;
      ballx -= Math.random() * 20 + 1;
      bally -= 5;
      ball.style.transform = "translate(" + ballx + "px," + bally + "px)";
    } else {
      prvx = ballx;
      prvy = bally;
      ballx -= Math.random() * 20 + 1;
      bally += 5;
      ball.style.transform = "translate(" + ballx + "px," + bally + "px)";
    }
  } else {
    if (prvx < ballx && prvy < bally) {
      //console.log("d");
      prvx = ballx;
      prvy = bally;
      ballx += 5;
      bally += 5;
      ball.style.transform = "translate(" + ballx + "px," + bally + "px)";
    } else if (prvx > ballx && prvy < bally) {
      prvx = ballx;
      prvy = bally;
      ballx -= 5;
      bally += 5;
      //console.log("prv(",prvx,prvy,")current ",ballx,bally);
      ball.style.transform = "translate(" + ballx + "px," + bally + "px)";
    } else if (prvx < ballx && prvy > bally) {
      prvx = ballx;
      prvy = bally;
      ballx += 5;
      bally -= 5;
      //console.log("prv(",prvx,prvy,")current ",ballx,bally);
      ball.style.transform = "translate(" + ballx + "px," + bally + "px)";
    } else {
      prvx = ballx;
      prvy = bally;
      ballx -= 5;
      bally -= 5;
      //console.log("prv(",prvx,prvy,")current ",ballx,bally);
      ball.style.transform = "translate(" + ballx + "px," + bally + "px)";
    }
  }
}
