/**
 * Created by brsmith on 7/3/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import WordpressActions from '../reducers/wordpress'
import GridLayout from '../components/GridLayout'
import MaterialNavBar from '../components/MaterialNavBar'

class WordpressContainer extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    document.querySelector('#loader').hidden = true
    this.props.wpAllRequested({pageName: this.props.match.params.pageName})
  }

  componentWillReceiveProps (newProps) {
    this.setState(newProps)
  }

  onChange () {

  }

  render () {
    return (
      <div>
        <MaterialNavBar />
        <GridLayout />
      </div>
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
    wpAllRequested: (payload) => dispatch(WordpressActions.wpAllRequested(payload)),
    getPosts: (payload) => dispatch(WordpressActions.getPosts(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordpressContainer)
