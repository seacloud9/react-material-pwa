/**
 * Created by brsmith on 7/3/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import WordpressActions from '../reducers/wordpress'
import WPCard from '../components/WPCard'


class WordpressContainer extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = props
    console.log(props)
  }



  componentDidMount () {
    document.querySelector('#loader').hidden = true
  }

  componentWillReceiveProps (newProps) {
    this.setState(newProps)
  }

  onChange () {

  }


  render () {
    return (
      <div style={{flex:1, flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
        <WPCard />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(state)
  return ({
    posts: state.wp.posts
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (payload) => dispatch(WordpressActions.getPosts(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordpressContainer)

