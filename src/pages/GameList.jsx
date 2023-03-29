import React from "react"
import { Stack, Typography } from "@mui/material"

import TicTacToeCard from "../components/cards/TicTacToeCard"

const GameList = () => {
  return (
    <Stack sx={{ p: "32px", overflow: "auto" }} gap={2}>
      <Typography variant="h4" fontWeight="bold" textAlign="center">
        Game List
      </Typography>
      <Stack flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" gap={2}>
        <TicTacToeCard />
        <TicTacToeCard />
        <TicTacToeCard />
        <TicTacToeCard />
        <TicTacToeCard />
        <TicTacToeCard />
      </Stack>
    </Stack>
  )
}

export default GameList
