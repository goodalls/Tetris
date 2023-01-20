let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let scale = 20;

function control(e) {
  switch (e.keyCode) {
    case 37:
      console.log("arrowLeft");
      break;
    case 40:
      console.log("arrowDown");
      break;
    case 38:
      console.log("ArrowUp");
      break;
    case 39:
      console.log("arrowRight");
      break;

    default:
      console.log("uncaptured keyDown event");
      break;
  }
}


//single box
function draw(x, y) {
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, scale, scale);
    ctx.clearRect(x + scale/4, y + scale/4, scale/2, scale/2);
}

function shape(x,y, type) {
    switch (type) {
        case square:
            Array().map((e, i, arr)=>{

            })
            break;
    
        default:
            break;
    }
}

shape(10, 10, square);


window.addEventListener("keydown", control);
