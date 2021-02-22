import React from "react"
import { makeStyles } from "@material-ui/core"
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Avatar from '@material-ui/core/Avatar'
import GitHubIcon from "@material-ui/icons/GitHub"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import CodeIcon from "@material-ui/icons/Code"
import Profile from './profile'

const useStyles = makeStyles((theme) => ({
  drawer: (props) => ({
    width: props.drawerWidth,
    flexShrink: 0,
  }),
  drawerPaper: (props) => ({
    width: props.drawerWidth,
  }),
  filler: {
    width: '100%',
    height: theme.spacing(12),
  },
  links: {
    marginTop: theme.spacing(4),
  }
}));

export default function MyDrawer(props) {
  const classes = useStyles(props);
  const MenuListItem = (props) => (
    <div>
      <ListItem
        button
        href={props.url}
        component={'a'}>
        <ListItemAvatar>
          <Avatar>
            {props.icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.primary} secondary={props.secondary} />
      </ListItem>
    </div>
  )

  return (
    <Drawer
      variant={"permanent"}
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      anchor={"left"}>
      <div className={classes.filler} />
      <Profile />
      <List className={classes.links}>
        <ListSubheader>links</ListSubheader>
        <MenuListItem
          primary={'Github Site'}
          url={'https://github.com/you-genie'}
          secondary={'you-genie'}
          icon={<GitHubIcon />}/>
        <MenuListItem
          primary={'Homepage Code'}
          url={'https://github.com/you-genie/GatsMe'}
          secondary={'React + Gatsby + Material-UI + Tailwind'}
          icon={<CodeIcon />}/>
        <MenuListItem
          primary={'Notion'}
          url={'https://www.notion.so/Reading-List-eb63538ed9064b3fac7e1e5d620ab92e'}
          secondary={'reading lists'}
          icon={<LibraryBooksIcon />}/>
      </List>
    </Drawer>
  );
}

MyDrawer.defaultProps = {
  drawerWidth: 240,
}