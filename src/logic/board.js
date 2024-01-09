import {WINNER_COMBOS} from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
    // Revisamos todos los combos ganadores
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    //Si no hay ganador retornamo null
    return null
  }

  export const checkEndGame = (newBoard) => {
    //Revisamos si no hay más espacios vacíos en el tablero 
    return newBoard.every(square => square !== null)
  }

  