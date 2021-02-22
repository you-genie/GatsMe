import React from "react"
import { makeStyles } from "@material-ui/core"
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
  appBar: (props) => ({
    width: `calc(100% - ${props.drawerWidth}px)`,
    marginTop: theme.spacing(3),
    marginLeft: props.drawerWidth,
    paddingLeft: theme.spacing(3),
  })
}))

const myNotionPage =
  "https://www.notion.so/Reading-List-eb63538ed9064b3fac7e1e5d620ab92e"

export default function Header(props) {
  const classes = useStyles(props);

  return (
    <AppBar color={"white"}
            elevation={0}
            className={classes.appBar}
            position={"static"}>
      <Toolbar>
        <Typography variant={"h5"} className={classes.title}>
          GENNE
        </Typography>
        <IconButton color={"inherit"} href={"/"}>
          <HomeIcon />
        </IconButton>
        <IconButton color={"inherit"} href={"https://github.com/you-genie"}>
          <GitHubIcon />
        </IconButton>
        <IconButton color={"inherit"} href={"https://github.com/you-genie/GatsMe"}>
          <CodeIcon />
        </IconButton>
        <IconButton color={"inherit"} href={"/"}>
          <PersonIcon />
        </IconButton>
        <IconButton color={"inherit"} href={myNotionPage}>
          <LibraryBooksIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}