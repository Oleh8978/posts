import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import * as actions from '../../controllers/singlePostReducer/action';


// interfaces
import { IPost } from '../../controllers/allPostsReducer/models';
import { IStore } from '../../controllers/interfaces';
import Loader from '../Loader';

interface IProps {
    post: IPost | null,
    loader: boolean
}

const  SinglePost: React.FC<IProps> = (props) =>{

  const dispatch = useDispatch();

  const numberPattern = /\d+/g;

  const id = () => {

    const locationId = String(window.location.pathname).match( numberPattern )

    if (locationId) {
      return locationId.join('')
    }
    
    return ''

  }

  useEffect(() => {
    dispatch(actions.getPost.request(id()))
  },[])

  if (!props.loader && !props.post) {
    return <div className='post-wrapper'><>Nothing Found</></div>
  }

  if (props.post && !props.loader) {
    return (
      <div className='post-wrapper'>
        <>
          <div className='posts-list-item-top'>Title: {props.post.title}</div>
          <div className='posts-list-item-bottom'> {props.post.body}</div>
        </> 
        <Link 
            className='back-btn'
            to='/posts/'
        >Back</Link>
      </div>
    )
  }

  return (<Loader />);
}

export default connect((store: IStore) => ({
  post: store.singlePost.post,
  loader: store.loader.loader
}))(SinglePost);