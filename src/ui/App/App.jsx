import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

// User
// import Breakpoints from 'ui/ui-elements/Breakpoints'
import withRoot from 'ui/withRoot'
import Footer from 'ui/Footer'

const App = ({ classes }) => {

    return (
      <div className={classes.wrapper}>
        <Footer />
      </div>
    )

}

const styles = theme => ({
  wrapper: {
    // padding: 100,
    backgroundColor: 'grey',
    height: '100vh'
  },

})



export default compose(
  withStyles(styles),
  withRoot
)(App)



