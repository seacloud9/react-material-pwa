/**
 * Created by brsmith on 7/3/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import WordpressActions from '../reducers/wordpress'
import GridLayout from '../components/GridLayout'
import MaterialNavBar from '../components/MaterialNavBar'
import InfiniteScroll from 'react-infinite-scroller'

class WordpressContainer extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = props
    this.page = 0
  }

  componentDidMount () {
    document.querySelector('#loader').hidden = true
    if (this.props.match.params.pageName) {
      this.props.wpSlugRequested({pageName: this.props.match.params.pageName})
    }
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
        <InfiniteScroll
          initialLoad={false}
          pageStart={this.page}
          loadMore={() => {
            this.page++
            this.props.wpPageRequested({pageNumber: this.page})
          }}
          hasMore
          loader={<div className='loader'>Loading ...</div>}
        >
          <GridLayout posts={this.state.posts} key={0} />
        </InfiniteScroll>
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
    wpSlugRequested: (payload) => dispatch(WordpressActions.wpSlugRequested(payload)),
    wpPageRequested: (payload) => dispatch(WordpressActions.wpPageRequested(payload)),
    wpAllRequested: (payload) => dispatch(WordpressActions.wpAllRequested(payload)),
    getPosts: (payload) => dispatch(WordpressActions.getPosts(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordpressContainer)
