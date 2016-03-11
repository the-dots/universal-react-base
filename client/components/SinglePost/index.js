import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchPost } from '../../actions/posts'
import style from './singlePost.css'

class SinglePost extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchPost(this.props.routeParams.id))
  }

  render() {
    return (
      <div>
        <header className={style.header}>
          <h3 className={style.title}>{this.props.post.title}</h3>
          <span className={style.author}>{this.props.post.author}</span>
          <Link to="/posts" className={style.close}>&larr; BACK TO POSTS</Link>
        </header>
        <p className={style.text}>{this.props.post.text}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.post
  }
}

SinglePost = connect(mapStateToProps)(SinglePost)

export default SinglePost