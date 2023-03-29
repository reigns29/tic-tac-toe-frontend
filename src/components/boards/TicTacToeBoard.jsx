import React from "react"
import "../../styles/tic-tac-toe.css"
import { Typography } from "@mui/material"

const Square = ({ chooseSquare, val }) => {
  return (
    <div className="square" onClick={chooseSquare}>
      {val === 0 && "O"}
      {val === 1 && "X"}
    </div>
  )
}

const TicTacToeBoard = ({ state: { board, players, turn }, socket, account }) => {
  const chooseSquare = (square) => socket.emit("state:server", { square })

  return (
    <>
      <Typography variant="h4" color="red" fontWeight="bold">
        {players[account] === turn ? "Your Turn!" : "Opponents Turn!"}
      </Typography>
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0)
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1)
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2)
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3)
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4)
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5)
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6)
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7)
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8)
            }}
          />
        </div>
      </div>
    </>
  )
}

export default TicTacToeBoard
