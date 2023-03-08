let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
const scale = 20;
const piecesArray = [];
let gameRunning = "false";
const color = "#" + Math.floor(Math.random()*16777215).toString(16);

function control(e) {
  switch (e.keyCode) {
    case 37:
      console.log("arrowLeft");

      break;
    case 40:
      console.log("arrowDown");
      break;
    case 38:
      console.log("arrowUp");
      break;
    case 39:
      console.log("arrowRight");
      break;

    default:
      console.log("uncaptured keyDown event");
      break;
  }
}

//Draw single box
function draw(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, scale, scale);
  ctx.clearRect(x + scale / 4, y + scale / 4, scale / 2, scale / 2);
}

function shape(x, y, type) {
  //i, o, t, j, l, s, z.
  switch (type) {
    case "o":
      Array(
        [x, y],
        [x + scale, y],
        [x, y + scale],
        [x + scale, y + scale]
      ).forEach((e) => draw(e[0], e[1]));
      break;

    case "i":
      Array(
        [x, y],
        [x + scale, y],
        [x + scale + scale, y],
        [x + scale + scale + scale, y]
      ).forEach((e) => draw(e[0], e[1]));
      break;

    case "t":
      Array(
        [x, y],
        [x + scale, y],
        [x + scale * 2, y],
        [x + scale, y + scale]
      ).forEach((e) => draw(e[0], e[1]));
      break;

    case "j":
      Array(
        [x, y + scale * 2],
        [x + scale, y],
        [x + scale, y + scale],
        [x + scale, y + scale * 2]
      ).forEach((e) => draw(e[0], e[1]));
      break;

    case "l":
      Array(
        [x, y],
        [x, y + scale],
        [x, y + scale * 2],
        [x + scale, y + scale * 2]
      ).forEach((e) => draw(e[0], e[1]));
      break;

    case "s":
      Array(
        [x, y + scale],
        [x + scale, y + scale],
        [x + scale, y],
        [x + scale * 2, y]
      ).forEach((e) => draw(e[0], e[1]));
      break;

    case "z":
      Array(
        [x, y],
        [x + scale, y],
        [x + scale, y + scale],
        [x + scale * 2, y + scale]
      ).forEach((e) => draw(e[0], e[1]));
      break;

    default:
      break;
  }
}
class Piece {
  constructor(x, y, shape, color) {
    this.x = x;
    this.y = y;
    this.shape = shape;
    this.color = color;
    this.moving = true;
  }

  rotate() {
    console.log("rotate");
  }
}

function randomizer() {
  let shapes = ["i", "o", "t", "j", "l", "s", "z"];
  let random = Math.floor(Math.random() * shapes.length);
  let shape = shapes[random];
  return shape;
};

function startGame() {
  if (gameRunning === "false") {
  const piece = new Piece(250, 0, randomizer(), color);
  shape(piece.x, piece.y, piece.shape)
  piecesArray.push(piece)
  console.log(piecesArray);
  gameRunning = "true";
  runGame()
  }
};

function runGame() {
  
  setTimeout(() => {
  ctx.clearRect(0,0,500,500)
  piecesArray.forEach(e=> {
   


    //if moving move piece down board
   if (e.moving === true) {
     e.y = e.y+scale
    //check for Collitions side to side and down 
    //collitions(e)
   }

    shape(e.x, e.y, e.shape)
  })
  if(gameRunning === "true"){
    runGame()

  }
}, 1000);
}

function collitions(piece) {
  //collitions side to side
  if (piece.x < 0 || piece.x > 500) {
    return false; 
  } else {
    return true;
  }
  // check for collitions down and with other objects if detected set movement to false

}

window.addEventListener("keydown", control);
document.querySelector(".start").addEventListener("click", startGame)
document.querySelector(".end").addEventListener("click", ()=>{gameRunning = "false"; console.log("ended"); })
