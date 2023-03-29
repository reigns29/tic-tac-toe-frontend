import React from "react"
import { Stack, Typography } from "@mui/material"
import { ConnectButton } from "@web3uikit/web3"

const Navbar = () => {
  return (
    <Stack flexDirection="row" justifyContent="space-between" alignItems="center" sx={{ p: "16px", borderBottom: "4px solid red" }}>
      <Typography variant="h5" color="red" fontWeight="bold">
        Blockchain Gamerz
      </Typography>
      <ConnectButton moralisAuth={false} />
    </Stack>
  )
}

export default Navbar
