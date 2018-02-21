import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import * as R from 'ramda'
import Grid from 'material-ui/Grid'
import WPCard from './WPCard'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 10,
    marginTop: 70
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

class GridLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = props
    this.grid = null
  }

  componentWillReceiveProps (newProps) {
    this.setState(newProps, () => {
      if (this.state.posts.length) this.generateCards()
    })
  }

  generateCards = () => {
    let wpCardsArr = []
    R.forEachObjIndexed((value, key) => {
      const contentObj = {
        title: value.title.rendered,
        link: value.link.replace('http://i-create.org', ''),
        body: value.excerpt.rendered,
        image: (value.better_featured_image ? value.better_featured_image.media_details.sizes['medium_large'].source_url : '/images/placeholder/sc9Img1.jpg')
      }
      wpCardsArr.push(
        <Grid item xs style={{
          flexDirection: 'column',
          display: 'flex'
        }}>
          <WPCard className={this.props.classes.paper} contentObj={contentObj} />
        </Grid>)
    }
    , this.state.posts)
    this.createGrid(wpCardsArr)
  }

  createGrid = (wpCardsArr) => {
    this.grid = []
    let row = []
    for (let i = 0; i < this.state.posts.length; i++) {
      if (i % 3 === 0) {
        if (row.length) this.grid.push(row)
        row = []
      }
      row.push(wpCardsArr[i])
    }
    this.setState({grid: this.grid})
  }

  render () {
    return (
      <div className={this.props.classes.root}>
        {this.grid && this.grid.map((item, index) => {
          return (
            <Grid container key={index} spacing={24}>
              {item[0]}
              {item[1]}
              {item[2]}
            </Grid>
          )
        })}
      </div>
    )
  }
}

GridLayout.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GridLayout)
