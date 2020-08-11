import React from 'react';
import PropTypes from 'prop-types';

const PostList = ({ title, body }) => (
  <div className="post-item margin-top">
    <h2 className="post-list-title">{title}</h2>
    <p className="post-list-body">{body}</p>
  </div>
);

// PostList.propTypes = {
//   title: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
// };

export default PostList;
