import {useState } from 'react';
import { WinnerModal } from './components/WinnerModal.jsx'
import { Board } from './components/Board.jsx'
import {TURNS} from './constants.js'

function App() {
  const [board, setBoard] = useState(()=> {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  })
  const [winner, setWinner] = useState(null)
  const [turn, setTurn] = useState(()=> {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.Xgi;
  });

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className="board">
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      
      <Board board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} setWinner={setWinner} winner={winner}/>

      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
};

export default App;
