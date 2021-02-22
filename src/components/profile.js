import React from "react"
import { makeStyles } from "@material-ui/core"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography"
import {Image} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(50),
    paddingTop: theme.spacing(5),
  },
  profileImg: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderRadius: theme.spacing(10),
    objectFit: 'cover',
  },
  profileText: {
    width: theme.spacing(30),
  },
  profileName: {
    marginBottom: theme.spacing(4),
  },
  profileTextPrimary: {
    width: theme.spacing(12),
  },
  profileTextSecondary: {

  }
}))

export default function Profile() {
  const classes = useStyles();
  const ListGrid = (props) => (
    <Grid
      container
      justify={'flex-start'}
      alignItems={'center'}
      direction={'row'}>
      <Typography
        className={classes.profileTextPrimary}
        color={"primary"}
        variant={'subtitle1'}>
        {props.primary}
      </Typography>
      <Typography
        variant={'subtitle1'}>
        {props.secondary}
      </Typography>
    </Grid>
  );

  return (
    <Paper
      elevation={0}
      className={classes.root}>
      <Grid
        container
        justify={'center'}
        alignItems={'center'}
        direction={'column'}>
        <img src={'images/me.jpg'} className={classes.profileImg}/>
        <Typography
          className={classes.profileName}
          variant={'button'}>
          Genne Chung
        </Typography>
        <Grid
          container
          className={classes.profileText}
          alignItems={'flex-start'}>
          <ListGrid primary={'name'} secondary={'정유진'} />
          <ListGrid primary={'associate'} secondary={'KAIST Computer Graphics & Visualization Lab'} />

        </Grid>
      </Grid>
    </Paper>
  )
}
