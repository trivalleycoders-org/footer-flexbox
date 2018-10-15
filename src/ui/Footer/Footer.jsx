import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import RightSide from './RightSide'
import ByTvc from './ByTvc'

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.left}>
        <ByTvc />
      </div>
      <div className={classes.dividerContainer}>
        <div className={classes.divider}></div>
      </div>
      <div className={classes.right}>
        <RightSide />
      </div>
    </footer>
  )
}

const styles = theme => ({

  footer: {
    // minHeight: 480,
    // backgroundColor: 'rgba(255, 150, 255, 0.4)',
    backgroundColor: 'rgb(22, 22, 22)',
    height: 512,
    display: 'flex',
    flexFlow: 'column nowrap',

    [theme.breakpoints.up('md')]: {
      // backgroundColor: 'rgba(255, 150, 255, 1)',
      flexFlow: 'row nowrap',
    },
  },
  left: {
    // backgroundColor: 'orange',
    height: '100%',
    // flexFlow: 'row nowrap',
    [theme.breakpoints.up('md')]: {
      flexBasis: '33.33333333%',
    },
  },
  right: {
    // backgroundColor: 'yellow',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      flexBasis: '66.66666666%',
    },
  },
  dividerContainer: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    // backgroundColor: 'grey',
  },
  divider: {
    backgroundColor: 'grey',
    width: 1,
    height: '100%',
  },
})

export default withStyles(styles)(Footer)