import React from "react"
import {makeStyles} from "@material-ui/core"
import AppBar from '@material-ui/core/AppBar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {

  },
}))
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

    </div>
  )
}