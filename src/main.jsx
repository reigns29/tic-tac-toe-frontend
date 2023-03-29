import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material"
import { SnackbarProvider } from "notistack"
import { MoralisProvider } from "react-moralis"
import "./index.css"

const theme = createTheme({})

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider autoHideDuration={3000} dense={false} maxSnack={3} hideIconVariant={false}>
      <MoralisProvider initializeOnMount={false}>
        <Router>
          <App />
        </Router>
      </MoralisProvider>
    </SnackbarProvider>
  </ThemeProvider>
)
