import React from 'react';
import { PostList } from '../components';

const PostHome = () => (
  <div className="container">
    <h1 className="text-center title">Post List</h1>
    <div className="post-item-wrapper" />
    <PostList title="title" body="title" data-test="post-list" />
  </div>
);

export default PostHome;
