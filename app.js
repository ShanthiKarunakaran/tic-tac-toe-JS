const gameBoard = document.querySelector('#gameboard')
const info = document.querySelector(".info")

const cells = [
  "","","","","","","","",""
]

let go = "circle"
info.textContent = "Circle goes first"


console.log("gameBoard", cells)



function createBoard() {
  cells.forEach((cell, index) => {
    const cellElem = document.createElement('div')
    cellElem.classList.add('square')
    cellElem.id = index
    cellElem.addEventListener('click', addGo)
    gameBoard.append(cellElem)
  })
}

function addGo(e) {
  const goDisplay = document.createElement('div')
  goDisplay.classList.add(go)
  e.target.append(goDisplay)
 
  go = go === "circle" ? "cross" : "circle"
  info.textContent = "its the turn for" + " " +go 
  e.target.removeEventListener("click", addGo)
  checkScore()
}

function checkScore() {
  const allSquares = document.querySelectorAll(".square")
  console.log("allSquares", allSquares)
  const winningCombos = [  
    [0, 1, 2], [3, 4, 5],  [6, 7, 8],
    [0, 3, 6], [1, 4, 7],  [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  winningCombos.forEach(innerArray => {
   
    const circleWins = innerArray.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
    if (circleWins) {
      info.textContent = "Circle wins"
      allSquares.forEach(square => {
        square.replaceWith(square.cloneNode(true))
      })
    }
  })

  winningCombos.forEach(innerArray => {
   
    const crossWins = innerArray.every(cell => allSquares[cell].firstChild?.classList.contains('cross'))
    if (crossWins) {
      info.textContent = "Cross wins"
      allSquares.forEach(square => {
        square.replaceWith(square.cloneNode(true))
      })
    }
  })
  
  }
 



createBoard()

