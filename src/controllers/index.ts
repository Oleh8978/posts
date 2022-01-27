import {all} from 'redux-saga/effects';
import { combineReducers, Reducer } from 'redux';

// reducers && sagas
import { postsReducer, allPostsSagas} from './allPostsReducer';
import { postReducer, postSaga } from './singlePostReducer';
import { errorsReducer } from './errorReducer';
import { loaderReducer } from './loaderReducer';
import { selectPostReducer } from './selectPostReducer';

// interface
import { IStore } from "./interfaces";

export const rootSaga = function* () {
    yield all([
        allPostsSagas(),
        postSaga(),
    ])
}

export const rootReducer = (): Reducer => 
    combineReducers<IStore>({
        allPosts: postsReducer,
        singlePost: postReducer,
        errors: errorsReducer,
        loader: loaderReducer,
        selectedPost: selectPostReducer,
});