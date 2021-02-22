import React from "react"
import {makeStyles} from "@material-ui/core"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/'

const useStyles = makeStyles((theme) => ({
  appBar: {

  },
}))
export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position={"static"}>
      <Toolbar>

      </Toolbar>
    </AppBar>
  )
}