import React from "react"
import { Icon, makeStyles } from "@material-ui/core"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import GitHubIcon from '@material-ui/icons/GitHub'
import CodeIcon from '@material-ui/icons/Code'
import PersonIcon from '@material-ui/icons/Person'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appBar: {

  },
}))
export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position={"static"}>
      <Toolbar>
        <Typography variant={"h5"} className={classes.title}>
          Genne
        </Typography>
        <IconButton color={"inherit"}>
          <HomeIcon />
        </IconButton>
        <IconButton color={"inherit"}>
          <GitHubIcon />
        </IconButton>
        <IconButton color={"inherit"}>
          <CodeIcon />
        </IconButton>
        <IconButton color={"inherit"}>
          <PersonIcon />
        </IconButton>
        <IconButton color={"inherit"}>
          <LibraryBooksIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}