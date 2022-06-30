var app = {
  init: function() {
    ;

    // TODO
    app.drawBoard();
    app.moveForwar()

    // Event listeners - TODO
  },
  handleLaunchScriptButton: function() {
    // TODO
    
    // TODO : get all lines as an array

    window.setTimeout(function() {
      app.codeLineLoop(codeLines, 0);
    }, 2000);
  },
  codeLineLoop: function(codeLines, index) {
    
    // Getting currentLine
    var currentLine = codeLines[index];
    console.log(currentLine);


    // Increment
    index++;

    // if still a line to interpret
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
    // TODO display if the game is won or not
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

  moveForwar() {
    const cursor = document.querySelector('.cellCurrent');    
    if(document.querySelector('.cellCurrent').classList.contains('cellCurrent-right')){
      cursor.classList.remove('cellCurrent');
      const newCursor = cursor.nextElementSibling
      newCursor.classList.add('cellCurrent','cellCurrent-right');
      };
    if(document.querySelector('.cellCurrent').classList.contains('cellCurrent-left')){
      cursor.classList.remove('cellCurrent');
      cursor.nextElementSibling.classList.add('cellCurrent','cellCurrent-left');
      };
    if(document.querySelector('.cellCurrent').classList.contains('cellCurrent-bottom')){
      const i = cursor.closest('.cellRow').childNodes.length.indexOf()
      cursor.classList.remove('cellCurrent');
      const toRowDown = cursor.closest('cellRow').nextElementSibling.childNodes[i];
      toRowDown.classList.add('cellCurrent', 'cellCurrent-bottom');      
      };
    if(document.querySelector('.cellCurrent').classList.contains('cellCurrent-top')){
      const i = cursor.closest('.cellRow').childNodes.length.indexOf()
      cursor.classList.remove('cellCurrent');
      const toRowDown = cursor.closest('cellRow').previousElementSibling.childNodes[i];
      toRowDown.classList.add('cellCurrent', 'cellCurrent-top');      
      };
  }
};

document.addEventListener('DOMContentLoaded', app.init);
