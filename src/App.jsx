import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { GameList, Home, Error404, TicTacToe } from "./pages"
import { Stack } from "@mui/material"

const App = () => {
  return (
    <Stack sx={{ height: "100vh", width: "100vw", bgcolor: "#000" }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/game/tic-tac-toe" element={<TicTacToe />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Stack>
  )
}

export default App
