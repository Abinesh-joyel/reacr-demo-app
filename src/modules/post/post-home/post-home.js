import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { PostList } from '../components';

const PostHome = () => {
  const [post, setPost] = useState([]);
  const location = useLocation();
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setPost(res.data);
      const item = document.querySelector(
        `#href-${location.state}`,
      );
      if (item) {
        item.scrollIntoView();
      }
    });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center title">Post List</h1>
      <div className="post-item-wrapper" />
      {post.map(({ title, body, id }) => (
        <Link to={{ pathname: '/details', state: id }} key={id} id={`href-${id}`}>
          <PostList title={title} body={body} data-test="post-list" />
        </Link>
      ))}
    </div>
  );
};

export default PostHome;
