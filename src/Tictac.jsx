
import { useState } from "react";
import "./App.css";


export let currentPlayer = true;



export default function Tictac() {
    let [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);

    function Click({ index }) {

        if (board[index]) {
            return;
        }
        let newBoard = board.slice();

        if (currentPlayer) {

            newBoard[index] = "X";

        } else {
            newBoard[index] = "O";

        }


        currentPlayer = !currentPlayer;
        setBoard(newBoard);
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Current Player: {currentPlayer ? "O": "X"}</h1>
            <div className="board">

                <Square value={board[0]} index="0" Click={Click} />
                <Square value={board[1]} index="1" Click={Click} />
                <Square value={board[2]} index="2" Click={Click} />

                <Square value={board[3]} index="3" Click={Click} />
                <Square value={board[4]} index="4" Click={Click} />
                <Square value={board[5]} index="5" Click={Click} />

                <Square value={board[6]} index="6" Click={Click} />
                <Square value={board[7]} index="7" Click={Click} />
                <Square value={board[8]} index="8" Click={Click} />
            </div>

            <button onClick={setBoard([null, null, null, null, null, null, null, null, null])}>Reset</button>
        </div>

       
    );
}





export function Square({ index, value, Click }) {


    return (
        <button className="square" onClick={() => Click({ index })} >
            {value}

        </button>
    );

}



