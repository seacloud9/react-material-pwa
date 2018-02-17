/**
 * Created by brsmith on 7/3/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import WordpressActions from '../reducers/wordpress'
import GridLayout from '../components/GridLayout'

class WordpressContainer extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    document.querySelector('#loader').hidden = true
    this.props.wpAllRequested()
  }

  componentWillReceiveProps (newProps) {
    this.setState(newProps)
  }

  onChange () {

  }

  render () {
    return (
      <GridLayout />
    )
  }
}

const mapStateToProps = (state, props) => {
  return ({
    posts: state.wp.posts
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    wpAllRequested: () => dispatch(WordpressActions.wpAllRequested()),
    getPosts: (payload) => dispatch(WordpressActions.getPosts(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordpressContainer)
