import { useState } from "react"

function Square({value,onSquareButton}) {
    return (
        <button
        className="w-8 h-8 border-1 hover:cursor-pointer font-bold"
        onClick={onSquareButton}
        >{value}</button>
    )
}

function Board({x,square,onPlay}) {

    function handleClick(i) {
        if (square[i] || calculateWinner(square)) return  // 防止重复标记
        const nextSquare = square.slice()
        nextSquare[i] = x ? 'X' : 'O'
        onPlay(nextSquare)
    }

    // 显示赢家，玩家轮次
    let status
    const winner = calculateWinner(square)
    if (winner) {
        status = "Winner: " + winner
    } else  {
        status = "Next Player: " + (x?'X':'O')
    }

    return (
        <div
        className="flex flex-col gap-1"
        >
            <h2>{status}</h2>
            <div
            className="flex gap-1"
            >
                <Square value={square[0]} onSquareButton={()=>handleClick(0)}/>
                <Square value={square[1]} onSquareButton={()=>handleClick(1)}/>
                <Square value={square[2]} onSquareButton={()=>handleClick(2)}/>
            </div>
            <div
            className="flex gap-1"
            >
                <Square value={square[3]} onSquareButton={()=>handleClick(3)}/>
                <Square value={square[4]} onSquareButton={()=>handleClick(4)}/>
                <Square value={square[5]} onSquareButton={()=>handleClick(5)}/>
            </div>
            <div
            className="flex gap-1"
            >
                <Square value={square[6]} onSquareButton={()=>handleClick(6)}/>
                <Square value={square[7]} onSquareButton={()=>handleClick(7)}/>
                <Square value={square[8]} onSquareButton={()=>handleClick(8)}/>
            </div>
        </div>
    )

}

export default function Game() {
    const [history,setHistory] = useState([Array(9).fill(null)])
    const [currentMove,setCurrentMove] = useState(0)
    const x = currentMove % 2===0
    const currentSquare = history[currentMove]

    function handlePlay(nextSquare) {
        // 增加历史记录
        const nextHistory = [...history.slice(0,currentMove+1),nextSquare]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
    }

    function jumpTo(move) {
        setCurrentMove(move)
    }

    const moves = history.map((current,move)=>{
        let description
        description = (move > 0) ? 'Go to move#' + move : 'Go to game start'
        return (
            <li key={move}>
                <button onClick={()=>jumpTo(move)}
                className="bg-yellow-100 p-1 border-1 rounded-lg hover:cursor-pointer"
                >{description}</button>
            </li>
        )
    })

    return (
        <div 
        className="flex gap-8 p-12"
        >
            <Board x={x} square={currentSquare} onPlay={handlePlay} />
            <ol 
            className="flex flex-col gap-2"
            >
                {moves}
            </ol>
        </div>
    )
}

// "裁判"
function calculateWinner(squares) {
    // 胜利的所有情形
    const winPath = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for (let i = 0;i<winPath.length;i++) {
        const [a,b,c] = winPath[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null;
}