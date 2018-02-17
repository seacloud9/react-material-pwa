import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
// import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import WPCard from './WPCard'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

function GridLayout (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs>
          <WPCard className={classes.paper} />
        </Grid>
        <Grid item xs>
          <WPCard className={classes.paper} />
        </Grid>
        <Grid item xs>
          <WPCard className={classes.paper} />
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <WPCard className={classes.paper} />
        </Grid>
        <Grid item xs={6}>
          <WPCard className={classes.paper} />
        </Grid>
        <Grid item xs>
          <WPCard className={classes.paper} />
        </Grid>
      </Grid>
    </div>
  )
}

GridLayout.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GridLayout)
