import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xNext, setxNext] = useState(true)
  const [playerSelect, setPlayerSelect] = useState("x")

const handleClick = (index) => {
  const squareUpdate = [...squares]
  if (squareUpdate[index]) {
    return }
    squareUpdate[index] = xNext ? "X" : "O" // conditional opertator for if-else: is xNext is true the expression equals X and if false equals 0
    setSquares(squareUpdate)
    setxNext(!xNext)
  
    
    const winner = theWinner(squareUpdate)
      if (winner) {
        alert(`winner: ${winner}`)
      } else if (squareUpdate.every((square) => square !== null))
      alert("Draw!! Please restart the game.") 
      
      
      }


    const theWinner = (squares) => {
      let winningThree = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
      for(let i =0; i < winningThree.length; i++) {
        let[a, b, c] = winningThree[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] == squares[c]) {
          return squares[a]
        }
    }
          return null
}

 let status 
 let winner = theWinner(squares)
 if (winner) {
  status = `winner: ${winner}`
  alert(`winner: ${winner}`)
 } else {
  status = `Next player: ${xNext ? "X" : "O"}`
 }
 const refresh = () => {
  window.location.reload(true)
 }
  return (
    <>
      <body>
        <h1>Tic Tac Toe</h1>
        <div className="box">
          {squares.map((value, index) => (
            <Square key={index} value={value} onClick={() => handleClick(index)} />
          ))}
        </div>
        <div className="status">{status}</div>
        <button onClick={refresh}>Play again</button>
      </body>
    </>
  )
}





export default App