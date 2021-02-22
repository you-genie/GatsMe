import React from "react"
import { makeStyles } from "@material-ui/core"
import Drawer from '@material-ui/core/Drawer'
import Typography from "@material-ui/core/Typography"
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import GitHubIcon from "@material-ui/icons/GitHub"
import PersonIcon from "@material-ui/icons/Person"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import CodeIcon from "@material-ui/icons/Code"

const useStyles = makeStyles((theme) => ({
  drawer: {},
  drawerPaper: (props) => ({
    width: props.drawerWidth,
  }),
}));

export default function MyDrawer(props) {
  const classes = useStyles(props);

  return (
    <Drawer
      variant={"permanent"}
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      anchor={"left"}>
      <Divider />
    </Drawer>
  );
}

MyDrawer.defaultProps = {
  drawerWidth: 240,
}