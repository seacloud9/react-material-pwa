import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = {
  card: {
    width: '100%',
    minHeight: 300,
    flex: 1
  },
  media: {
    width: '100%',
    height: 300
  }
}

function WPCard (props) {
  const { classes, contentObj } = props
  return (
    <Card className={classes.card} style={{
      flexDirection: 'column',
      display: 'flex'
    }}>
      <CardMedia
        className={classes.media}
        image={contentObj.image}
        title={contentObj.title}

        />
      <CardContent>
        <Typography variant='headline' component='h2'>
          {contentObj.title}
        </Typography>
        <Typography component='p' dangerouslySetInnerHTML={{__html: contentObj.body}} />
      </CardContent>
      <CardActions style={{
        justifyContent: 'flex-end',
        flex: 1,
        alignItems: 'flex-end'
      }}>
        <Button size='small' color='primary'>
            Share
          </Button>
        <Button size='small' color='primary' data={contentObj.link}>
            Learn More
          </Button>
      </CardActions>
    </Card>
  )
}

WPCard.propTypes = {
  classes: PropTypes.object.isRequired,
  contentObj: PropTypes.object.isRequired
}

export default withStyles(styles)(WPCard)
