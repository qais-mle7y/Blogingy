import React, { useState } from 'react'
import { Fake_Posts } from '../data.js'
import PostItem from '../components/PostItem.jsx'

const AuthorPosts = () => {
  const [posts, setPosts] = useState(Fake_Posts)
  return (
    <section className="posts">
      {posts.length > 0 ? <div className="container posts__container">
      {
        posts.map((post) => 
          <PostItem key={post.id} postID={post.id} thumbnail={post.thumbnail} category={post.category} title={post.title}
          description={post.description} authorID={post.authorID}/>
        )
      }
      </div> : <h2 className='center'>No posts found</h2>}
    </section>
  )
}

export default AuthorPosts
