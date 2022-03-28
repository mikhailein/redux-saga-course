import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import { fetchPosts } from 'redux/actions.js'
import Loader from './Loader'

const FetchedPosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.fetchedPosts)
  const loading=useSelector(state=>state.app.loading)

  if (loading) {
    return <Loader></Loader>
  }

  return posts.length>0 ?
    posts.map(post => <Post post={post} key={post.id}></Post>)
    :
    <button
      onClick={() => dispatch(fetchPosts())}
      className='btn btn-primary'
    >Download posts</button>
}

export default FetchedPosts