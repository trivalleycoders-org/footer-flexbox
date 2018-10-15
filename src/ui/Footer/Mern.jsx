import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import Title from 'ui/ui-elements/typography/Title'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import iMongo from './media/mongodb.boxed.svg'
import iExpress from './media/express.boxed.svg'
import iReact from './media/react.boxed.1.svg'
import iNode from './media/nodejs.boxed.svg'

const Mern = ({ classes }) => {

  return (
    <div id='Mern' className={classes.container}>
      <div className={classes.row1}>
        <Paper className={classes.titlePaper} square elevation={0}>
          <Title align='center' color='white'>MERN Stack Experts</Title>
        </Paper>
      </div>
      <div className={classes.row2}>
        <Paper className={classes.paper} square elevation={0}>
          <Grid
            container
            justify='space-evenly'
            direction='row'
            spacing={8}
          >
            <Grid
              item
              className={classes.item}
              xs={6}
              md={6}
              lg={3}
            >
              <Paper className={classes.logoPaper} elevation={0}>
                <ResponsiveImage src={iMongo} alt='mongo db' />
              </Paper>
            </Grid>
            <Grid
              item
              className={classes.item}
              xs={6}
              md={6}
              lg={3}
            >
              <Paper className={classes.logoPaper} elevation={0}>
                <ResponsiveImage src={iExpress} alt='express js' />
              </Paper>
            </Grid>
            <Grid
              item
              className={classes.item}
              xs={6}
              md={6}
              lg={3}
            >
              <Paper className={classes.logoPaper} elevation={0}>
                <ResponsiveImage src={iReact} alt='react' />
              </Paper>
            </Grid>
            <Grid
              item
              className={classes.item}
              xs={6}
              md={6}
              lg={3}
            >
              <Paper className={classes.logoPaper} elevation={0}>
                <ResponsiveImage src={iNode} alt='node js' />
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  )
}

const styles = theme => ({
  item: {
    // backgroundColor: 'red',
    textAlign: 'center',
  },
  container: {
    // backgroundColor: 'green',
    height: '100%',
    // backgroundColor: 'rgb(25, 25, 25)'
  },
  row1: {
    // backgroundColor: 'rgb(50, 50, 50)',
    height: '33.333333333333%',
  },
  row2: {
    // backgroundColor: 'rgb(75, 75, 75)',
    height: '66.666666666666%',
  },
  titlePaper: {
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'transparent',
    padding: theme.spacing.unit * 2,
    height: '100%',
  },
  paper: {
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: theme.spacing.unit * 2,
    height: '100%',
  },
  logoPaper: {
    backgroundColor: 'transparent',
  },
})

export default withStyles(styles)(Mern)

/*


*/