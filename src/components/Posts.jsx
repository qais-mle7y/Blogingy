import React from 'react'
import { useState } from 'react'
import PostItem from './PostItem'
import {Fake_Posts} from '../data.js'

const Posts = () => {
  const [posts, setPosts] = useState(Fake_Posts);
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

export default Posts
