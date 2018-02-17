import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = {
  card: {
    width: '100%',
    minHeight:300,
    flex:1
  },
  media: {
    width: '100%'
  }
}

function WPCard (props) {
  const { classes } = props
  return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image='/static/images/cards/contemplative-reptile.jpg'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography variant='headline' component='h2'>
            Lizard
          </Typography>
          <Typography component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
  )
}

WPCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(WPCard)
