import React from 'react'
import { Link } from 'react-router-dom'

import Avatar1 from '../images/avatar2.jpg'

const PostAuthor = () => {
  return (
    <Link to={'/posts/users/sdfsdf'} className='post__author'>
      <div className="post__author-avatar">
        <img src={Avatar1} alt="" />
      </div>
      <div className="post__author-details">
        <h5>By: Qais Alsaleh</h5>
        <small>Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor
