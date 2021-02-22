import React from "react"
import {createMuiTheme, ThemeProvider} from "@material-ui/core"
import Header from "../components/header"
import Drawer from "../components/drawer"
import blueGrey from "@material-ui/core/colors/blueGrey"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: blueGrey[300]
    },
  }
})

const drawerWidth = 400;
export default function Home() {
  return (<div>
    <ThemeProvider theme={theme}>
      <Header drawerWidth={drawerWidth}/>
      <Drawer drawerWidth={drawerWidth}/>
      Hello world!
    </ThemeProvider>
  </div>)
}
