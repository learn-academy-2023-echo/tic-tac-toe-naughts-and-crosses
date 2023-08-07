import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

const [xNext, setxNext] = useState(true)

const handleClick = (index) => {
  const squareUpdate = [...squares]
  if (squareUpdate[index] === null) {
    squareUpdate[index] = xNext
    setSquares(squareUpdate)
    xNext(!xNext)
  }
  
  
}


  return (
    <>
      <body>
        <h1>Tic Tac Toe</h1>
        <div className="box">
          {squares.map((value, index) => {
            return<Square key={index} value={value} onClick={() => handleClick(index)} />
            
          })}
        </div>
      </body>
    </>
  )
}




export default App