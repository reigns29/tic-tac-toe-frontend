import React, { useState, useEffect } from "react"
import { useMoralis } from "react-moralis"
import { Navigate, useNavigate } from "react-router"
import { useSnackbar } from "notistack"
import TicTacToeBoard from "../components/boards/TicTacToeBoard"
import { Stack } from "@mui/material"
import { io } from "socket.io-client"

const TicTakToe = () => {
  const { account } = useMoralis()
  if (!account) return <Navigate to="/games" />

  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const [waiting, setWaiting] = useState(false)
  const [state, setState] = useState(null)
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const URL = `${import.meta.env.VITE_BACKEND_URL}/tic-tac-toe`
    const socket = io(URL)
    setSocket(socket)

    socket.on("connect", () => socket.emit("addToGameLobby", { account }))

    socket.on("wait", () => setWaiting(true))

    socket.on("ready", ({ state }) => {
      setState(state)
      setWaiting(false)
    })

    socket.on("state:client", ({ state }) => setState(state))

    socket.on("finish", (winnerAccount) => {
      if (winnerAccount) {
        const message = winnerAccount === account ? "You Won!" : "You Lost!"
        const opts = { variant: winnerAccount === account ? "success" : "error", anchorOrigin: { vertical: "top", horizontal: "center" } }
        enqueueSnackbar(message, opts)
      } else {
        enqueueSnackbar("Draw!", { variant: "info", anchorOrigin: { vertical: "top", horizontal: "center" } })
      }

      socket.disconnect()
    })

    socket.on("error:playing_account", () => navigate("/games"))

    // socket.on("connect_error", () => {})

    socket.on("disconnect", () => navigate("/games"))

    return () => socket.disconnect()
  }, [])

  if (state)
    return (
      <Stack flexGrow={1} justifyContent="center" alignItems="center">
        <TicTacToeBoard state={state} socket={socket} account={account} />
      </Stack>
    )

  if (waiting) return <div>waiting...</div>
  return <div>Connecting...</div>
}

export default TicTakToe
