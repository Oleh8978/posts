import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

// components
import ListItem from '../ListItem';
import Loader from  '../Loader';
import SearchField from '../searchField';

// actions
import * as actions from '../../controllers/allPostsReducer/actions';

// interfaces
import { IStore } from '../../controllers/interfaces';
import { IPost } from '../../controllers/allPostsReducer/models';

interface IProps {
    posts: IPost[],
    loader: boolean,
    searchWord: string
}

const  List: React.FC<IProps> = (props) =>{

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getPosts.request({}))
    },[props.posts.length])

    if (!props.loader && props.posts.length === 0) {
        return <div className='posts-list'>Nothing Found</div>
    }

    if (!props.loader && props.posts.length > 0) {
        return (
        <div className='posts-list'>
            <SearchField />
            {props.posts.filter(item => item.title.match(props.searchWord)).map( item => <ListItem data={item} key={item.id} />)}
        </div>
        )
    }

  return (<Loader />);
}

export default connect((store: IStore) => ({
    posts: store.allPosts.posts,
    loader: store.loader.loader,
    searchWord: store.word.word
  }))(List);