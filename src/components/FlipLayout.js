import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import * as R from 'ramda'
// import Grid from 'material-ui/Grid'
import WPCard from './WPCard'
import FlipPage from 'react-flip-page'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 10,
    marginTop: 70,
    width: window.innerWidth - 20,
    height: window.innerHeight - 70
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

class FlipLayout extends React.Component {
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
        image: (value.better_featured_image && value.better_featured_image.media_details.sizes['medium_large'] ? value.better_featured_image.media_details.sizes['medium_large'].source_url : '/images/placeholder/sc9Img1.jpg')
      }
      wpCardsArr.push(
        <WPCard className={this.props.classes.paper} contentObj={contentObj} />
        )
    }
    , this.state.posts)
    this.createGrid(wpCardsArr)
  }

  createGrid = (wpCardsArr) => {
    this.grid = []
    for (let i = 0; i < this.state.posts.length; i++) {
      this.grid.push(wpCardsArr[i])
    }
    this.setState({grid: this.grid})
  }

  render () {
    return (
      <div className={this.props.classes.root}>
        <FlipPage onPageChange={(index) => (index % 12 === 0) ? this.props.loadMore() : null} responsive orientation='vertical' ref={(component) => { this.flipPage = component }} >
          {this.grid && this.grid.map((item, index) =>
            <div key={index} >
              {item}
            </div>
          )}
        </FlipPage>
      </div>
    )
  }
}

FlipLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  loadMore: PropTypes.any
}

export default withStyles(styles)(FlipLayout)
