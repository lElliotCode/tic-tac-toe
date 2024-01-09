import { Square } from './Square'
import { checkWinnerFrom, checkEndGame } from '../logic/board.js'
import { TURNS } from '../constants.js'
import confetti from 'canvas-confetti';

export function Board({ board, setBoard, turn, setTurn, winner, setWinner }) {

    const updateBoard = (index) => {
        // No actualizar si ya hay datos en la posición
        if (board[index] || winner) return;
        // Actualizar el tablero
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);
        // Actualizar el turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);
        // Guardar la partida
        window.localStorage.setItem('board', JSON.stringify(newBoard))
        window.localStorage.setItem('turn', newTurn)
        // Revisar si hay ganador
        const newWinner = checkWinnerFrom(newBoard)
        if (newWinner) {

            setWinner(newWinner)
            setTimeout(() => {
                confetti()
                confetti()
                confetti()
            }, 50)
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }
    };

    return (
        <>
            <section className="game">
                {board.map((_, index) => {
                    return (
                        <Square key={index} index={index} updateBoard={updateBoard}>
                            {board[index]}
                        </Square>
                    );
                })}
            </section>

            <section className="turn">
                <Square
                    isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square
                    isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>
        </>
    )
}