let count = 0;
let stop = false;
let started = false;
let score = 0;

let d = {'left' : {'transform' : 'rotateY(180deg)','speed' : -5,'row':0,'col':-1},
         'right' : {'transform' : 'rotate(0deg)','speed' : 5,'row':0,'col':1},
         'up' : {'transform' : 'rotate(90deg) rotateY(180deg)','speed' : -5,'row':-1,'col':0},
         'down' : {'transform' : 'rotate(90deg)','speed' : 5,'row':1,'col':0}}

let board = [['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'],
             ['X','.',' ',' ','.',' ',' ',' ','.','X','.',' ',' ',' ','.',' ',' ','.','X'],
             ['X',' ','X','X',' ','X','X','X',' ','X',' ','X','X','X',' ','X','X',' ','X'],
             ['X',' ','X','X',' ','X','X','X',' ','X',' ','X','X','X',' ','X','X',' ','X'],
             ['X','.',' ',' ','.',' ','.',' ','.',' ','.',' ','.',' ','.',' ',' ','.','X'],
             ['X',' ','X','X',' ','X',' ','X','X','X','X','X',' ','X',' ','X','X',' ','X'],
             ['X','.',' ',' ','.','X','.',' ','.','X','.',' ','.','X','.',' ',' ','.','X'],
             ['X','X','X','X',' ','X','X','X',' ','X',' ','X','X','X',' ','X','X','X','X'],
             ['X','X','X','X',' ','X','.',' ','.','P','.',' ','.','X',' ','X','X','X','X'],
             ['X','X','X','X',' ','X',' ','X','X','X','X','X',' ','X',' ','X','X','X','X'],
             ['S','S','S','S','.',' ','.','X','X','X','X','X','.',' ','.','S','S','S','S'],
             ['X','X','X','X',' ','X',' ','X','X','X','X','X',' ','X',' ','X','X','X','X'],
             ['X','X','X','X',' ','X','.',' ',' ',' ',' ',' ','.','X',' ','X','X','X','X'],
             ['X','X','X','X',' ','X',' ','X','X','X','X','X',' ','X',' ','X','X','X','X'],
             ['X','.',' ',' ','.',' ','.',' ','.','X','.',' ','.',' ','.',' ',' ','.','X'],
             ['X',' ','X','X',' ','X','X','X',' ','X',' ','X','X','X',' ','X','X',' ','X'],
             ['X','.','.','X','.',' ','.',' ','.',' ','.',' ','.',' ','.','X','.','.','X'],
             ['X','X',' ','X',' ','X',' ','X','X','X','X','X',' ','X',' ','X',' ','X','X'],
             ['X','.','.',' ','.','X','.',' ','.','X','.',' ','.','X','.',' ','.','.','X'],
             ['X',' ','X','X','X','X','X','X',' ','X',' ','X','X','X','X','X','X',' ','X'],
             ['X','.',' ',' ',' ',' ',' ',' ','.','X','.',' ',' ',' ',' ',' ',' ','.','X'],
             ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'],];

let speed = 5;

let rowHeight = Math.floor((window.innerHeight - 40) / (board.length * speed)) * speed;
let colHeight = Math.floor((window.innerWidth - 40) / (board[0].length * speed)) * speed;
let row = Math.min(rowHeight,colHeight);
let col = Math.min(rowHeight,colHeight);;

let pacWidth = Math.floor(row * 2 / 5) * 2;
let dotWidth = Math.floor(pacWidth / 10) * 2;

let pacPos = {'col':0,'row':0}; 
for (let i = 0; i < board.length; i++) {
  let thisRow = board[i];
  if (thisRow.includes('P')) {
    pacPos.col = thisRow.indexOf('P');
    pacPos.row = i;
    break;
  }
}
//let pacPos = { 'col' : 2, 'row' : 1 };


function startGame() {

  if (stop == false && started == false) {
    update();
    started = true;
  }
  else {
    stop = !stop;
  }

  buttonSwap(`start`);

}

function drawBoard(board) {

  dotCount = 0;
  let game = document.getElementById('game');
  let scoreDiv = document.getElementById('score-board');
  scoreDiv.style.left = (board[0].length * col - 50 - scoreDiv.style.width) + "px";

  board.forEach((x,i)=>{

    let arr = x;

    arr.forEach((xCol,j)=> {

      if (xCol === 'X') {

        let block = document.createElement('div');
        block.style.position = "absolute";
        block.style.zIndex = "50";
        block.style.width = col;
        block.style.height = row;
        block.style.top = row * i;
        block.style.left = col * j;
        if (i > 0 && board[i-1][j] !== 'X') {block.style.paddingTop = Math.floor(row * 1 / 5) + "px";}
        if (i + 1 < board.length && board[i+1][j] !== 'X') {block.style.paddingBottom = Math.floor(row * 1 / 5) + "px";}
        if (j > 0 && board[i][j-1] !== 'X') {block.style.paddingLeft = Math.floor(col * 1 / 5) + "px";}
        if (j + 1 < board[0].length && board[i][j+1] !== 'X') {block.style.paddingRight = Math.floor(col * 1 / 5) + "px";}

        let innerDiv = document.createElement('div');
        innerDiv.style.backgroundColor = "#ff9884";
        innerDiv.style.width = "100%";
        innerDiv.style.height = "100%";
        innerDiv.style.padding = "0px";

        if (i > 0 && j > 0 && i + 1 < board.length && j + 1 < board[0].length) {
          if (board[i][j-1] !== 'X' && board[i+1][j] !== 'X') {innerDiv.style.borderBottomLeftRadius = Math.floor(Math.min(row,col) * 1 / 6) + "px";}
          if (board[i][j+1] !== 'X' && board[i+1][j] !== 'X') {innerDiv.style.borderBottomRightRadius = Math.floor(Math.min(row,col) * 1 / 6) + "px";}
          if (board[i][j-1] !== 'X' && board[i-1][j] !== 'X') {innerDiv.style.borderTopLeftRadius = Math.floor(Math.min(row,col) * 1 / 6) + "px";}
          if (board[i][j+1] !== 'X' && board[i-1][j] !== 'X') {innerDiv.style.borderTopRightRadius = Math.floor(Math.min(row,col) * 1 / 6) + "px";}
        }

        block.appendChild(innerDiv);
        game.appendChild(block);

      } else if (j > 0 && i > 0 && i + 1 < board.length && j + 1 < board[0].length) {

        // Make the dots!


        // Just make corner dots, we'll fill in the rest later
        let dotPos = {'x': (j * col + Math.floor(col/2) - (dotWidth / 2)), 'y': (i * row + Math.floor(row/2) - (dotWidth / 2))};
        let boardPos = { 'col':j, 'row':i };

        if (isWall(boardPos) === false && isEmpty(boardPos) === false) {
          if (board[i][j] === ".") {

            let dot = document.createElement('div');
            dot.style.position = "absolute";
            dot.id = 'dot-'+dotCount; 
//            dot.style.borderColor = "yellow";
            dot.style.backgroundColor = "gray";
 //           dot.style.borderWidth = "1px";
 //           dot.style.borderStyle = "solid";
            dot.style.zIndex = "102";
            dot.classList.add('pac-dot');
            dot.classList.add('pac-dot-corner');
            dot.classList.add(j+'-'+i);
            dot.style.width = dotWidth;
            dot.style.height = dotWidth;
            //dot.style.borderRadius = "50%";
            dot.style.top = dotPos.y;
            dot.style.left = dotPos.x;
            game.appendChild(dot);   
            dotCount++;

          }
        }

        let neighbors = checkSurrounding(boardPos);

        function makeCorner() {

          let block = document.createElement('div');
          let blockW = Math.floor(row * 1 / 6) * 2;
          block.style.position = "absolute";
          block.style.backgroundColor = "black";
          block.style.zIndex = "100";
          block.style.width = blockW;
          block.style.height = blockW;
          block.style.borderRadius = "50%";
          return block;
        }

        // Adds rounding to the corners as needed

        for (const neighbor in neighbors) {

          if (neighbor.includes('And')) {

            if (neighbors[neighbor] === true) {

              let keyArray = neighbor.split('And').map(z=>z.toLowerCase());
              let rowC = 0;
              let colC = 0;
              keyArray.forEach(key => { rowC += d[key]['row']; colC += d[key]['col']; })

              if (neighbors[keyArray[0]] === true && neighbors[keyArray[1]] === true) {
                let block = makeCorner();
                let blockW = parseInt(block.style.width);
                block.style.top = (i + ((1 + rowC) / 2)) * row - blockW / 2; 
                block.style.left = (j + ((1 + colC) / 2)) * col - blockW / 2;
                game.appendChild(block);

              }

            }

          }

        }

      } 

    })

  })

  // go back through the board and fill in dots

  board.forEach((boardRow,i) => {

    for (let j = 0; j < board.length; j++) {

      if(boardRow[j] === ".") {

        // Find the next corner in the row 
        let nextCorner = board[i].indexOf(".",j+1);
        let nextWall = board[i].indexOf("X",j+1);
        if (board[i].indexOf("S",j+1) < nextWall && board[i].indexOf("S",j+1) >= 0) {nextWall = board[i].indexOf("S",j+1);}
        if (board[i].indexOf("P",j+1) < nextWall && board[i].indexOf("P",j+1) >= 0) {nextWall = board[i].indexOf("P",j+1);}

        if (nextCorner !== -1 && ((nextCorner < nextWall && nextWall !== -1) || nextWall === -1)) {

          let dotsNeeded = nextCorner - j + 1;
          if (nextCorner - j === 1) {dotsNeeded = 1;}
          else if (nextCorner - j === 2) {dotsNeeded = 2;}
          let availableSpace = (nextCorner - j) * col;
          let eachSpace = Math.round(availableSpace/(dotsNeeded + 1));
          let originalX = j * col + col / 2 - dotWidth / 2;
          let originalY = i * row + row / 2 - dotWidth / 2; 
  
          for (let k = 1; k <= dotsNeeded; k++) {

            let tempCol = Math.floor((originalX + k * eachSpace)/col);
  
            let dot = document.createElement('div');
            dot.style.position = "absolute";
            dot.id = 'dot-'+dotCount; 
            dot.style.backgroundColor = "gray";
//            dot.style.borderColor = "yellow";
//            dot.style.borderWidth = "1px";
//            dot.style.borderStyle = "solid";
            dot.style.zIndex = "102";
            dot.classList.add('pac-dot');
            dot.classList.add(tempCol+'-'+i);
            dot.style.width = dotWidth;
            dot.style.height = dotWidth;
//            dot.style.borderRadius = "50%";
            dot.style.top = originalY;
            dot.style.left = originalX + k * eachSpace;
            game.appendChild(dot);   
            dotCount++;
  
          }

        }

        let nextCornerDown = -1;
        let nextWallDown = -1;

        for (let k = i + 1; k < board.length; k++) {

          if (board[k][j] === "." && nextCornerDown < 0) {nextCornerDown = k;}
          if ((board[k][j] === "X" || board[k][j] === "P" || board[k][j] === "S") && nextWallDown < 0) {
            nextWallDown = k;
          }

        }

        if (nextCornerDown >= 0 && (nextCornerDown < nextWallDown || nextWallDown < 0)) {

          let dotsNeeded = nextCornerDown - i + 1;
          if (nextCornerDown - i === 1) {dotsNeeded = 1;}
          else if (nextCornerDown - i === 2) {dotsNeeded = 2;}
          let availableSpace = (nextCornerDown - i) * row;
          let eachSpace = Math.round(availableSpace/(dotsNeeded + 1));
          let originalX = j * col + col / 2 - dotWidth / 2;
          let originalY = i * row + row / 2 - dotWidth / 2; 
  
          for (let k = 1; k <= dotsNeeded; k++) {

            let tempRow = Math.floor((originalY + k * eachSpace)/row);
  
            let dot = document.createElement('div');
            dot.style.position = "absolute";
            dot.id = 'dot-'+dotCount; 
            dot.style.backgroundColor = "gray";
//            dot.style.borderColor = "yellow";
//            dot.style.borderWidth = "1px";
//            dot.style.borderStyle = "solid";
            dot.style.zIndex = "102";
            dot.classList.add('pac-dot');
            dot.classList.add(j+'-'+tempRow);
            dot.style.width = dotWidth;
            dot.style.height = dotWidth;
//            dot.style.borderRadius = "50%";
            dot.style.top = originalY + k * eachSpace;
            dot.style.left = originalX;
            game.appendChild(dot);   
            dotCount++;
  
          }

        }

      }

    }


  })


}

// Make a pacMan
//const makeOne = () => pacMen.push(makePac())

// Deprioritize a button after it has been clicked
const buttonSwap = () => {

  let start = document.getElementById('start');
  if (start.style.display.includes('none')) { start.style.display = ''; } 
  else { start.style.display = 'none'; }

  let stop = document.getElementById('stop');
  if (stop.style.display.includes('none')) { stop.style.display = ''; } 
  else { stop.style.display = 'none'; }
}

const findXY = pacPos => {

  let x = pacPos.col * col;
  let y = pacPos.row * row;

  return {x, y};

}


let msPacMan = {}; 
window.onload = (event) => {
  drawBoard(board);
  msPacMan = makePac();
}

// Make a PacMan at a random position with random velocity (single direction)
function makePac() {
  
  let speed = 5;
  let direction = 'right';
  let position = findXY(pacPos);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.style.zIndex = '200';
  newimg.src = './images/mspacman1.png';
  newimg.style.transform = 'rotate(0deg)';
  let topPad = Math.floor((row - pacWidth) / 2);
  let rightPad = Math.floor((col - pacWidth) / 2);
  newimg.style.margin = topPad + "px " + rightPad + "px " + (row - pacWidth - topPad) + "px " + (col - pacWidth - rightPad) + "px";
  newimg.width = pacWidth;

  // Set position
  newimg.style.left = position.x;
  newimg.style.top = position.y;

  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    speed,
    direction,
    newimg,
    'cache' : ''
  };
}

function nextPos(pacPos,dir) {

  if (dir === '') {return pacPos;}

  let next = {'col':pacPos.col,'row':pacPos.row};
  next.row += dir === 'down' ? 1 : dir === 'up' ? -1 : 0
  next.col += dir === 'right' ? 1 : dir === 'left' ? -1 : 0
  
  return next;

}

function isWall(pos) {

  let res = board[pos.row][pos.col];
  return res === 'X';

}

function isEmpty(pos) {

  let res = board[pos.row][pos.col];
  return (res === 'S' || res === 'P');

}


// Update the position of all pacMen
function update() {

  count++;

  if (stop === false) {

    document.onkeydown = checkKey;

    function checkKey(e) {
    
        e = e || window.event;
  
        if (e.keyCode == '38' || e.keyCode == '87') {
          // up arrow commands
          msPacMan.cache = 'up';
          
        } else if (e.keyCode == '40' || e.keyCode == '83') {
          // down arrow commands
          msPacMan.cache = 'down';
  
        } else if (e.keyCode == '37' || e.keyCode == '65') {
          // left arrow commands
          msPacMan.cache = 'left';
  
        } else if (e.keyCode == '39' || e.keyCode == '68') {
          // right arrow commands
          msPacMan.cache = 'right';
  
        }
    
    }
  
    if (msPacMan.speed !== 0 || msPacMan.cache !== '') {
  
      checkCollisions(msPacMan);

      checkDots(msPacMan);
  
      if (msPacMan.direction === 'left' || msPacMan.direction === 'right' ) {
          msPacMan.position.x += msPacMan.speed;
          msPacMan.newimg.style.left = msPacMan.position.x;
      } else if (msPacMan.direction === 'up' || msPacMan.direction === 'down' ){
          msPacMan.position.y += msPacMan.speed;
          msPacMan.newimg.style.top = msPacMan.position.y;
      }
  
      pacPos.row = Math.floor(msPacMan.position.y / row);
      pacPos.col = Math.floor(msPacMan.position.x / col);

    }

  }

  if (count === 2) {
      msPacMan.newimg.src = msPacMan.newimg.src.includes('mspacman1.png') ? 
                        './images/mspacman2.png' : './images/mspacman1.png'  
    }

  if (count === 2) count = 0

  setTimeout(update, 50)

}


function checkDots(item) {

  // find all dots in the current cell
  let classCode = pacPos.col + '-' + pacPos.row;
  let next = nextPos(pacPos,item.direction);
  let classCode2 = next.col + '-' + next.row;
  let classCode3 = (pacPos.col - (next.col - pacPos.col)) + '-' + (pacPos.row - (next.row - pacPos.row));

  let dots = Array.prototype.slice.call(document.getElementsByClassName(classCode), 0);
  let dots2 = Array.prototype.slice.call(document.getElementsByClassName(classCode2), 0);
  let dots3 = Array.prototype.slice.call(document.getElementsByClassName(classCode3), 0);

  dots.push(...dots2);
  dots.push(...dots3);

  // check if any are in the mouth
  for (let i = 0; i < dots.length; i++) {

    let dot = dots[i];

    let dotLeft = parseInt(dot.style.left);
    let dotRight = dotLeft + parseInt(dot.style.width);
    let dotTop = parseInt(dot.style.top);
    let dotBottom = dotTop + parseInt(dot.style.width);
    let itemLeft = parseInt(item.newimg.style.left);
    let itemTop = parseInt(item.newimg.style.top);


    let leftBoundary = itemLeft + col / 2 - pacWidth / 2;
    let rightBoundary = leftBoundary + pacWidth;
    let topBoundary = itemTop + row / 2 - pacWidth / 2;
    let bottomBoundary = topBoundary + pacWidth;

    function removeDot(id) {
      let dotToRemove = document.getElementById(id);
      let game = document.getElementById('game');
      let removedDot = game.removeChild(dotToRemove);
      if (removedDot !== '') {
        score += 100;
        let scoreDiv = document.getElementById('score');
        scoreDiv.innerHTML = score;
      }
    }

    if (dotLeft > leftBoundary && dotRight < rightBoundary && dotTop > topBoundary && dotBottom < bottomBoundary) {
      removeDot(dot.id);
    }

  }

}

// Check prosimity to edges and reverse direction and image if needed
function checkCollisions(item) {

  if (item.cache !== '') {

    // figure out the next position based on the desired direction
    let next = nextPos(pacPos,item.cache);

    // if there is no wall there, AND the item is at a transition point, change the direction and speed and clear the cache
    let canTurn = false;
    if (findXY(pacPos).x === item.position.x && findXY(pacPos).y === item.position.y) {canTurn = true;}

    let canReverse = false;
    if (item.cache === 'left' && item.direction === 'right') {canReverse = true;}
    if (item.cache === 'right' && item.direction === 'left') {canReverse = true;}
    if (item.cache === 'up' && item.direction === 'down') {canReverse = true;}
    if (item.cache === 'down' && item.direction === 'up') {canReverse = true;}

    if (isWall(next) === false && (canTurn === true || canReverse === true)) {

          let stats = d[item.cache];
          let transformStr = stats.transform;
          let currTransform = item.newimg.style.transform;
          let currDir = item.direction;

          if (item.cache === 'down' && currDir === 'left') {transformStr = "rotate(270deg) rotateY(180deg)";}
          else if (item.cache === 'down' && currDir === 'right') {transformStr = "rotate(90deg)";}
          else if (item.cache === 'up' && currDir === 'left') {transformStr = "rotate(90deg) rotateY(180deg)";}
          else if (item.cache === 'up' && currDir === 'right') {transformStr = "rotate(-90deg)";}
          else if (item.cache === 'up' && currDir === 'down') {
            if (currTransform.includes("rotate(270deg) rotateY(180deg)")) {transformStr = "rotate(270deg)";}
          }
          else if (item.cache === 'down' && currDir === 'up') {
            if (currTransform.includes("rotate(90deg) rotateY(180deg)")) {transformStr = "rotate(90deg)";}
          }
          item.speed = stats.speed;
          item.direction = item.cache;
          item.cache = '';
          item.newimg.style.transform = transformStr;
          return true;      
  
    } 
  
  }

  // if there is no cache, or it wasn't cleared, check whether Ms PacMan is up against a wall
  let next = nextPos(pacPos, item.direction);

  if (isWall(next) === true && findXY(pacPos).x === item.position.x && findXY(pacPos).y === item.position.y) {
    item.speed = 0;
    item.cache = '';
  }

  if (item.position.x <= -col) {item.position.x = board[0].length * col;}
  else if (item.position.x > board[0].length * col) {item.position.x = -col;}

}

function checkSurrounding(pos) {

  let res = { 'up':false, 'upAndRight':false, 'right':false, 'downAndRight':false, 'down':false, 'downAndLeft':false, 'left':false, 'upAndLeft':false }

  for (const key in res) {

    let keyArray = key.split('And').map(z=> z.toLowerCase());

    let rowC = 0;
    let colC = 0;
    
    keyArray.forEach((z) => {
      rowC += d[z]['row'];
      colC += d[z]['col']; 
    })

    if (board[pos.row + rowC][pos.col + colC] === 'X') { res[key] = true;}

  }
 
  return res;

}