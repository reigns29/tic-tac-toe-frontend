import React from "react"
import { Link } from "react-router-dom"
import { Stack, Button, Box } from "@mui/material"
import { useMoralis } from "react-moralis"

const TicTacToeCard = () => {
  const { account } = useMoralis()

  return (
    <Stack sx={{ bgcolor: "#E5E4E2", borderRadius: "10px" }}>
      <Box component="img" src="/tic-tac-toe.svg" width="300px" sx={{ p: "24px" }} />
      {account ? (
        <Link to="/game/tic-tac-toe">
          <Button variant="contained" sx={{ width: "100%", borderStartStartRadius: 0, borderStartEndRadius: 0 }}>
            Play
          </Button>
        </Link>
      ) : (
        <Button variant="contained" disabled={true} sx={{ width: "100%", borderStartStartRadius: 0, borderStartEndRadius: 0 }}>
          Connect Wallet
        </Button>
      )}
    </Stack>
  )
}

export default TicTacToeCard
