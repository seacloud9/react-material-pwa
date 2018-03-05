/**
 * Created by brsmith on 7/3/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import { WordpressRedux } from 'wp-react-core'
import GridLayout from '../components/GridLayout'
import MaterialNavBar from '../components/MaterialNavBar'
import InfiniteScroll from 'react-infinite-scroller'
const { WordpressActions } = WordpressRedux

class WordpressContainer extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = props
    this.page = 1
  }

  componentDidMount () {
    document.querySelector('#loader').hidden = true
    if (this.props.match.params.pageName) {
      this.props.wpSlugRequested({pageName: this.props.match.params.pageName})
    } else {
      // you have to have at least one post
      if (!this.state.posts.length) this.props.wpAllRequested()
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
            if (!this.state.fetching) {
              ++this.page
              this.props.wpPageRequested({pageNumber: this.page})
            }
          }}
          hasMore
          loader={<div key={1} className='loader'>Loading ...</div>}
        >
          <GridLayout posts={this.state.posts} key={0} />
        </InfiniteScroll>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return ({
    fetching: state.wp.fetching,
    posts: state.wp.posts,
    post: state.wp.post
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
