import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Us from './Us'
import Mern from './Mern'

const RightSide = ({ classes }) => {
  return (
    <div className={classes.rightSide}>
      <div className={classes.rightTop}>
        <Mern />
      </div>
      <div className={classes.dividerContainer}>
        <div className={classes.divider}></div>
      </div>

      <div className={classes.rightBottom}>
        <Us />
      </div>
    </div>
  )
}

const styles = theme => ({
  rightTop: {
    // backgroundColor: 'red',
    flexBasis: '50%',
  },
  rightBottom: {
    // backgroundColor: 'orange',
    flexBasis: '50%',
  },
  rightSide: {
    // backgroundColor: 'grey',
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
  },
  dividerContainer: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  divider: {
    backgroundColor: 'grey',
    height: 1,
  },
})

export default withStyles(styles)(RightSide)