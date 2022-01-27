import React from 'react';
import { Link } from 'react-router-dom';

// interfaces
import { IPost } from '../../controllers/allPostsReducer/models';

interface IProps {
    data: IPost
}

const  ListItem: React.FC<IProps> = (props) =>{
  return (
        <Link className='posts-list-item' to={`post/${props.data.id}`}>
            <div className='posts-list-item-top'><b>Title:</b> {props.data.title}</div>
            <div className='posts-list-item-bottom'>{props.data.body}</div>
        </Link>
  );
}

export default ListItem;