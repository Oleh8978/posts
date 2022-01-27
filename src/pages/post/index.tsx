import React from 'react';

import SinglePost from '../../components/singlePost';

interface IProps {

}

const Post: React.FC<IProps> = () => {
  return (
    <div className="post">
        <SinglePost />
    </div>
  );
}

export default Post;