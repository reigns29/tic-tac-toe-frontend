import React from "react"
import { Stack, Typography } from "@mui/material"
import { ConnectButton } from "@web3uikit/web3"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <Stack flexDirection="row" justifyContent="space-between" alignItems="center" sx={{ p: "16px", borderBottom: "4px solid red" }}>
      <Link to="/games">
        <Typography variant="h5" color="red" fontWeight="bold">
          Blockchain Gamerz
        </Typography>
      </Link>
      <ConnectButton moralisAuth={false} />
    </Stack>
  )
}

export default Navbar
