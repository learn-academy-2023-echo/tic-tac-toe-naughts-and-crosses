import React from 'react'

const Square = ({ value, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      {value === "X" && <img src="https://www.onlygfx.com/wp-content/uploads/2018/07/8-grunge-x-brush-stroke-9.png" alt= "X" className="img1"/>} 
      {value === "O" && <img src="https://pngimg.com/d/circle_PNG59.png" alt= "O" className="img2"/>} 
      </div>
  )
}





export default Square
