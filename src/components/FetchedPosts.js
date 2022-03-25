import React from 'react'
import Post from './Post'

const FetchedPosts = ({posts}) => {
  return posts ? posts.map(post => <Post post={post} key={post.id}></Post>) : <button className='btn btn-primary'>Download posts</button>
}

export default FetchedPosts