import React from "react"
import { Link } from "react-router-dom"
import { Stack, Button, Box } from "@mui/material"

const TicTacToeCard = () => {
  return (
    <Stack>
      <Box
        component="img"
        src="/tic-tac-toe.svg"
        width="300px"
        bgcolor="#E5E4E2"
        sx={{ borderStartStartRadius: "10px", borderStartEndRadius: "10px", p: "24px" }}
      />
      <Link to="/game/tic-tac-toe">
        <Button variant="contained" sx={{ width: "100%", borderStartStartRadius: 0, borderStartEndRadius: 0 }}>
          Play
        </Button>
      </Link>
    </Stack>
  )
}

export default TicTacToeCard
