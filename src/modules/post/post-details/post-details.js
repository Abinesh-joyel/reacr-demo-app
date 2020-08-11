import React, { useEffect } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';

const PostDetails = () => {
  const history = useHistory();
  const { location } = history;

  useEffect(() =>
    // console.log(location);
    // history.replace({ path: '/', state: location.state });
    // history.listen((loc) => {
    //   console.log('details', loc);
    //   if (history.action === 'POP') {
    //     history.replace({ state: location.state });
    //   }
    // });
    () => {
    },
  []);
  return (
    <div>
      details of the post
      <Link to={{ pathname: '/', state: location.state }}>
        <button type="button">
          Return to list
        </button>
      </Link>
    </div>
  );
};

export default PostDetails;
