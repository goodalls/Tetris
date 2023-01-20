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
function draw(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, scale, scale);
    ctx.clearRect(x + scale/4, y + scale/4, scale/2, scale/2);
}

function shape(x,y, type) {
    //i, o, t, j, l, s, z.
    switch (type) {
        case 'o':
         Array([x,y], [x+scale, y], [x, y+scale], [x+scale, y+scale]).forEach((e)=>draw(e[0], e[1]))
        break;
            
        case 'i':
        Array([x,y], [x+scale, y], [x+scale+scale, y], [x+scale+scale+scale, y]).forEach((e)=>draw(e[0], e[1]))
        break;
                   
        case 't':
        Array([x,y], [x+scale, y], [x+scale*2, y], [x+scale, y+scale]).forEach((e)=>draw(e[0], e[1]))
        break;
                       
        case 'j':
        Array([x,y+scale*2], [x+scale, y], [x+scale, y+scale], [x+scale, y+scale*2]).forEach((e)=>draw(e[0], e[1]))
        break;
                           
        case 'l':
        Array([x,y], [x, y+scale], [x, y+scale*2], [x+scale, y+scale*2]).forEach((e)=>draw(e[0], e[1]))
        break;
                               
        case 's':
        Array([x,y+scale], [x+scale, y+scale], [x+scale, y], [x+scale*2, y]).forEach((e)=>draw(e[0], e[1]))
        break;
        
        case 'z':
        Array([x,y], [x+scale, y], [x+scale, y+scale], [x+scale*2, y+scale]).forEach((e)=>draw(e[0], e[1]))
        break;
 
        default:
            break;
    }
}

shape(10, 10, 's');


window.addEventListener("keydown", control);
