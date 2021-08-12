let count = 0;
let gCount = 0;
let dCount = 0;
let powerCount = 0;
let eatenCount = 0;
let munchModeActive = false;
let stop = false;
let started = false;
let restarted = false;
let restartGhosts = false;
let restartRelease = false;
let score = 0;

const d = {'left':'','right':'','up':'','down':''};
d.left =  {'transform' : 'rotateY(180deg)',
           'speed' : -speed,
           'row' : 0,
           'col' : -1, 
           'reverse' : 'right',
           'eyetop' : ((cellW / 6) + fringeW) + 'px',
           'eyeleft' : (fringeW * 2) + 'px',
           'pupiltop' : ((cellW / 6) + fringeW * 2.5) + 'px',
           'pupilleft' : (fringeW * 2) + 'px'};
d.right = {'transform' : 'rotate(0deg)',
           'speed' : speed,
           'row':0,
           'col':1, 
           'reverse' : 'left',
           'eyetop' : ((cellW / 6) + fringeW) + 'px',
           'eyeleft' : (fringeW * 3) + 'px',
           'pupiltop' : ((cellW / 6) + fringeW * 2.5) + 'px',
           'pupilleft' : (fringeW * 4) + 'px'};
d.up =    {'transform' : 'rotate(90deg) rotateY(180deg)',
           'speed' : -speed,
           'row':-1,
           'col':0, 
           'reverse' : 'down',
           'eyetop' : ((cellW / 6) + fringeW) + 'px',
           'eyeleft' : (fringeW * 2.5) + 'px',
           'pupiltop' : ((cellW / 6) + fringeW * 0.5) + 'px',
           'pupilleft' : (fringeW * 3) + 'px'}
d.down =  {'transform' : 'rotate(90deg)',
           'speed' : speed,
           'row':1,
           'col':0, 
           'reverse' : 'up',
           'eyetop' : ((cellW / 6) + fringeW) + 'px',
           'eyeleft' : (fringeW * 2.5) + 'px',
           'pupiltop' : ((cellW / 6) + fringeW * 2.5) + 'px',
           'pupilleft' : (fringeW * 3) + 'px'};

// Deprioritize a button after it has been clicked
const buttonSwap = () => {

  let start = document.getElementById('start');
  if (start.style.display.includes('none')) { start.style.display = ''; } 
  else { start.style.display = 'none'; }

  let stop = document.getElementById('stop');
  if (stop.style.display.includes('none')) { stop.style.display = ''; } 
  else { stop.style.display = 'none'; }
}

function startGame() {

  if (stop === false && started === false) {
    
    restarted = false;
    update();
    setTimeout(updateGhosts,1000);
    setTimeout(function() {restartedRelease = false; release(board2);},7000)

    started = true;
    let readyDiv = document.getElementById('ready');
    readyDiv.style.display = 'none';

  }
  else {
    stop = !stop;
  }

  buttonSwap(`start`);

}

function restartGame() {

  started = false;
  stop = false;
  restarted = true;
  restartRelease = true;
  restartGhosts = false;
  
  // erase board, ghosts, and msPacMan
  const oldGame = document.getElementById('game');

  while (oldGame.firstChild) {
    oldGame.removeChild(oldGame.lastChild);
  }

  const oldScore = document.getElementById('score');
  oldScore.innerHTML = 0;
  score = 0;

  const msPacKeys = Object.keys(msPacMan);
  msPacKeys.forEach(key=> {
    delete msPacMan[key];
  })

  ghosts.splice(0,ghosts.length);

  function redraw() {
    drawBoardNew(board2);
    msPacMan = new MsPacMan(board2);
  }
  
  setTimeout(redraw,500);


  let restart = document.getElementById('restart');
  restart.style.display = 'none';

  let start = document.getElementById('start');
  start.style.display = ''; 

}

function cache(dir) {
  msPacMan.cache = dir;
  let el = dir + '-arrow';
  let arrow = document.getElementById(el);
  arrow.style.opacity = '60%';
  arrow.style.transform = 'translate(0px, 2px)';
  let unclick = () => {
    arrow.style.opacity = '';
    arrow.style.transform = '';
  }
  setTimeout(unclick,100);
}

// Update the position of Ms PacMan
function update() {

  if (restarted === true) {return false;}
  count++;
  dCount++;

  if (stop === false) {

    document.onkeydown = checkKey;

    function checkKey(e) {
    
        e = e || window.event;
        if (e.keyCode == '38' || e.keyCode == '87') { msPacMan.cache = 'up'; } 
        else if (e.keyCode == '40' || e.keyCode == '83') { msPacMan.cache = 'down'; } 
        else if (e.keyCode == '37' || e.keyCode == '65') { msPacMan.cache = 'left'; } 
        else if (e.keyCode == '39' || e.keyCode == '68') { msPacMan.cache = 'right'; }
    
    }
  
    checkGhostCollision();

    if (msPacMan.speed !== 0 || msPacMan.cache !== '') {
  
      checkCollisions(msPacMan);

      checkDots(msPacMan);
  
      if (msPacMan.direction === 'left' || msPacMan.direction === 'right' ) {
          msPacMan.position.x += msPacMan.speed;
          msPacMan.el.style.left = msPacMan.position.x;
      } else if (msPacMan.direction === 'up' || msPacMan.direction === 'down' ){
          msPacMan.position.y += msPacMan.speed;
          msPacMan.el.style.top = msPacMan.position.y;
      }
  
      msPacMan.rcPos.row = Math.floor(msPacMan.position.y / cellW);
      msPacMan.rcPos.rowM = Math.floor(msPacMan.position.y / cellW) + 1;
      msPacMan.rcPos.col = Math.floor(msPacMan.position.x / cellW);
      msPacMan.rcPos.colM = Math.floor(msPacMan.position.x / cellW) + 1;
    }

  }

  if (count === 3) {
      msPacMan.el.src = msPacMan.el.src.includes('mspacman1.png') ? 
                        './images/mspacman2.png' : './images/mspacman1.png'  
      count = 0;
    }

  if (dCount === 9) {
    let bigDots = Array.from(document.getElementsByClassName('big'));
    bigDots.forEach(dot=>{
      if (dot.style.display === '') {dot.style.display = 'none';} else {dot.style.display = '';}
    })
    dCount = 0;
  }

  setTimeout(update, 50);

}

// Update the position of free ghosts
function updateGhosts() {

  if (restarted === true && restartGhosts === false) {return false;}

  // correct starting position if applicable

  ghosts.forEach(ghost=> {

    if (ghost.free === 'free') {

      if (ghost.position.x % ghost.speed > 0) {
        ghost.position.x = ghost.position.x + ghost.position.x % ghost.speed;
        ghost.el.style.left = ghost.position.x;
      }
      if (ghost.position.y % ghost.speed > 0) {
        ghost.position.y = ghost.position.y + ghost.position.y % ghost.speed;
        ghost.el.style.top = ghost.position.y;
      }

    }

  })


  if (stop === false) {

    for (let ghost of ghosts) {

      if(ghost.free === 'free' || ghost.free === 'returning') {
  
        // check if the ghost can change direction 
        
        ghost.pickDir();
        ghost.move(ghost.direction);
        //checkGhostMoves(ghost);

        // change direction to chase pacman, go home, or run from pacman

        //if (ghost.direction === 'left' || ghost.direction === 'right' ) {
        //  ghost.position.x += ghost.speed;
        //  ghost.el.style.left = ghost.position.x;
        //} else if (ghost.direction === 'up' || ghost.direction === 'down' ){
        //    ghost.position.y += ghost.speed;
        //    ghost.el.style.top = ghost.position.y;
       // }

        //ghost.rcPos.row = Math.floor(ghost.position.y / cellW);
        //ghost.rcPos.rowM = Math.floor(ghost.position.y / cellW) + 1;
        //ghost.rcPos.col = Math.floor(ghost.position.x / cellW);
        //ghost.rcPos.colM = Math.floor(ghost.position.x / cellW) + 1;
      
      }

    }

  }

  setTimeout(updateGhosts, 50);

}


function checkDots(item) {

  // find all dots in the current cell
  let classCode = 'pac-dot-'+item.rcPos.col + '-' + item.rcPos.row;
  let next = nextPos(item.rcPos,item.direction);
  let classCode2 = 'pac-dot-'+next.col + '-' + next.row;
 
  if (item.direction === 'right') {classCode2 = 'pac-dot-'+next.colM + '-' + next.row;}
  if (item.direction === 'down') {classCode2 = 'pac-dot-'+next.col + '-' + next.rowM;}

  let dots = Array.prototype.slice.call(document.getElementsByClassName(classCode), 0);
  let dots2 = Array.prototype.slice.call(document.getElementsByClassName(classCode2), 0);
 
  dots.push(...dots2);
  //dots.push(...dots3);

  // check if any are in the mouth
  for (let i = 0; i < dots.length; i++) {

    let dot = dots[i];

    let dotLeft = parseInt(dot.style.left);
    let dotRight = dotLeft + parseInt(dot.style.width);
    let dotTop = parseInt(dot.style.top);
    let dotBottom = dotTop + parseInt(dot.style.width);
    let itemLeft = parseInt(item.el.style.left);
    let itemTop = parseInt(item.el.style.top);


    let leftBoundary = itemLeft + cellW - pacWidth / 2;
    let rightBoundary = leftBoundary + pacWidth;
    let topBoundary = itemTop + cellW - pacWidth / 2;
    let bottomBoundary = topBoundary + pacWidth;

    function removeDot(id) {
      let dotToRemove = document.getElementById(id);
      let game = document.getElementById('game');
      let removedDot = game.removeChild(dotToRemove);
      if (removedDot !== '') {
        if (removedDot.classList.contains('big')) {
          score += 50;
          if (munchModeActive === true) {powerCount = 0;} else {munchMode();}
        }
        else {score += 10;}
        let scoreDiv = document.getElementById('score');
        scoreDiv.innerHTML = score;
      }
    }

    if (dotLeft > leftBoundary && dotRight < rightBoundary && dotTop > topBoundary && dotBottom < bottomBoundary) {
      removeDot(dot.id); eatenCount++;
      if (eatenCount === dotCount) {

            // stop movement
            stop = true;

            // disappear ghosts
            ghosts.forEach(ghost => {
              if (ghost.free === 'free') {
                ghost.el.style.display = 'none';
              }
            })

            // appear 'winner'
            let win = document.getElementById('winner');
            win.style.display = '';

            // change button to 'restart'
            let stopButton = document.getElementById('stop');
            stopButton.style.display = 'none';

            let restart = document.getElementById('restart');
            restart.style.display = '';

      }
    }

  }

}

function checkGhostCollision() {

  // if collided with a ghost, end game
 
  let collidedGhosts = [];
  let pacMar = parseInt(msPacMan.el.style.margin);
  let pacL = parseInt(msPacMan.el.style.left) + parseInt(msPacMan.el.style.margin);
  let pacR = parseInt(msPacMan.el.style.left) + parseInt(msPacMan.el.style.margin) + parseInt(msPacMan.el.width);
  let pacT = parseInt(msPacMan.el.style.top) + parseInt(msPacMan.el.style.margin);
  let pacB = parseInt(msPacMan.el.style.top) + parseInt(msPacMan.el.style.margin) + parseInt(msPacMan.el.width);
  let pacDir = msPacMan.direction;

  ghosts.forEach(ghost => {

    let ghostCollision = false;
    if (ghost.free === 'free') {

      let ghostMar = parseFloat(ghost.el.style.margin);
      const ghostL = parseFloat(ghost.el.style.left) + ghostMar;
      const ghostR = parseFloat(ghost.el.style.left) + ghostMar + parseFloat(ghost.el.style.width);
      const ghostT = parseFloat(ghost.el.style.top) + ghostMar;
      const ghostB = parseFloat(ghost.el.style.top) + ghostMar + parseFloat(ghost.el.style.height);
      const ghostCx = (ghostL + ghostR) / 2;
      const ghostCy = (ghostT + ghostB) / 2;

      if ((ghostR >= pacL && ghostR <= pacR) || (ghostL <= pacR && ghostL >= pacL)) {
        if (ghostCy <= pacB && ghostCy >= pacT) {ghostCollision = true;}
        else if (ghostT <= pacB && ghostT >= pacT) { ghostCollision = true; } 
        else if (ghostB >= pacT && ghostB <= pacB) { ghostCollision = true; }
      }
      else if ((ghostB >= pacT && ghostB <= pacB) || (ghostT <= pacB && ghostT >= pacT)) {
        if (ghostCx <= pacR && ghostCx >= pacL) {ghostCollision = true;}
        else if (ghostL <= pacR && ghostL >= pacL) { ghostCollision = true; } 
        else if (ghostR >= pacL && ghostR <= pacR) { ghostCollision = true; }
      }

      if (ghostCollision === true) {
        collidedGhosts.push(ghost.el.id); 
      }
    }

  })

  if (collidedGhosts.length > 0 && powerCount === 0) {
    
    // stop movement
    stop = true;
    eatenCount = 0;
    dotCount = 0;

    // disappear msPacMan
    msPacMan.el.style.display = 'none';

    // appear 'game over'
    let over = document.getElementById('game-over');
    over.style.display = '';

    // change button to 'restart'
    let stopButton = document.getElementById('stop');
    stopButton.style.display = 'none';

    let restart = document.getElementById('restart');
    restart.style.display = '';

  }
  else if (collidedGhosts.length > 0 && powerCount > 0) {

    collidedGhosts.forEach(id=>{
      let ghostEl = document.getElementById(id);
      let ghostL = parseFloat(ghostEl.style.left) + parseFloat(ghostEl.style.margin);
      let ghostT = parseFloat(ghostEl.style.top) + parseFloat(ghostEl.style.margin);
      let ghostEaten = false;

      if ((ghostL <= pacL && pacDir === 'left') || (ghostL >= pacL && pacDir === 'right') ||
          (ghostT <= pacT && pacDir === 'up') || (ghostT >= pacT && pacDir === 'down')) {
            ghosts.forEach(x => {
              if (x.el.id === id && x.free === 'free') ghostEaten = true
            })
      }

      if (ghostEaten === true) { 

        ghosts.forEach(x => {

          if (x.el.id === id && x.free === 'free') {

            x.free = 'returning';
            x.el.style.backgroundColor = 'transparent';

            const divs = [];
            const classTypes = ['fringe','eyeball','pupil','blue-frown','blue-pupil'];
            classTypes.forEach(classtype => divs.push(...Array.from(x.el.getElementsByClassName(classtype))));
            divs.forEach(div => toggleDisplay(div));

            scoreDivAdd({'x': x.el.style.left, 'y':x.el.style.top});
            score += 200;
            document.getElementById('score').innerHTML = score;

          }
        })

      }

    })

  }

}

function toggleDisplay(item) {
  if (item.style.display === 'none') {item.style.display = ''} else {item.style.display = 'none'}
}

// Check prosimity to edges and reverse direction and image if needed
function checkCollisions(item) {

  if (item.cache !== '') {

    // figure out the next position based on the desired direction
    let next = nextPos(item.rcPos,item.cache);

    // if there is no wall there, AND the item is at a transition point, change the direction and speed and clear the cache
    let canTurn = false;
    if (findXY(item.rcPos).x === item.position.x && findXY(item.rcPos).y === item.position.y) {
      canTurn = true;}

    let canReverse = false;
    if (item.cache === d[item.direction].reverse) {canReverse = true;}

    if (isWall(next, item.cache) === false && (canTurn === true || canReverse === true)) {

          let stats = d[item.cache];
          let transformStr = stats.transform;

          let currDir = item.direction;

          let currTransform = item.el.style.transform;
          if (item.cache === 'down' && currDir === 'left') {transformStr = 'rotate(270deg) rotateY(180deg)';}
          else if (item.cache === 'down' && currDir === 'right') {transformStr = 'rotate(90deg)';}
          else if (item.cache === 'up' && currDir === 'left') {transformStr = 'rotate(90deg) rotateY(180deg)';}
          else if (item.cache === 'up' && currDir === 'right') {transformStr = 'rotate(-90deg)';}
          else if (item.cache === 'up' && currDir === 'down') {
            if (currTransform.includes('rotate(270deg) rotateY(180deg)')) {transformStr = 'rotate(270deg)';}
          }
          else if (item.cache === 'down' && currDir === 'up') {
            if (currTransform.includes('rotate(90deg) rotateY(180deg)')) {transformStr = 'rotate(90deg)';}
          }
          item.el.style.transform = transformStr;
          item.speed = stats.speed;
          item.direction = item.cache;
          item.cache = '';

          return true;
   
    } 
  
  }

  // if there is no cache, or it wasn't cleared, check whether Ms PacMan is up against a wall
  let next = nextPos(item.rcPos, item.direction);
  let xy = findXY(item.rcPos);
  if (isWall(next,item.direction) === true && xy.x === item.position.x && findXY(item.rcPos).y === item.position.y) {
    item.speed = 0;
    item.cache = '';
  }

  teleport(item);

}

function spawn(item) {

  let blinkCount = 0;

  function blink(item) {

    if (blinkCount === 44) {
               item.speed = d[item.direction].speed; item.free = 'free'; 
               if (munchModeActive === true) {
                      item.el.style.backgroundColor = 'blue';
                      let fringes = Array.from(item.el.getElementsByClassName('fringe'));
                      fringes.forEach(fringe=> {
                                 
                       if (fringe.style.backgroundColor === item.color) {fringe.style.backgroundColor = 'blue';}
                       else if (fringe.style.backgroundColor === 'white') {fringe.style.backgroundColor = 'blue';}
                       else {
                         let gradient = fringe.style.backgroundImage;
                         let newGradient = gradient.replace(item.color,'blue');
                         newGradient = newGradient.replace('white','blue');
                         fringe.style.backgroundImage = newGradient;
                       }

                     })

                     let eyes = [...Array.from(item.el.getElementsByClassName('eyeball')),
                                 ...Array.from(item.el.getElementsByClassName('pupil'))];
                     eyes.forEach(eye => eye.style.display = 'none');

                     let frowns = [...Array.from(item.el.getElementsByClassName('blue-frown')),
                                   ...Array.from(item.el.getElementsByClassName('blue-pupil'))];
                     frowns.forEach(frown=> frown.style.display = '');
                          
               }      
               return true;}
             
      let display = 'none';
      if (blinkCount % 8 === 0 || blinkCount === 0) {display = '';}
      if (blinkCount % 4 === 0) {

      item.el.style.display = display;

    }
    blinkCount++;
    setTimeout(function() {blink(item);},50);
  }

  blink(item);

}

function scoreDivAdd(pos) {

  let newDiv = document.createElement('div');
  newDiv.style.width = cellW * 2;
  newDiv.style.height = cellW * 2;
  newDiv.style.position = 'absolute';
  newDiv.style.display = '';
  newDiv.style.backgroundColor = 'transparent';
  newDiv.style.fontFamily = '\'Press Start 2P\',cursive';
  newDiv.style.color = 'lightgray';
  newDiv.style.zIndex = '1000';
  newDiv.style.textAlign = 'center';
  newDiv.style.left = pos.x;
  newDiv.style.top = pos.y;
  newDiv.innerHTML = '200';

  let game = document.getElementById('game');
  game.appendChild(newDiv);

  setTimeout(function() {game.removeChild(newDiv)},1500);

}

function release(board) {

  // releases new ghosts as applicable

  // stop the function if the game is restarted
  if (restarted === true || restartRelease === true) {return false;}

  // only proceed if there are notfree ghosts
  if (ghosts.every(ghost => ghost.free !== 'notfree') === false && stop === false) {

    // see which box positions are occupied
    let positions = boxPositions();
    let targetBoxPos = '';

    // center leaves first, followed by left and then right
    if (positions.center === true) {targetBoxPos = 'center'}
    else if (positions.left === true) {targetBoxPos = 'left'}
    else if (positions.right == true) {targetBoxPos = 'right'}

    ghosts.forEach(ghost=>{

      if (ghost.boxPosition === targetBoxPos) {

        const ghostGate = document.getElementById('ghost-gate');
        ghostGate.style.backgroundColor = 'black';
  
        leave(ghost,board);
  
        function leave(ghost) {
          if (restarted === true) {return false;}
          if (ghost.free !== 'notfree') {
            for (let otherGhost of ghosts) {
              if (otherGhost.boxPosition === 'center' && ghostsInBox <= 2) {
                reArrange(otherGhost);
              }
            }
            return true;}
          ghost.leaveBox();
          setTimeout(function() {leave(ghost)},50);
        }
  
        function reArrange(ghost) {
          if (ghost.reshuffle() === true) {return false;}
          ghost.reshuffle();
          setTimeout(function() {reArrange(ghost)},50)
        }
      }
    })

  }

  setTimeout(function() {release(board);},4000)

}

function munchMode() {

  if (stop === false) {

    if (munchModeActive === false) {munchModeActive = true;}
    // make free ghosts blue, turn off their eyes and turn on their frowns
    if (powerCount === 0) {

      ghosts.forEach(ghost=>{

        if (ghost.el.style.backgroundColor !== 'transparent') {

          ghost.el.style.backgroundColor = 'blue';

          let fringes = Array.from(ghost.el.getElementsByClassName('fringe'));
          fringes.forEach(fringe=> {
            if (fringe.style.backgroundColor === ghost.color || fringe.style.backgroundColor === 'white') {fringe.style.backgroundColor = 'blue';}
            else {
              let gradient = fringe.style.backgroundImage;
              let newGradient = gradient.replace(ghost.color,'blue');
              newGradient = newGradient.replace('white','blue');
              fringe.style.backgroundImage = newGradient;
            }
            
          })

          let eyeballs = Array.from(ghost.el.getElementsByClassName('eyeball'));
          eyeballs.forEach(eye => eye.style.display = 'none');

          let pupils = Array.from(ghost.el.getElementsByClassName('pupil'));
          pupils.forEach(pupil=> pupil.style.display = 'none');

          let frowns = Array.from(ghost.el.getElementsByClassName('blue-frown'));
          frowns.forEach(frown=> frown.style.display = '');

          let frownEyes = Array.from(ghost.el.getElementsByClassName('blue-pupil'));
          frownEyes.forEach(eye=> eye.style.display = '');

        }

      })
    }

    else if (powerCount < 80) {
        // animated mouth will go here
    }

    // flashing while winding down - count 80 (4 seconds)
    else if (powerCount < 120 && powerCount >= 80) {
      let tempColor = 'white';
      if (powerCount % 8 === 0) {tempColor = 'blue';}
      if (powerCount % 4 === 0) {

        ghosts.forEach(ghost=>{

          if (ghost.el.style.backgroundColor !== 'transparent') {
  
            if (ghost.el.style.backgroundColor === 'white' || ghost.el.style.backgroundColor === 'blue') {
              ghost.el.style.backgroundColor = tempColor;
            }
  
            let fringes = Array.from(ghost.el.getElementsByClassName('fringe'));
            fringes.forEach(fringe=> {
              if (fringe.style.backgroundColor === 'blue' || fringe.style.backgroundColor === 'white') {
                         fringe.style.backgroundColor = tempColor;
              }
              else {
                let gradient = fringe.style.backgroundImage;
                if (gradient.includes('blue') && tempColor !== 'blue') {
                      let newGradient = gradient.replace('blue',tempColor);
                      fringe.style.backgroundImage = newGradient;
                } else if (gradient.includes('white') && tempColor !== 'white') {
                      let newGradient = gradient.replace('white',tempColor);
                      fringe.style.backgroundImage = newGradient;                         
                }
                           
              }
              
            })
  
          }
  
        })

      }

    }

    // done - count 120 (6 seconds)
    else if (powerCount >= 120) {

      // make everything normal again
      ghosts.forEach(ghost=>{

        if (ghost.el.style.backgroundColor !== 'transparent') {
          ghost.el.style.backgroundColor = ghost.color;

          let fringes = Array.from(ghost.el.getElementsByClassName('fringe'));
          fringes.forEach(fringe=> {
            if (fringe.style.backgroundColor === 'blue' || fringe.style.backgroundColor === 'white' ) {fringe.style.backgroundColor = ghost.color;}
            else {
              let gradient = fringe.style.backgroundImage;
              let newGradient = gradient.replace('blue',ghost.color);
              newGradient = gradient.replace('white',ghost.color);
              fringe.style.backgroundImage = newGradient;
            }
            
          })
          let eyeballs = Array.from(ghost.el.getElementsByClassName('eyeball'));
          eyeballs.forEach(eye => eye.style.display = '');

          let pupils = Array.from(ghost.el.getElementsByClassName('pupil'));
          pupils.forEach(pupil=> pupil.style.display = '');

          let frowns = Array.from(ghost.el.getElementsByClassName('blue-frown'));
          frowns.forEach(frown=> frown.style.display = 'none');

          let frownEyes = Array.from(ghost.el.getElementsByClassName('blue-pupil'));
          frownEyes.forEach(eye=> eye.style.display = 'none');

        }

      })

      // stop function
      powerCount = 0;
      munchModeActive = false;
      return true;

    }

    powerCount++;

  }

  setTimeout(munchMode,50);

}

function ghostEyes(item, dir) {
  let eyes = Array.from(item.getElementsByClassName('eyeball'));
  let pupils = Array.from(item.getElementsByClassName('pupil'));

  eyes.forEach(eye => eye.style.top = d[dir].eyetop);
  eyes[0].style.left = d[dir].eyeleft;
  eyes[1].style.left = (parseInt(d[dir].eyeleft) + fringeW * 5) + 'px';

  pupils.forEach(pupil => pupil.style.top = d[dir].pupiltop);
  pupils[0].style.left = d[dir].pupilleft;
  pupils[1].style.left = (parseInt(d[dir].pupilleft) + fringeW * 5) + 'px'

}

function teleport(item,board=board2) {

  if (item.position.x <= 0 && item.direction === 'left') {
    item.position.x = (board.cols - 2) * board.tileW - board.speed;
    item.rcPos.col = board.cols - 3;
    item.rcPos.colM = board.cols - 2;
  }

  else if (item.position.x > (board.cols - 2) * cellW && item.direction === 'right') {
    item.position.x = 0;
    item.rcPos.col = 0;
    item.rcPos.colM = 1;
  }

}

function boxPositions() {
  
  const positions = {left: false, center: false, right: false}
  for (let ghost of ghosts) {if (ghost.boxPosition !== 'none' && ghost.boxPosition !== '') {
    positions[ghost.boxPosition] = true;}
  }
  return positions;

}