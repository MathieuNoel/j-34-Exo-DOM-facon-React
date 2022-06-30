var app = {
  init: function() {
    app.drawBoard();       
    const  element = document.querySelector('#launchScript');    
    element.addEventListener("click", app.handleLaunchScriptButton);
  },
  handleLaunchScriptButton: function() {    
    const codeLines = document.querySelector('#userCode').value.split(/\n/);
    window.setTimeout(function() {
      app.codeLineLoop(codeLines, 0);
    }, 2000);
  },
  codeLineLoop: function(codeLines, index) {  
    // Getting currentLine
    const currentLine = codeLines[index];    
    // Increment
    index++;
    // if still a line to interpret
    switch (currentLine) {
      case 'move forward':        
        app.moveForward();
        break;
      case 'turn left':        
        app.turnLeft();
        break;
      case 'turn right':        
        app.turnRight()
        break;
      default:
        alert(`Sorry, you must answer "move forward" or "turn left" or "turn right". the row n°${index} is not correct`);
        break;
    }
    
    if (index < codeLines.length) {
        // Recall same method (=> make a loop)
      window.setTimeout(function() {
        app.codeLineLoop(codeLines, index);
      }, 1000);
    } else {
      window.setTimeout(function() {
        app.checkSuccess();
      }, 1000);
    }
  },
  checkSuccess: function() {
    const cursor = document.querySelector('.cellCurrent');
    if(cursor.classList.contains('cellEnd')){
      alert('YOU WIN !!!!')
    } else {
      alert('YOU LOSE !!!!')
    }
  },
  drawBoard: function() {
    const board = document.querySelector('#board')
    for(let i = 0 ; i <= 3 ; i ++) {
      const cellRow = document.createElement('div')
      board.appendChild(cellRow)
      cellRow.classList.add('cellRow')
      cellRow.setAttribute("id", `row${i}`)
       for(j = 0 ; j <= 5 ; j++) {
        const cell = document.createElement('div')
        cellRow.appendChild(cell)
        cell.classList.add('cell')
       }
    }
    const cellStart = document.querySelector('#row0').firstChild
    cellStart.classList.add('cellStart','cellCurrent','cellCurrent-right')
    const cellEnd = document.querySelector('#row3').lastChild
    cellEnd.classList.add('cellEnd')
  },

  moveForward() {
    const cursor = document.querySelector('.cellCurrent');      
    const board = document.getElementById('board');    
    if(document.querySelector('.cellCurrent').classList.contains('cellCurrent-right')){
      cursor.classList.remove('cellCurrent','cellCurrent-right');
      const parent = cursor.closest('.cellRow');
      const index = [parent.firstChild].indexOf.call(parent.children, cursor)
      if(index == 5) return alert('move forward out of the board is foriden !')
      cursor.nextElementSibling.classList.add('cellCurrent','cellCurrent-right');
      };
    if(document.querySelector('.cellCurrent').classList.contains('cellCurrent-left')){
      cursor.classList.remove('cellCurrent');
      const parent = cursor.closest('.cellRow');
      const index = [parent.firstChild].indexOf.call(parent.children, cursor)
      if(index == 0) return alert('move forward out of the board is foriden !')
      cursor.nextElementSibling.classList.add('cellCurrent','cellCurrent-left');
      };
    if(document.querySelector('.cellCurrent').classList.contains('cellCurrent-bottom')){
      const parent = cursor.closest('.cellRow');
      const index = [board.childNodes.length].indexOf.call(board.children, parent) 
      if(index == 3) return alert('move forward out of the board is foriden !')    
      const i = [parent.childNodes.length].indexOf.call(parent.children, cursor);
      cursor.classList.remove('cellCurrent');
      const toRowDown = parent.nextElementSibling.childNodes[i];
      toRowDown.classList.add('cellCurrent', 'cellCurrent-bottom');      
      };
    if(document.querySelector('.cellCurrent').classList.contains('cellCurrent-top')){
      const parent = cursor.closest('.cellRow');
      const index = [board.childNodes.length].indexOf.call(board.children, parent)
      console.log('LELELELEL',index);
      if( index  == 0){ return alert('move forward out of the board is foriden !')}
      const i = [parent.childNodes.length].indexOf.call(parent.children, cursor);
      cursor.classList.remove('cellCurrent');
      const toRowDown = parent.previousElementSibling.childNodes[i];
      toRowDown.classList.add('cellCurrent', 'cellCurrent-top');      
      };
  },

  turnRight() {
    const cursor = document.querySelector('.cellCurrent');
    if(cursor.classList.contains('cellCurrent-right')){      
      cursor.classList.remove('cellCurrent-right');
      cursor.classList.add('cellCurrent-bottom');      
    } else if(cursor.classList.contains('cellCurrent-bottom')){      
      cursor.classList.remove('cellCurrent-bottom');     
      cursor.classList.add('cellCurrent-left');     
    } else if(cursor.classList.contains('cellCurrent-left')){
      cursor.classList.remove('cellCurrent-left');
      cursor.classList.add('cellCurrent-up');
    } else if(cursor.classList.contains('cellCurrent-up')){
      cursor.classList.remove('cellCurrent-up');
      cursor.classList.add('cellCurrent-right');
    }
  },

  turnLeft() {
    const cursor = document.querySelector('.cellCurrent');
    if(cursor.classList.contains('cellCurrent-right')){      
      cursor.classList.remove('cellCurrent-right');
      cursor.classList.add('cellCurrent-top');      
    } else if(cursor.classList.contains('cellCurrent-top')){      
      cursor.classList.remove('cellCurrent-top');     
      cursor.classList.add('cellCurrent-left');     
    } else if(cursor.classList.contains('cellCurrent-left')){
      cursor.classList.remove('cellCurrent-left');
      cursor.classList.add('cellCurrent-bottom');
    } else if(cursor.classList.contains('cellCurrent-bottom')){
      cursor.classList.remove('cellCurrent-bottom');
      cursor.classList.add('cellCurrent-right');
    }
  }
};

document.addEventListener('DOMContentLoaded', app.init);
