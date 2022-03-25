import React, { useContext } from 'react'
import Post from './Post'
import { connect } from 'react-redux'

const Posts = ({ posts }) => {
     
    return posts.length > 0 ? posts.map(post => <Post post={post} key={post.id}></Post>) : <p>No posts</p>
}
const mapStateToProps = state => {
    console.log(state);
    return {
        posts:state.posts.posts
    }
}
export default connect(mapStateToProps, null)(Posts)