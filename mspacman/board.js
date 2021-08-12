let board = ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
             'X-------X-----------X-------X',
             'XB------X-----------X-----B-X',
             'X--XXX--X--XXXXXXX--X--XXX--X',
             'X---------------------------X',
             'X---------------------------X',
             'XXX--X--XXXX--X--XXXX--X--XXX',
             'XXX--X--XXXX--X--XXXX--X--XXX',
             '-----X--------X--------X-----',
             '-----X--------X--------X-----',
             'XXX--XXXX--XXXXXXX--XXXX--XXX',
             'SSX------SSSSSSSSSSS------XSS',
             'SSX------SSSSSSSSSSS------XSS',
             'SSX--XXXXSSGGGGGGGSSXXXX--XSS',
             'SSX--X---SSGGGGGGGSS---X--XSS',
             'SSX--X---SSGGGGGGGSS---X--XSS',
             'XXX--X--XSSGGGGGGGSSX--X--XXX',
             '--------XSSSSSSSSSSSX--------',
             '--------XSSSSSSSSSSSX--------',
             'XXX--XXXXXXX--X--XXXXXXX--XXX',
             'SSX-----------X-----------XSS',
             'SSX-----------X-----------XSS',
             'XXX--XXXX--XXXXXXX--XXXX--XXX',
             'X-------------P-------------X',    
             'X---------------------------X',  
             'X--XXX--XXXX--X--XXXX--XXX--X',    
             'X--XXX--X-----X-----X--XXX--X',    
             'XB-XXX--X-----X-----X--XXXB-X',    
             'X--XXX--X--XXXXXXX--X--XXX--X',    
             'X---------------------------X',    
             'X---------------------------X',    
             'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'];
const speed = 6;

class RcPos {
  constructor(row,col) {
    this.row = row;
    this.col = col;
    this.rowM = row + 1;
    this.colM = col + 1;
  }

  up(n=1) {
    let v = new RcPos(this.row - 1 * n, this.col);
    return v;
  }

  down(n=1) {
    let v = new RcPos(this.row + 1 * n, this.col);
    return v;
  }

  left(n=1) {
    let v = new RcPos(this.row, this.col - 1 * n);
    return v;
  }

  right(n=1) {
    let v = new RcPos(this.row, this.col + 1 * n);
    return v;
  }

}

class Board {
  constructor(arr,speed) {
    this.layout = arr;
    let rowHeight = Math.floor((+window.innerHeight - 40) / ((board.length + 2) * speed)) * speed;
    let colHeight = Math.floor((+window.innerWidth - 40) / (board[0].length * speed)) * speed;
    this.tileW = Math.min(rowHeight,colHeight);
    this.rows = arr.length;
    this.cols = arr[0].length;
    this.portals = [];
    this.ghostStart = {row:-1,col:-1};
    this.ghostEnd = {row:-1,col:-1};
    this.ghostGateX = '';
    this.ghostGateY = {};
    this.ghostPositions = [];
    this.speed = speed;
    this.ghostsInBox = [];
  }

  tile(rcPos) {
    let row = rcPos.row;
    let col = rcPos.col;
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols ? this.layout[row].charAt(col) : 'E';
  }

  isWall(rcPos) {
    return (this.layout[rcPos.row].charAt(rcPos.col) === 'X' || this.layout[rcPos.row].charAt(rcPos.col) === 'G');
  }

  isFree(rcPos) {
    str = this.layout[rcPos.row].charAt(rcPos.col);
    return str.search(/[\-SPB]/) > -1 
  }

  type(str) {
    if (str.search(/[\-SPB]/) > -1 ) {return 'hall'} else if (str === 'X') {return 'wall'}
    return 'off-board';
  }

  tileCorners(rcPos) {

    let res = {'topLeft' : 'none', 'topRight' : 'none', 'bottomLeft' : 'none', 'bottomRight' : 'none'};
    let n = this.tileContext(rcPos);

    for (let dir in res) {
      const split = dir.search(/[LR]/);
      const upDown = dir.substr(0,split).toLowerCase();
      const leftRight = dir.slice(split).toLowerCase();
      if (this.type(n[dir]) === 'hall') {
        if (this.type(n[upDown]) === 'hall' && this.type(n[leftRight]) === 'hall') {res[dir] = 'outer'}
        else if (this.type(n[upDown]) === 'wall' && this.type(n[leftRight]) === 'wall') {res[dir] = 'inner'}
      }
    }

    return res;
  
  }
  
  tileContext(rcPos) {
  
    const col = rcPos.col;
    const row = rcPos.row;
    
    return {'top' : row > 0 ? this.tile(rcPos.up()) : 'E', 
            'topRight' : row > 0 && col + 1 < this.cols ? this.tile((rcPos.up()).right()) : 'E', 
            'right' : col + 1 < this.cols ? this.tile(rcPos.right()) : 'E', 
            'bottomRight' : col + 1 < this.cols && row + 1 < this.rows ? this.tile(rcPos.down().right()) : 'E',
            'bottom' : row + 1 < this.rows? this.tile(rcPos.down()) : 'E', 
            'bottomLeft' : col > 0 && row + 1 < this.rows ? this.tile(rcPos.down().left()) : 'E', 
            'left' : col > 0 ? this.tile(rcPos.left()) : 'E', 
            'topLeft' : col > 0 && row > 0 ? this.tile(rcPos.up().left()) : 'E'};
  
  }
  
}

class Wall {
  constructor(rcPos,board) {

    let block = document.createElement('div');
    block.style.position = "absolute";
    block.style.zIndex = "50";
    block.style.backgroundColor = "#f4bb9c";
    block.style.top = board.tileW * rcPos.row;
    block.style.left = board.tileW * rcPos.col;
    block.style.height = board.tileW + 1;
    block.style.width = board.tileW + 1;
    block.style.margin = '-1px';

    let corners = board.tileCorners(rcPos);
    for (let c in corners) {
      if (corners[c] === 'outer') {
        let borderRadius = 'border' + c.substr(0,1).toUpperCase() + c.slice(1) + 'Radius';
        block.style[borderRadius] = (board.tileW / 2) + "px";
      } else if (corners[c] === 'inner') {
        const split = c.search(/[LR]/);
        const upDown = c.substr(0,split).toLowerCase();
        const leftRight = c.slice(split).toLowerCase();
        let inner = this.makeInnerCorner(upDown,leftRight,block,board);
        game.appendChild(inner);
      }
    }

    if (board.type(board.tile(rcPos.left())) == 'hall') {block.style.borderLeft = 'solid 3px #e33022'; }
    if (board.type(board.tile(rcPos.right())) == 'hall') {block.style.borderRight = 'solid 3px #e33022'; }
    if (board.type(board.tile(rcPos.up())) == 'hall') {block.style.borderTop = 'solid 3px #e33022'; }
    if (board.type(board.tile(rcPos.down())) == 'hall') {block.style.borderBottom = 'solid 3px #e33022'; }
    
    return block;

  }

  makeInnerCorner(upDown,leftRight,block) {
    let [lr, ud, top, left] = ['right', 'top', parseFloat(block.style.top), parseFloat(block.style.left)];
    if (leftRight === 'right') {lr = 'left';}
    if (upDown === 'top') {ud = 'bottom';}
    let cornerW = (parseFloat(block.style.width) - 1) / 2;
    let radial = 'radial-gradient(circle ' + cornerW + 'px at ' + lr +' 100% ' + ud + ' 100%,'
    radial += 'rgba(0,0,0,0) 0%, rgba(0,0,0,0) '+(cornerW - 3)+'px,'
    radial += ' #e33022 '+(cornerW - 3)+'px, #e33022 100%, #f4bb9c 100%)';
    let innerCorner = document.createElement('div');
    innerCorner.style.position = 'absolute';
    innerCorner.style.backgroundColor = 'black';
    innerCorner.style.backgroundImage = radial;
    innerCorner.style.zIndex = '1000';
    innerCorner.style.width = cornerW;
    innerCorner.style.height = cornerW;
    innerCorner.style.margin = '-2px';
    innerCorner.style.top = upDown === 'top' ? (top - cornerW + 4) + 'px' : (top + cornerW * 2 - 1) + 'px';
    innerCorner.style.left = leftRight === 'left' ? (left - cornerW + 4) + 'px' : (left + cornerW * 2 - 1) + 'px';
    return innerCorner;

  }

}

class PacDot {
  constructor(rcPos, board, big = false) {

    // Make the dot!

    const dotWidth = Math.floor(board.tileW / 9) * 2;

    let dot = document.createElement('div');
    dot.style.position = "absolute";
    dot.id = 'dot-'+dotCount; 
    dot.style.backgroundColor = "#e1e1fb";
    //dot.style.borderColor = "yellow";
    //dot.style.borderWidth = "1px";
    //dot.style.borderStyle = "solid";
    //dot.style.borderRadius = "50%";
    dot.style.zIndex = "102";
    dot.classList.add('pac-dot');
    dot.classList.add('pac-dot-'+rcPos.col+'-'+rcPos.row);
    dot.style.width = dotWidth;
    dot.style.height = dotWidth;

    dot.style.top = board.tileW * (rcPos.row + 1) - dotWidth / 2;
    dot.style.left = board.tileW * (rcPos.col + 1) - dotWidth / 2;

    if (big === true) {
      dot.style.width = dotWidth * 4;
      dot.style.height = dotWidth * 4;
      dot.style.top = cellW * (rcPos.row + 1) - dotWidth * 4 / 2;
      dot.style.left = cellW * (rcPos.col + 1) - dotWidth * 4 / 2;
      dot.style.borderRadius = '50%';
      dot.classList.add('big');
    }   

    return dot;

  }
}

class GhostBox {

  constructor(startPos,endPos,board) {
      // Make the ghost div
  let cellW = board.tileW;

  let targetX = startPos.col * cellW - cellW / 2;
  if (targetX % Math.abs(speed) > 0) {targetX -= targetX % Math.abs(speed);}
  board.ghostGateX = (startPos.col + (endPos.col - startPos.col) / 2 - 0.5) * cellW;
  board.ghostGateY.start = cellW * (startPos.row - 2);
  board.ghostGateY.end = board.ghostGateY.start + cellW * (endPos.row - startPos.row);

  let block = document.createElement('div');
  block.style.position = 'absolute';
  block.style.zIndex = 50;
  block.style.backgroundColor = '#f1bdae';
  block.style.top = cellW * startPos.row;
  block.style.left = cellW * startPos.col;
  block.style.height = cellW * (endPos.row - startPos.row + 1);
  block.style.width = cellW * (endPos.col - startPos.col + 1);
  block.style.border = "solid 3px #e33022"

  let innerDiv = document.createElement('div');
  innerDiv.style.position = "absolute";
  innerDiv.style.zIndex = 51;
  innerDiv.style.backgroundColor = "black";
  innerDiv.style.top = cellW / 3 - 3;
  innerDiv.style.left = cellW / 3 - 3;
  innerDiv.style.height = cellW * 4 - (cellW * 2/ 3);
  innerDiv.style.width = cellW * 7 - (cellW * 2 / 3);
  innerDiv.style.border = "solid 3px #e33022";

  let door = document.createElement('div');
  door.id = 'ghost-gate';
  door.style.position = "absolute";
  door.style.zIndex = 52;
  door.style.backgroundColor = "#e1e1fb";
  door.style.top = -3;
  door.style.left = cellW * 2 + cellW / 4;
  door.style.height = cellW / 3 + 3;
  door.style.width = cellW * 2 + 3;
  door.style.borderLeft = "solid 3px #e33022";
  door.style.borderRight = "solid 3px #e33022";
  door.style.borderTop = "solid 3px black";
  door.style.borderBottom = "solid 3px black";

  block.appendChild(innerDiv);
  block.appendChild(door);

  return block;

  }

  exit(board) {

  }

}

class MessageDiv {
  constructor(args,board) {
    // args passed are id, top, left, height, width, str, board
    let messageDiv = document.createElement('div');
    messageDiv.id = args.id;
    messageDiv.innerHTML = args.innerHTML;
    messageDiv.style.position = 'absolute';
    messageDiv.style.zIndex = 50;
    messageDiv.style.backgroundColor = 'none';
    messageDiv.style.padding = board.tileW / 4;
    messageDiv.style.fontFamily = '\'Press Start 2P\',cursive';
    messageDiv.style.color = 'yellow';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.alignContent = 'center';

    for (let param in args.style) {
      messageDiv.style[param] = args.style[param];
    }

    return messageDiv;
  }
}

class Ghost {

  constructor(pos,gColor,dir,id,free,board) {

      const rcPos = new RcPos(pos.row,pos.col);
      const cellW = board.tileW;
      const fringeW = Math.floor(board.tileW * 1.5 / 12);
      const fringeWex = board.tileW * 1.5 - fringeW * 10;
  
      const ghostDiv = document.createElement('div');
      ghostDiv.id = id;
      ghostDiv.style.backgroundColor = gColor;
      ghostDiv.style.backgroundSize = '100%';
      ghostDiv.style.backgroundImage = 'none';
      ghostDiv.style.position = 'absolute';
      ghostDiv.style.zIndex = 900;
      ghostDiv.style.height = cellW * 1.5 - fringeW * 2;
      ghostDiv.style.width = cellW * 1.5;
      ghostDiv.style.borderTopLeftRadius = '50%';
      ghostDiv.style.borderTopRightRadius = '50%';
      ghostDiv.style.margin = (cellW / 4) + 'px'
      ghostDiv.style.top = cellW * (rcPos.row);
      ghostDiv.style.left = cellW * (rcPos.col) - cellW / 2;
  
      function createChild(args) {
        const item = document.createElement('div');
        item.style.position = 'absolute';

        for (let property in args) {

          if (property === 'class') {item.classList.add(args[property])}
          else if (typeof args[property] === 'object') {
            for (let el in args[property]) {
              item.style[el] = args[property][el];
            }
          }
          else {
            item.style[property] = args[property];
          }
        }
        return item;
      }
  
      let childDivArr = [];
      let leftCache = 0;

      for (let i = 1; i < 8; i++) {

        let params = {height: fringeW * 2 + 'px',
                      width: (fringeW * 2) + 'px',
                      class: 'fringe',
                      margin: '0px',
                      top: parseInt((cellW / 4) + cellW * 1.5 - fringeW * 4) + 'px',
                      left: leftCache,
                      borderCorners: {borderTopRightRadius: '0%',
                                      borderBottomRightRadius: '50%',
                                      borderBottomLeftRadius: '50%',
                                      borderTopLeftRadius: '0%'}};
        if (i % 2 > 0) {params.backgroundColor = gColor;} else {
          params.backgroundColor = 'none';
          params.backgroundImage = 'radial-gradient(ellipse at top 51% left 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, '+gColor+' 70%)';
        }

        if (i === 1 || i === 7) {params.width = fringeW + 'px';}
        else if (i === 4) {params.width = fringeWex + 'px';}  
        if (i === 1) {params.borderCorners.borderBottomLeftRadius = '0%'}
        else if (i === 7) {params.borderCorners.borderBottomRightRadius = '0%'}

        leftCache += parseFloat(params.width);
        childDivArr.push(params);
      }

      childDivArr.push({height: fringeW * 4 + 'px', width: fringeW * 3 + 'px', 
                        class: 'eyeball', margin: '0px', top: d[dir].eyetop, 
                        left: d[dir].eyeleft, backgroundColor: 'white',
                        borderRadius: '50%'});
      childDivArr.push({height: fringeW * 4, width: fringeW * 3, 
                        class: 'eyeball', margin: '0px', 'top' : d[dir].eyetop, 
                        left: (fringeW * 5 + parseInt(d[dir].eyeleft)) + 'px', 
                        backgroundColor: 'white', borderRadius: '50%'});

      childDivArr.push({height: fringeW * 2, width: fringeW * 2, 
                        class: 'pupil', margin: '0px', top: d[dir].pupiltop, 
                        left: d[dir].pupilleft, backgroundColor: 'blue',
                        borderRadius: '50%'});
      childDivArr.push({height: fringeW * 2, width: fringeW * 2, 
                        class : 'pupil', margin : '0px', top : d[dir].pupiltop, 
                        left: (fringeW * 5 + parseInt(d[dir].pupilleft)) + 'px', 
                        backgroundColor: 'blue', borderRadius: '50%'});

      // eyes and mouth for blue mode, display = none
      let adj = Math.round(cellW * 0.75 - fringeW * 5)/4;
      let hyp = (fringeW * 3) ** 2;
      let sideSq = hyp / 2;
      let side = Math.floor(sideSq ** 0.5);
      childDivArr.push({height: fringeW * 2, width: fringeW * 2, 
                        display: 'none', class: 'blue-pupil',
                        margin: '0px', top: ((cellW / 6) + fringeW * 2) + 'px', 
                        left: (fringeW * 3) + 'px', 
                        backgroundColor: 'lightgray', 
                        borderRadius: '50%'});
      childDivArr.push({height: fringeW * 2, width: fringeW * 2, 
                        display: 'none', class: 'blue-pupil',
                        margin: '0px', top: ((cellW / 6) + fringeW * 2) + 'px', 
                        left: (fringeW * 8) + 'px', 
                        backgroundColor: 'lightgray', 
                        borderRadius : '50%'});
      
      for (let i = 1; i < 5; i++) {
        let frown = {height: Math.floor(side) + 'px', width: Math.floor(side) + 'px', 
                   display: 'none', class: 'blue-frown',
                   margin: '0px', top: ((cellW / 4) + cellW * 1.5 - fringeW * 8) + 'px', 
                   backgroundColor: 'none', 
                   borderLeft: 'solid 1px lightgray',
                   borderBottom: 'solid 1px lightgray',
                   transform:  'rotate(-45deg)'};
        frown.left = (adj * (2 - i)) + fringeW + (fringeW * 3 * (i-1)) + adj;
        childDivArr.push(frown);
      }
    
      childDivArr.forEach(div => {
  
        let tempDiv = createChild(div);
        ghostDiv.appendChild(tempDiv);
  
      })
  
      this.el = ghostDiv;
      this.color = ghostDiv.style.backgroundColor;
      this.lastCorner = '';
      this.cache = '';
      this.speed = (dir === 'left' || dir === 'up') ? -board.speed : board.speed ;
      this.direction = dir;
      this.free = free;
      this.rcPos = rcPos;
      this.board = board;
      this.position = {'x': (cellW * (rcPos.col) - cellW / 2),'y': cellW * (rcPos.row)};

  }

  leaveBox() {

    if (stop === false) {

      const board = this.board;
      const xS = board.ghostGateX;
      const yS = board.ghostGateY.start;
      const xG = this.position.x;
      const yG = this.position.y;

      if (xG === xS && yG > yS && this.free === 'notfree') { this.move('up');}
      else if (xG > xS && xS - xG < this.speed && this.free === 'notfree') {
        this.position.x = xS;
        this.el.style.left = this.position.x;
        this.rcPos.col = Math.floor(this.position.x / board.tileW);
        this.rcPos.colM = this.rcPos.col + 1;
      }
      else if (xG === xS && yG === yS && this.free === 'notfree') {
        this.free = 'free';
        this.board.ghostsInBox.splice(this.board.ghostsInBox.indexOf(this.el.id),1);
        console.log('leave',this.board.ghostsInBox);
        if (this.position.x % board.tileW > 0) {
          this.position.x -= this.position.x % board.tileW;
          this.el.style.left = this.position.x;
          this.rcPos.col = Math.floor(this.position.x/board.tileW);
          this.rcPos.colM = this.rcPos.col + 1;
        }
        
        setTimeout(function() {
          const ghostGate = document.getElementById('ghost-gate');
          ghostGate.style.backgroundColor = '#e1e1fb';
        },500)
        
      }
      else if (xG < xS && this.free === 'notfree') {this.move('right')}
      else if (xG > xS && this.free === 'notfree') {this.move('left')}
      else if (xG < xS && xS - xG < this.speed && this.free === 'notfree') {
        this.position.x = xS
        this.el.style.left = this.position.x;
        this.rcPos.col = Math.floor(this.position.x / board.tileW);
        this.rcPos.colM = this.rcPos.col + 1;
      }
  

    }

    if (restarted === true) {return false;}

  }

  reShuffle() {

    const board = this.board;
    const xS = board.ghostGateX;
    const right = xS + board.tileW * 2;
    const left = xS - board.tileW * 2;

    if (this.boxPosition === 'center' && boxPositions().right === false) {
      this.move('right');
    }
    else if (this.boxPosition === 'center' && boxPositions().left === false) {
      this.move('left');
    }
    else if (this.boxPosition === 'right' && this.position.x < right) {
      this.move('right');
    }
    else if (this.boxPosition === 'left' && this.position.x > left) {
      this.move('left');
    }
    else {
      this.moveEyes('up');
      return true;
    }

  }

  get boxPosition() {

      const board = this.board;
      const xS = board.ghostGateX;

      if (this.position.x > xS && this.isInBox) {
        return 'right';

      } else if (this.position.x < xS && this.isInBox) {
        return 'left';
      }
      else if (this.position.x === xS && this.isInBox) {
        return 'center';
      }
      return 'none';

  }

  enterBox() {

    if (stop === false) {

      const board = this.board;
      const xS = board.ghostGateX;
      const yS = board.ghostGateY.start;
      const yE = board.ghostGateY.end;
      const xG = this.position.x;
      const yG = this.position.y;
      const leftPos = xS - parseInt(this.el.style.width) - parseFloat(this.el.style.margin) * 2;
      const rightPos = xS + parseInt(this.el.style.width) + parseFloat(this.el.style.margin) * 2;
        
      if (xG === xS && yG >= yS && this.free === 'returning') {this.move('down'); this.free = 'notfree';}
      else if (xG === xS && this.free === 'notfree' && yG < yE) {this.move('down');}
      else if (xG === xS && this.free === 'notfree' && yG >= yE) {
        // decide which way to turn based on whether another ghost is in that area
  
        let leftOccupied = false;
        let rightOccupied = false;
  
        ghosts.forEach(obj => {

          if (obj.el.id !== this.el.id) {
            if (obj.position.x > xS && obj.isInBox) {
              rightOccupied = true;
            } else if (obj.position.x < xS && obj.isInBox) {
              leftOccupied = true;
            }
          } 
        })
  
        if (rightOccupied === false) {
          this.move('right');
        }
        else if (leftOccupied === false) {
          this.move('left');
        }
        else {
          this.speed = 0;
          this.direction = 'up';
          
          // make visible again
          let color = this.color;
          let frownD = 'none';
          let eyeD = '';
          if (munchModeActive === true) {
            color = 'blue';
          }
          this.el.style.backgroundColor = color;
          let fringes = Array.from(this.el.getElementsByClassName('fringe'))
          fringes.forEach(fringe => {
            if (fringe.style.backgroundColor !== '' && fringe.style.backgroundColor !== 'transparent') {
              fringe.style.backgroundColor = color;
              fringe.style.display = '';
            } else {
              let bgimage = fringe.style.backgroundImage;
              let newBgimage = bgimage.replace('blue',color);
              newBgimage = bgimage.replace('white',color);
              fringe.style.backgroundImage = newBgimage;
              fringe.style.display = '';
            }
          })
          let eyes = Array.from(this.el.getElementsByClassName('eyeball'));
          eyes.forEach(eye => eye.style.display = eyeD)
          let pupils = Array.from(this.el.getElementsByClassName('pupil'));
          pupils.forEach(pupil => pupil.style.display = eyeD)
          let frowns = Array.from(this.el.getElementsByClassName('blue-frown'));
          frowns.forEach(frown => frown.style.display = frownD)
          let blueeyes = Array.from(this.el.getElementsByClassName('blue-pupil'));
          blueeyes.forEach(eye => eye.style.display = frownD)
    
          return true;
  
        }
      }
      else if (this.direction === 'right' && this.free === 'notfree' && this.position.x < rightPos) {
        this.move('right');
      }
      else if (this.direction === 'left' && this.free === 'notfree' && this.position.x > leftPos) {
        this.move('left')
      }
      else {
        this.speed = 0;
        this.direction = 'down';

                 // make visible again
                 let color = this.color;
                 let frownD = 'none';
                 let eyeD = '';
                 if (munchModeActive === true) {
                   color = 'blue';
                   frownD = '';
                   eyeD = 'none';
                 }
                 this.el.style.backgroundColor = color;
                 let fringes = Array.from(this.el.getElementsByClassName('fringe'))
                 fringes.forEach(fringe => {
                   if (fringe.style.backgroundColor !== '' && fringe.style.backgroundColor !== 'transparent') {
                     fringe.style.backgroundColor = color;
                     fringe.style.display = '';
                   } else {
                     let bgimage = fringe.style.backgroundImage;
                     let newBgimage = bgimage.replace('blue',color);
                     newBgimage = bgimage.replace('white',color);
                     fringe.style.backgroundImage = newBgimage;
                     fringe.style.display = '';
                   }
                 })
                 let eyes = Array.from(this.el.getElementsByClassName('eyeball'));
                 eyes.forEach(eye => eye.style.display = eyeD)
                 let pupils = Array.from(this.el.getElementsByClassName('pupil'));
                 pupils.forEach(pupil => pupil.style.display = eyeD)
                 let frowns = Array.from(this.el.getElementsByClassName('blue-frown'));
                 frowns.forEach(frown => frown.style.display = frownD)
                 let blueeyes = Array.from(this.el.getElementsByClassName('blue-pupil'));
                 blueeyes.forEach(eye => eye.style.display = frownD)

        return true;
      }

    }
 
    if (restarted === true) {return false;}

  }

  pickDir() {
    
      let startDir = this.direction;
      let targPos;
      const cellW = this.board.tileW;
    
      // set the target for the ghost - either toward or away from pacman, or toward the box
      if (this.free === 'free' && munchModeActive == false) {
        targPos = {row: msPacMan.rcPos.row, col: msPacMan.rcPos.col};
        targPos.x = msPacMan.position.x;
        targPos.y = msPacMan.position.y;
        if (this.el.id === 'clyde') {
          let tilesFromPac = Math.abs(targPos.row - this.rcPos.row) + Math.abs(targPos.col - this.rcPos.col);
          if (tilesFromPac > (this.board.cols + this.board.rows)/3) {
            targPos.col = this.board.cols;
            targPos.row = this.board.rows;
            targPos.x = targPos.col * this.board.tileW;
            targPos.y = targPos.row * this.board.tileW;
          }
        }
      } else if (this.free === 'free' && munchModeActive == true) {
        targPos = {row: this.board.rows - msPacMan.rcPos.row, col: this.board.cols - msPacMan.rcPos.col};
        targPos.x = targPos.row * cellW;
        targPos.y = targPos.col * cellW;
      } else if (this.free === 'returning') {
        let targetX = this.board.ghostGateX;
        if (targetX % Math.abs(speed) > 0) {targetX -= targetX % Math.abs(speed);}
        targPos = { row: Math.floor(this.board.ghostGateY.start) / cellW, col: Math.round(targetX/cellW), x: targetX, y: this.board.ghostGateY.start};
      }
    
      if (this.position.x === targPos.x && this.position.y === targPos.y && this.free === 'returning') {

        // what to do if a returning ghost has hit the way to get into the ghost box
        
        let boxCount = this.board.ghostsInBox.length;
    
        if (boxCount >= 3) {
    
          // what to do if there are already three ghosts in the box
          this.free = 'spawning';
    
          this.el.style.backgroundColor = this.color;
    
          let fringes = Array.from(this.el.getElementsByClassName('fringe'))

          fringes.forEach(fringe => {
            if (fringe.style.backgroundColor !== '' && fringe.style.backgroundColor !== 'transparent') {
              fringe.style.backgroundColor = this.color;
              fringe.style.display = '';
            } else {
              let bgimage = fringe.style.backgroundImage;
              let newBgimage = bgimage.replace('blue',this.color);
              newBgImage = bgimage.replace('white',this.color);
              fringe.style.backgroundImage = newBgimage;
              fringe.style.display = '';
            }
          })
          let frowns = Array.from(this.el.getElementsByClassName('blue-frown'));
          frowns.forEach(frown => frown.style.display = 'none')
          let blueeyes = Array.from(this.el.getElementsByClassName('blue-pupil'));
          blueeyes.forEach(eye => eye.style.display = 'none')
          this.speed = 0;
          if (this.direction != 'left') {this.moveEyes('left',this.board)};
          this.direction = 'left';
    
          this.spawn();
    
        } else {
    
          // what to do if there is room to enter the box
          if (this.direction != 'down') {this.moveEyes('down',this.board)};
          this.direction = 'down';
          this.speed = d['down'].speed;
          this.position.x = 14 * cellW - cellW / 2;
          this.el.style.left = this.position.x + "px";
    
          let ghostGate = document.getElementById('ghost-gate');
          ghostGate.style.backgroundColor = 'black';
    
          this.board.ghostsInBox.push(this.el.id);
          console.log('enter',this.board.ghostsInBox);

          reEnter(this);
    
          function reEnter(ghost) {
            
            if (ghost.enterBox() === true) {
              setTimeout(function() {
                ghostGate.style.backgroundColor = '#e1e1fb';
              },500)
              return true;}
    
            setTimeout(function() { reEnter(ghost) }, 50);
    
          }
    
        }
    
      }
    
      // do these calculations if the ghost has hit a tile square-on
      else if (this.position.x % cellW === 0 && this.position.y % cellW === 0 && this.isInBox === false) {
    
        let dirs = ['left','right','up','down'];
    
        // remove reversing direction as an option
        let rev = d[this.direction].reverse;
        dirs.splice(dirs.indexOf(rev),1);

        // filter out any directions that have walls
        dirs = dirs.filter(dir => isWall(nextPos(this.rcPos,dir),dir,this.board) === false)
    
        if (dirs.length === 1) {
          // if there is only one option (i.e. in a corner), go in that direction
          if (dirs[0] !== this.direction) {
            this.moveEyes(dirs[0],this.board)
            this.direction = dirs[0]; 
            this.speed = d[dirs[0]].speed;
          }
        }
        else if (this.free !== 'returning' && dirs.includes(msPacMan.direction) && (this.el.id === 'blinky' ||  this.el.id === 'pinky') && this.rcPos.col > 3 && this.rcPos.col < this.board.cols - 3) {
          // if it is possible to go in the direction msPacMan is facing, do it
          this.direction = msPacMan.direction; 
          this.speed = d[msPacMan.direction].speed;
        }
        else {
    
          let newDir = '';

          // find target row and column direction relative to ghost
          let targRowDir = targPos.y > this.position.y ? 'down' : targPos.y < this.position.y ? 'up' : 'same'
          let targColDir = targPos.x > this.position.x ? 'right' : targPos.x < this.position.x ? 'left' : 'same'
    
          // if the item is in a portal row, see if it would be better to go through the portal
          if (portals.includes(this.rcPos.row)) {
            let optA = Math.abs(targPos.col - this.rcPos.col);
            let optB = Math.min(targPos.col, (this.board.cols - targPos.col));
            optB += Math.min(this.rcPos.col,(this.board.cols - this.rcPos.col));
    
            if (optB < optA && targColDir !== 'same') { targColDir = d[targColDir].reverse; }
          }
    
          // if both directions are available, pick the one with the longest run available
          if (dirs.includes(targRowDir) && dirs.includes(targColDir)) {
    
            function checkRun(pos,dir,board=board2) {
              let hitWall = false;
              let tempPos = {row: pos.row, col: pos.col, rowM: pos.row + 1, colM: pos.col + 1};
              let runCount = 0;
              while (hitWall === false && tempPos.col > 0 && tempPos.col < board.cols - 1) {
                if (isWall(tempPos,dir,board)) {hitWall = true;} 
                else {runCount++; tempPos.row += d[dir].row; tempPos.rowM += d[dir].row; tempPos.col += d[dir].col; tempPos.colM += d[dir].col}
              }
              return runCount;
            }
    
            if (checkRun(this.rcPos,targRowDir,this.board) > checkRun(this.rcPos,targColDir)) {
              newDir = targRowDir;
            }
            else if (checkRun(this.rcPos,targRowDir) < checkRun(this.rcPos,targColDir)) {
              newDir = targColDir;
            }
            // if both runs are equal, pick at random
            else if (Math.random() < 0.5) {newDir = targRowDir} else {newDir = targColDir}
    
          }
          else if (dirs.includes(targRowDir)) {newDir = targRowDir}
          else if (dirs.includes(targColDir)) {newDir = targColDir}
          else if (dirs.includes(this.direction)) {newDir = this.direction}
          else {
            let index = Math.floor(Math.random() * dirs.length);
            newDir = dirs[index];
          }
          if (newDir === '') {console.log("Houston we have a porblem")}
          this.direction = newDir;
          this.speed = d[newDir].speed;
    
        }

        teleport(this);
    
        if (this.direction !== startDir) {
          this.moveEyes(this.direction,this.board)
        }

        let fast = true;
        if (targPos.row === this.rcPos.row && this.rcPos.col > targPos.col - 2 && this.rcPos.col < targPos.col + 2) {
          fast = false;
        }
        if (this.free === 'returning' && fast === true) {
          let item = this;
          setTimeout(function() {
                                  item.move(item.direction);
                                },25);
        }
    
      }
    
    
  }

  get isInBox() {
    const board = this.board;
    if (this.rcPos.row >= board.ghostStart.row && this.rcPos.row < board.ghostEnd.row - 1) {
      if (this.rcPos.col >= board.ghostStart.col && this.rcPos.col < board.ghostEnd.col) {
        return true;
      }
    }
    return false;
  }

  move(dir) {

    const board = this.board;
    const fringeW = Math.floor(board.tileW * 1.5 / 12);
    let ds = {left: {row: 0, col: -1,
                     eyeleft: fringeW * 2,
                     pupiltop: (board.tileW / 6) + fringeW * 2.5,
                     pupilleft: fringeW * 2},
              right: {row: 0, col: 1,
                      eyeleft: fringeW * 3,
                      pupiltop: (board.tileW / 6) + fringeW * 2.5,
                      pupilleft: fringeW * 4},
              up: {row: -1, col: 0,
                   eyeleft: fringeW * 2.5,
                   pupiltop: (board.tileW / 6) + fringeW * 0.5,
                   pupilleft: fringeW * 3},
              down: {row: 1, col: 0,
                     eyeleft: fringeW * 2.5,
                     pupiltop: (board.tileW / 6) + fringeW * 2.5,
                     pupilleft: fringeW * 3}};

    if (this.direction !== dir) {
      this.moveEyes(dir,board,ds);
    }
    this.direction = dir;
    this.speed = board.speed * ds[dir].row + board.speed * ds[dir].col;

    this.position.x = this.position.x + board.speed * ds[dir].col;
    this.position.y = this.position.y + board.speed * ds[dir].row;
    this.el.style.left = this.position.x;
    this.el.style.top = this.position.y;
    this.rcPos.col = Math.floor(this.position.x / board.tileW);
    this.rcPos.row = Math.floor(this.position.y / board.tileW);
    this.rcPos.colM = this.rcPos.col + 1;
    this.rcPos.rowM = this.rcPos.row + 1;

  }

  moveEyes(dir,board=board2,ds = -1) {
    if (ds = -1) {
      const fringeW = Math.floor(board.tileW * 1.5 / 12);
      ds = {left: {row: 0, col: -1,
                    eyeleft: fringeW * 2,
                    pupiltop: (board.tileW / 6) + fringeW * 2.5,
                    pupilleft: fringeW * 2},
            right: {row: 0, col: 1,
                    eyeleft: fringeW * 3,
                    pupiltop: (board.tileW / 6) + fringeW * 2.5,
                    pupilleft: fringeW * 4},
            up: {row: -1, col: 0,
                  eyeleft: fringeW * 2.5,
                  pupiltop: (board.tileW / 6) + fringeW * 0.5,
                  pupilleft: fringeW * 3},
            down: {row: 1, col: 0,
                    eyeleft: fringeW * 2.5,
                    pupiltop: (board.tileW / 6) + fringeW * 2.5,
                    pupilleft: fringeW * 3}};
    }
    let fringeW = Math.floor(board.tileW * 1.5 / 12);
    let eyes = Array.from(this.el.getElementsByClassName('eyeball'));
    let pupils = Array.from(this.el.getElementsByClassName('pupil'));
  
    eyes[0].style.left = ds[dir].eyeleft + 'px';
    eyes[1].style.left = (ds[dir].eyeleft + fringeW * 5) + 'px';
  
    pupils[0].style.left = ds[dir].pupilleft + 'px';
    pupils[1].style.left = (ds[dir].pupilleft + fringeW * 5) + 'px';

  }

}

class MsPacMan {

  constructor(board) {
  
    let row = board.layout.findIndex(x => x.includes('P'));
    let col = board.layout[row].indexOf('P');
    let cellW = board.tileW;
    let pacPos = {row, col};

    let x = pacPos.col * cellW;
    let y = pacPos.row * cellW;

    this.position = {x,y};
    this.speed = board.speed;
    this.rcPos = pacPos;
    this.cache = '';
    this.direction = 'right';

      // Add image to div id = game
      let game = document.getElementById('game');
      let el = document.createElement('img');
      el.style.position = 'absolute';
      el.style.zIndex = '200';
      el.id = 'mspacman';
      el.src = './images/mspacman1.png';
      el.style.transform = 'rotate(0deg)';
      let topPad = Math.floor((board.tileW * 0.5) / 2);
      let rightPad = Math.floor((board.tileW * 0.5) / 2);
      el.style.margin = topPad + "px " + rightPad + "px " + topPad + "px " + rightPad + "px";
      el.width = board.tileW * 1.5;
    
      // Set position
      el.style.left = this.position.x - board.tileW / 2;
      el.style.top = this.position.y;
    
      game.appendChild(el);

      this.el = el;

  }

}

// make a board out of the map, with speed set to 6
const board2 = new Board(board,6);

const [ghosts, portals, rowHeight, colHeight] = 
            [[],
             [],
             Math.floor((+window.innerHeight - 40) / ((board.length + 2) * 6)) * 6,
             Math.floor((+window.innerWidth - 40) / (board[0].length * 6)) * 6];

let isMobile = false;
let dotCount = 0;

const cellW = Math.min(rowHeight,colHeight);
const fringeW = Math.floor(cellW * 1.5 / 12);

const pacWidth = cellW * 1.5;
const dotWidth = Math.floor(cellW / 9) * 2;

let pacPos = {'col' : 0, 'colM' : 1, 'row' : 0, 'rowM' : 1}; 

for (let i = 0; i < board.length; i++) {
  let thisRow = board[i];
  if (thisRow.includes('P')) {
    pacPos.col = thisRow.indexOf('P');
    pacPos.colM = thisRow.indexOf('P') + 1;
    pacPos.row = i;
    pacPos.rowM = i + 1;
    break;
  }
}

function checkCorners(pos) {

  let res = {'borderTopLeft' : 'none', 'borderTopRight' : 'none', 'borderBottomLeft' : 'none', 'borderBottomRight' : 'none'};
  let n = checkNeighbors(pos);
  if (n.top.search(/[\-SPB]/) > -1 && n.topRight.search(/[\-SPB]/) > -1 && n.right.search(/[\-SPB]/) > -1) {res.borderTopRight = 'hall';}
  if (n.right.search(/[\-SPB]/) > -1 && n.bottomRight.search(/[\-SPB]/) > -1 && n.bottom.search(/[\-SPB]/) > -1) {res.borderBottomRight = 'hall';}
  if (n.bottom .search(/[\-SPB]/) > -1 && n.bottomLeft.search(/[\-SPB]/) > -1 && n.left.search(/[\-SPB]/) > -1) {res.borderBottomLeft = 'hall';}
  if (n.left.search(/[\-SPB]/) > -1 && n.topLeft.search(/[\-SPB]/) > -1 && n.top.search(/[\-SPB]/) > -1) {res.borderTopLeft = 'hall';}
  if (n.top === 'X' && n.topRight === 'X' && n.right === 'X') {res.borderTopRight = 'wall';}
  if (n.right === 'X' && n.bottomRight === 'X' && n.bottom === 'X') {res.borderBottomRight = 'wall';}
  if (n.bottom === 'X' && n.bottomLeft === 'X' && n.left === 'X') {res.borderBottomLeft = 'wall';}
  if (n.left === 'X' && n.topLeft === 'X' && n.top === 'X') {res.borderTopLeft = 'wall';}

  return res;

}

function checkNeighbors(pos) {

  let col = pos.col;
  let row = pos.row;

  let res = {'top' : 'E', 'topRight' : 'E', 'right' : 'E', 'bottomRight' : 'E',
             'bottom' : 'E', 'bottomLeft' : 'E', 'left' : 'E', 'topLeft' : 'E'};

  if (row > 0) {res.top = board[row - 1].charAt(col)};
  if (row > 0 && col + 1 < board[0].length) {res.topRight = board[row - 1].charAt(col + 1);}
  if (col + 1 < board[0].length) {res.right = board[row].charAt(col + 1);}
  if (col + 1 < board[0].length && row < board.length - 1) {res.bottomRight = board[row + 1].charAt(col + 1);}
  if (row + 1 < board.length) {res.bottom = board[row + 1].charAt(col);}
  if (row + 1 < board.length && col > 0 ) {res.bottomLeft = board[row + 1].charAt(col - 1);}
  if (col > 0) {res.left= board[row].charAt(col - 1);}
  if (col > 0 && row > 0) {res.topLeft = board[row - 1].charAt(col - 1);}

  return res;

}

function drawBoardNew(board) {

  let game = document.getElementById('game');
  let scoreDiv = document.getElementById('score-board');

  scoreDiv.style.left = (board.cols * board.tileW - parseInt(scoreDiv.style.width)) + "px";

  const boardMap = board.layout;
  boardMap.forEach((cols,row)=>{

    // record ghost box positions, if applicable
    if (cols.includes('G') && board.ghostStart.row === -1) {
      board.ghostStart.col = cols.indexOf('G'); 
      board.ghostStart.row = row;
      board.ghostEnd.col = cols.lastIndexOf('G');
    }
    else if (cols.includes('G') && board.ghostEnd.row < row) {
      board.ghostEnd.row = row;
    }

    // record portal positions, if applicable
    if (cols.startsWith('-')) {board.portals.push(row);}

    for (let col = 0; col < cols.length; col++) {

      const pos = new RcPos(row,col);

      if (cols.charAt(col) === 'X') {

        // make a wall, if applicable
        let thisBlock = new Wall(pos,board);
        game.appendChild(thisBlock);

      } else if (cols.charAt(col) !== 'G' && cols.charAt(col) !== 'S' && cols.charAt(col) !== 'P') {

        // Make a pacDot, if applicable
        const corners = board.tileCorners(pos);

        if (corners.bottomRight === 'outer') {

          const [ n , r , d ] = [board.tile(pos), board.tile(pos.right()), board.tile(pos.down())];

          if (n !== 'P' && r !== 'P' && r !== 'S' && d !== 'S') {
            let big = false;
            if (board.tile(pos) === 'B') { big = true; }
            const dot = new PacDot(pos, board, big);
            game.appendChild(dot);
            dotCount++;

          } 

        }

      }

    }
  })  
  
  // Make the ghost div
  let ghostArea = new GhostBox(board.ghostStart,board.ghostEnd,board2);
  game.appendChild(ghostArea);

  // Make the message divs
  //id, top, left, height, width, str, board, visibility

  let [ready, over, winner] = [{id: 'ready', 
                                style: {top: board.tileW * (board.ghostStart.row + 4), 
                                        left: board.tileW * board.ghostStart.col,
                                        fontSize: '2rem',
                                        display: ''},
                                innerHTML: 'READY!',},
                               {id: 'game-over', 
                                style: {top: board.tileW * (board.ghostStart.row - 1), 
                                        left: board.tileW * (board.ghostStart.col - 1),
                                        fontSize: '4rem',
                                        display: 'none'},
                                innerHTML: 'GAME OVER!',},
                               {id: 'winner', 
                                style: {top: board.tileW * (board.ghostStart.row + 1), 
                                        left: board.tileW * (board.ghostStart.col - 4),
                                        fontSize: '3.5rem',
                                        display: 'none'},
                                innerHTML: 'WINNER!!',}];
    let readyDiv = new MessageDiv(ready,board);
    let overDiv = new MessageDiv(over,board);
    let winnerDiv = new MessageDiv(winner,board);

    game.appendChild(readyDiv);
    game.appendChild(overDiv);
    game.appendChild(winnerDiv);
  
    const inky = new Ghost({'row':11,'col':14},'red','left','inky','free',board);
    const blinky = new Ghost({'row':14,'col':12},'aqua','up','blinky','notfree',board);
    const pinky = new Ghost({'row':14,'col':14},'plum','down','pinky','notfree',board);
    const clyde = new Ghost({'row':14,'col':16},'orange','right','clyde','notfree',board);
    
    game.appendChild(inky.el);
    game.appendChild(blinky.el);
    game.appendChild(pinky.el);
    game.appendChild(clyde.el);
  
    ghosts.push(inky, blinky, pinky, clyde);

    // if there are ghosts in the box from a prior run, remove them
    if (board.ghostsInBox.length > 0) {board.ghostsInBox.splice(0,board.ghostsInBox.length - 1);}

    // Add any relevant ghosts to the 'ghosts in box' list
    for(let ghost of ghosts) {if (ghost.boxPosition !== 'none') {board.ghostsInBox.push(ghost.el.id)}}

    // Make arrow divs
      // make arrow divs and put them below the main game

  let arrowsDiv = document.createElement('div');
  let height = window.innerHeight - (board.length) * cellW;
  let arrowH = height/3 - 40;
  let arrowW = arrowH * 2;
  let upArrowL = ((board.rows) * cellW) / 2 - arrowH;

  arrowsDiv.style.margin = '20px 0px 20px 0px';
  arrowsDiv.style.top = (board.length * cellW) + 'px';
  arrowsDiv.style.left = 0;
  arrowsDiv.style.position = 'absolute';
  arrowsDiv.classList.add('arrow');
  if (isMobile === false) {arrowsDiv.style.display = 'none';}

  const positions = {up: {top: 0,left: upArrowL},
                     down: {top: arrowW,left: upArrowL},
                     left: {top: arrowW / 2,left: upArrowL - 20 - arrowW / 2},
                     right: {top: arrowW / 2,left: upArrowL + arrowW}};              

  for (let dir in positions) {
    const tempArrow = makeArrow(dir,arrowW);
    arrowsDiv.appendChild(tempArrow);
  }

  function makeArrow(dir,arrowW) {
    let arrow = document.createElement('div');
    let arrowImg = makeArrowImg(arrowW,dir);
    arrow.appendChild(arrowImg);
    arrow.id = dir + '-arrow';
    arrow.style.zIndex = '2000';
    arrow.style.margin = '0px';
    arrow.style.position = 'absolute';
    arrow.style.left = positions[dir].left + 'px';
    arrow.style.top = positions[dir].top + 'px';
    arrow.setAttribute('onclick','cache(\''+dir+'\')');
    return arrow;
  }

  function makeArrowImg(arrowW,dir='down') {
    const rotate = {up:'rotate(180deg)',down:'',left:'rotate(90deg)',right:'rotate(-90deg)'}
    const img = document.createElement('img');
    img.src = './images/arrow.png';
    img.width = arrowW + 'px';
    img.height = (arrowW / 2) + 'px';
    img.transform = rotate[dir];
    return img;
  }

  game.appendChild(arrowsDiv);


}

function findXY(rcPos) {

  let x = rcPos.col * cellW;
  let y = rcPos.row * cellW;

  return {x, y};

}

window.onload = (event) => {
  let test = document.getElementsByClassName('test-div')
  if (test[0].style.display == 'none') {isMobile = true;}
  //drawBoard(board);
  drawBoardNew(board2);
  msPacMan = new MsPacMan(board2);

}

function nextPos(pos,dir) {

  if (dir === '') {return pos;}

  let next = {'col':pos.col,'colM': pos.col + 1,'row':pos.row, 'rowM':pos.row + 1};
  next.row += dir === 'down' ? 1 : dir === 'up' ? -1 : 0
  next.rowM += dir === 'down' ? 1 : dir === 'up' ? -1 : 0
  next.col += dir === 'right' ? 1 : dir === 'left' ? -1 : 0
  next.colM += dir === 'right' ? 1 : dir === 'left' ? -1 : 0
  
  return next;

}

function isWall(pos,dir,board=board2) {

  const wallD = {right: {row1: pos.row, row2: pos.rowM, col1: pos.colM, col2: pos.colM},
               down: {row1: pos.rowM, row2: pos.rowM, col1: pos.col, col2: pos.colM},
               left: {row1: pos.row, row2: pos.rowM, col1: pos.col, col2: pos.col},
               up: {row1: pos.row, row2: pos.row, col1: pos.col, col2: pos.colM}};

  const [row1, row2, col1, col2] = Object.values(wallD[dir]);

  //if (row2 > board.rows || row1 < 0 || col2 > board.cols || col1 < 0) {return true;}

  let res1 = board.layout[row1].charAt(col1);
  let res2 = board.layout[row2].charAt(col2);

  if (res1.search(/[XG]/) >= 0 || res2.search(/[XG]/) >= 0) {return true;} else {return false;}

}