import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Paper } from '@material-ui/core'
import Body1 from 'ui/ui-elements/typography/Body1'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import iTVC from './media/tvc-wordmark-2.svg'

const Mern = ({ classes }) => {
  return (
    <div id='ByTvc' className={classes.container}>
      <Paper className={classes.item} square elevation={0}>
        <Body1 align='center' color='white' className={classes.title}>Made with pride by</Body1>
        <ResponsiveImage src={iTVC} alt='tri valley coders' />
      </Paper>
    </div>
  )
}

const styles = theme => ({
  container: {
    // backgroundColor: 'rgb(25, 25, 25)',
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignContent: 'stretch',
    justifyContent: 'center',

  },
  item: {
    backgroundColor: 'transparent',
    // backgroundColor: 'rgb(50, 50, 50)',
    textAlign: 'center',
  },
  title:{
    marginBottom: theme.spacing.unit * 2
  }
})

export default withStyles(styles)(Mern)
