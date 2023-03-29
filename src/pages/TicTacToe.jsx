import React, { useState, useEffect } from "react"
import { io } from "socket.io-client"
import { useMoralis } from "react-moralis"
import { Navigate, useNavigate } from "react-router"

const TicTakToe = () => {
  const { account } = useMoralis()
  if (!account) return <Navigate to="/games" replace />

  const navigate = useNavigate()

  const [waiting, setWaiting] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const URL = `${import.meta.env.VITE_BACKEND_URL}/tic-tac-toe`
    const socket = io(URL)

    socket.on("connect", () => socket.emit("addToGameLobby", { account }))

    socket.on("wait", () => setWaiting(true))

    socket.on("ready", () => {
      setWaiting(false)
      setReady(true)
    })

    socket.on("state:client", () => {})

    socket.on("finish", (winner) => {
      // TODO: show modal with winner === account
      console.log("winner:", winner)
      socket.disconnect()
    })

    // socket.on("error:playing_account", () => navigate("/games"))

    // socket.on("connect_error", () => {})

    socket.on("disconnect", () => navigate("/games", {}))

    return () => socket.disconnect()
  }, [])

  if (!waiting && !ready) return <div>Connecting...</div>
  if (waiting) return <div>waiting...</div>
  return <div>TicTakToe</div>
}

export default TicTakToe
