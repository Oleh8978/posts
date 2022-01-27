import React from 'react';

// components
import List from '../../components/List'

interface IProps {

}

const Posts: React.FC<IProps> = () => {
  return (
    <div className="posts">
        <List />
    </div>
  );
}

export default Posts;